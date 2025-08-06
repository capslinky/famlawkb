// Export Service for generating PDFs and documents
// Provides functionality to export forms, documents, and reports

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export interface ExportOptions {
  format: 'pdf' | 'docx' | 'txt' | 'json';
  includeMetadata?: boolean;
  includeWatermark?: boolean;
  watermarkText?: string;
  password?: string;
  filename?: string;
  orientation?: 'portrait' | 'landscape';
  pageSize?: 'a4' | 'letter' | 'legal';
}

export interface ExportContent {
  title: string;
  content: string | HTMLElement | any;
  type: 'form' | 'document' | 'report' | 'case' | 'timeline';
  metadata?: {
    author?: string;
    createdDate?: Date;
    caseNumber?: string;
    formNumber?: string;
    version?: string;
    confidential?: boolean;
  };
}

class ExportService {
  // Export to PDF
  async exportToPDF(content: ExportContent, options: ExportOptions): Promise<Blob> {
    const pdf = new jsPDF({
      orientation: options.orientation || 'portrait',
      unit: 'mm',
      format: options.pageSize || 'a4'
    });

    // Add metadata
    if (options.includeMetadata && content.metadata) {
      pdf.setProperties({
        title: content.title,
        author: content.metadata.author || 'Arizona Family Law Knowledge Base',
        subject: `${content.type} Export`,
        keywords: content.metadata.caseNumber || '',
        creator: 'AZ Family Law System'
      });
    }

    // Add header
    this.addPDFHeader(pdf, content);

    // Add content based on type
    if (typeof content.content === 'string') {
      this.addTextContent(pdf, content.content);
    } else if (content.content instanceof HTMLElement) {
      await this.addHTMLContent(pdf, content.content);
    } else {
      this.addStructuredContent(pdf, content.content);
    }

    // Add watermark if requested
    if (options.includeWatermark) {
      this.addWatermark(pdf, options.watermarkText || 'CONFIDENTIAL');
    }

    // Add footer
    this.addPDFFooter(pdf, content);

    // Add password protection if requested
    if (options.password) {
      // Note: jsPDF doesn't support password protection directly
      // In production, would use a server-side solution
      console.warn('Password protection requires server-side implementation');
    }

    return pdf.output('blob');
  }

  // Export to Word document
  async exportToWord(content: ExportContent, options: ExportOptions): Promise<Blob> {
    // Create HTML structure for Word
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${content.title}</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; }
          h1 { color: #333; border-bottom: 2px solid #333; padding-bottom: 10px; }
          h2 { color: #555; margin-top: 20px; }
          .metadata { color: #666; font-size: 12px; margin-bottom: 20px; }
          .watermark { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-45deg);
                       font-size: 72px; color: rgba(0,0,0,0.1); z-index: -1; }
          .footer { margin-top: 50px; padding-top: 20px; border-top: 1px solid #ccc;
                    font-size: 11px; color: #666; }
          table { border-collapse: collapse; width: 100%; margin: 20px 0; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; }
        </style>
      </head>
      <body>
        ${options.includeWatermark ? `<div class="watermark">${options.watermarkText || 'CONFIDENTIAL'}</div>` : ''}
        <h1>${content.title}</h1>
        ${this.renderMetadata(content.metadata)}
        <div class="content">
          ${this.renderContent(content.content)}
        </div>
        <div class="footer">
          ${this.renderFooter(content)}
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([html], { 
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
    });
    
    return blob;
  }

  // Export to plain text
  exportToText(content: ExportContent, options: ExportOptions): Blob {
    let text = '';
    
    // Add header
    text += '='.repeat(60) + '\n';
    text += content.title.toUpperCase() + '\n';
    text += '='.repeat(60) + '\n\n';

    // Add metadata
    if (options.includeMetadata && content.metadata) {
      text += 'DOCUMENT INFORMATION\n';
      text += '-'.repeat(20) + '\n';
      if (content.metadata.author) text += `Author: ${content.metadata.author}\n`;
      if (content.metadata.createdDate) text += `Date: ${content.metadata.createdDate.toLocaleDateString()}\n`;
      if (content.metadata.caseNumber) text += `Case Number: ${content.metadata.caseNumber}\n`;
      if (content.metadata.formNumber) text += `Form Number: ${content.metadata.formNumber}\n`;
      text += '\n';
    }

    // Add content
    if (typeof content.content === 'string') {
      text += content.content;
    } else if (typeof content.content === 'object') {
      text += this.objectToText(content.content);
    }

    // Add footer
    text += '\n\n' + '-'.repeat(60) + '\n';
    text += `Generated on ${new Date().toLocaleString()}\n`;
    text += 'Arizona Family Law Knowledge Base\n';

    return new Blob([text], { type: 'text/plain' });
  }

  // Export to JSON
  exportToJSON(content: ExportContent, options: ExportOptions): Blob {
    const data = {
      title: content.title,
      type: content.type,
      metadata: options.includeMetadata ? content.metadata : undefined,
      content: content.content,
      exportDate: new Date().toISOString(),
      version: '1.0'
    };

    const json = JSON.stringify(data, null, 2);
    return new Blob([json], { type: 'application/json' });
  }

  // Main export function
  async export(content: ExportContent, options: ExportOptions): Promise<void> {
    let blob: Blob;

    switch (options.format) {
      case 'pdf':
        blob = await this.exportToPDF(content, options);
        break;
      case 'docx':
        blob = await this.exportToWord(content, options);
        break;
      case 'txt':
        blob = this.exportToText(content, options);
        break;
      case 'json':
        blob = this.exportToJSON(content, options);
        break;
      default:
        throw new Error(`Unsupported format: ${options.format}`);
    }

    // Download the file
    this.downloadFile(blob, options.filename || this.generateFilename(content, options));
  }

  // Helper: Add PDF header
  private addPDFHeader(pdf: jsPDF, content: ExportContent): void {
    pdf.setFontSize(20);
    pdf.text(content.title, 20, 20);
    
    pdf.setFontSize(10);
    pdf.setTextColor(100);
    pdf.text(`Document Type: ${content.type}`, 20, 30);
    
    if (content.metadata?.caseNumber) {
      pdf.text(`Case Number: ${content.metadata.caseNumber}`, 20, 35);
    }
    
    pdf.setTextColor(0);
    pdf.setFontSize(12);
  }

  // Helper: Add text content to PDF
  private addTextContent(pdf: jsPDF, text: string): void {
    const lines = pdf.splitTextToSize(text, 170);
    let y = 50;
    
    lines.forEach((line: string) => {
      if (y > 270) {
        pdf.addPage();
        y = 20;
      }
      pdf.text(line, 20, y);
      y += 7;
    });
  }

  // Helper: Add HTML content to PDF
  private async addHTMLContent(pdf: jsPDF, element: HTMLElement): Promise<void> {
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
  }

  // Helper: Add structured content to PDF
  private addStructuredContent(pdf: jsPDF, data: any): void {
    let y = 50;

    const addKeyValue = (key: string, value: any, indent: number = 0) => {
      if (y > 270) {
        pdf.addPage();
        y = 20;
      }

      const indentStr = ' '.repeat(indent * 2);
      
      if (typeof value === 'object' && value !== null) {
        pdf.setFont('helvetica', 'bold');
        pdf.text(`${indentStr}${key}:`, 20, y);
        pdf.setFont('helvetica', 'normal');
        y += 7;
        
        Object.entries(value).forEach(([k, v]) => {
          addKeyValue(k, v, indent + 1);
        });
      } else {
        pdf.text(`${indentStr}${key}: ${value}`, 20, y);
        y += 7;
      }
    };

    if (typeof data === 'object') {
      Object.entries(data).forEach(([key, value]) => {
        addKeyValue(key, value);
      });
    }
  }

  // Helper: Add watermark to PDF
  private addWatermark(pdf: jsPDF, text: string): void {
    const pageCount = pdf.getNumberOfPages();
    
    for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i);
      pdf.setTextColor(200);
      pdf.setFontSize(60);
      pdf.setFont('helvetica', 'bold');
      
      // Rotate and center the watermark
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      pdf.text(text, pageWidth / 2, pageHeight / 2, {
        angle: 45,
        align: 'center'
      });
      
      pdf.setTextColor(0);
      pdf.setFont('helvetica', 'normal');
    }
  }

  // Helper: Add PDF footer
  private addPDFFooter(pdf: jsPDF, content: ExportContent): void {
    const pageCount = pdf.getNumberOfPages();
    
    for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i);
      pdf.setFontSize(10);
      pdf.setTextColor(100);
      
      // Page number
      pdf.text(
        `Page ${i} of ${pageCount}`,
        pdf.internal.pageSize.getWidth() / 2,
        pdf.internal.pageSize.getHeight() - 10,
        { align: 'center' }
      );
      
      // Footer text
      pdf.text(
        'Arizona Family Law Knowledge Base',
        20,
        pdf.internal.pageSize.getHeight() - 10
      );
      
      // Date
      pdf.text(
        new Date().toLocaleDateString(),
        pdf.internal.pageSize.getWidth() - 40,
        pdf.internal.pageSize.getHeight() - 10
      );
    }
    
    pdf.setTextColor(0);
  }

  // Helper: Render metadata as HTML
  private renderMetadata(metadata?: ExportContent['metadata']): string {
    if (!metadata) return '';
    
    let html = '<div class="metadata">';
    if (metadata.author) html += `<p>Author: ${metadata.author}</p>`;
    if (metadata.createdDate) html += `<p>Date: ${metadata.createdDate.toLocaleDateString()}</p>`;
    if (metadata.caseNumber) html += `<p>Case Number: ${metadata.caseNumber}</p>`;
    if (metadata.formNumber) html += `<p>Form Number: ${metadata.formNumber}</p>`;
    if (metadata.version) html += `<p>Version: ${metadata.version}</p>`;
    html += '</div>';
    
    return html;
  }

  // Helper: Render content as HTML
  private renderContent(content: any): string {
    if (typeof content === 'string') {
      return `<div>${content.replace(/\n/g, '<br>')}</div>`;
    }
    
    if (typeof content === 'object') {
      return this.objectToHTML(content);
    }
    
    return String(content);
  }

  // Helper: Render footer as HTML
  private renderFooter(content: ExportContent): string {
    return `
      <p>Generated on ${new Date().toLocaleString()}</p>
      <p>Arizona Family Law Knowledge Base</p>
      <p>This document is for informational purposes only and does not constitute legal advice.</p>
    `;
  }

  // Helper: Convert object to HTML
  private objectToHTML(obj: any): string {
    if (Array.isArray(obj)) {
      return `<ul>${obj.map(item => `<li>${this.objectToHTML(item)}</li>`).join('')}</ul>`;
    }
    
    if (typeof obj === 'object' && obj !== null) {
      let html = '<table>';
      Object.entries(obj).forEach(([key, value]) => {
        html += `<tr><th>${key}</th><td>${this.objectToHTML(value)}</td></tr>`;
      });
      html += '</table>';
      return html;
    }
    
    return String(obj);
  }

  // Helper: Convert object to text
  private objectToText(obj: any, indent: number = 0): string {
    const indentStr = '  '.repeat(indent);
    
    if (Array.isArray(obj)) {
      return obj.map(item => `${indentStr}- ${this.objectToText(item, indent + 1)}`).join('\n');
    }
    
    if (typeof obj === 'object' && obj !== null) {
      return Object.entries(obj)
        .map(([key, value]) => {
          if (typeof value === 'object') {
            return `${indentStr}${key}:\n${this.objectToText(value, indent + 1)}`;
          }
          return `${indentStr}${key}: ${value}`;
        })
        .join('\n');
    }
    
    return String(obj);
  }

  // Helper: Generate filename
  private generateFilename(content: ExportContent, options: ExportOptions): string {
    const date = new Date().toISOString().split('T')[0];
    const title = content.title.toLowerCase().replace(/\s+/g, '_').substring(0, 30);
    const extension = options.format === 'docx' ? 'doc' : options.format;
    
    return `${title}_${date}.${extension}`;
  }

  // Helper: Download file
  private downloadFile(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  // Export form data
  async exportForm(formData: any, formType: string, options: Partial<ExportOptions> = {}): Promise<void> {
    const content: ExportContent = {
      title: `${formType} Form`,
      content: formData,
      type: 'form',
      metadata: {
        createdDate: new Date(),
        formNumber: formData.formNumber,
        caseNumber: formData.caseNumber
      }
    };

    const exportOptions: ExportOptions = {
      format: 'pdf',
      includeMetadata: true,
      includeWatermark: false,
      ...options
    };

    await this.export(content, exportOptions);
  }

  // Export case summary
  async exportCaseSummary(caseData: any, options: Partial<ExportOptions> = {}): Promise<void> {
    const content: ExportContent = {
      title: `Case Summary - ${caseData.caseNumber}`,
      content: caseData,
      type: 'case',
      metadata: {
        caseNumber: caseData.caseNumber,
        createdDate: new Date(),
        confidential: true
      }
    };

    const exportOptions: ExportOptions = {
      format: 'pdf',
      includeMetadata: true,
      includeWatermark: true,
      watermarkText: 'CONFIDENTIAL',
      ...options
    };

    await this.export(content, exportOptions);
  }
}

// Export singleton instance
export const exportService = new ExportService();

// Note: In a real implementation, you would need to install:
// npm install html2canvas jspdf
// These are placeholder imports for the concept