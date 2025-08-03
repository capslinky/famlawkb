---
title: Divorce Process Flowchart
description: Visual guide to the Arizona divorce process from filing to final decree
keywords: divorce flowchart, process diagram, visual guide, Arizona divorce steps
tags:
  - flowchart
  - divorce-process
  - visual-guide
  - timeline
updated: 2024-12-30
reviewed: 2024-12-30
---

# Divorce Process Flowchart

## 🔍 Visual Overview

This flowchart shows the typical path of an Arizona divorce from start to finish. Your case may vary based on complexity and whether it's contested.

## 📊 The Complete Process

```mermaid
flowchart TD
    Start([Decide to Divorce]) --> Prep[Gather Documents]
    Prep --> File{Petitioner or<br/>Respondent?}
    
    File -->|Petitioner| FilePet[File Petition<br/>Pay $349]
    File -->|Respondent| WaitServe[Wait to be Served]
    
    FilePet --> GetSum[Get Summons<br/>from Clerk]
    GetSum --> Serve[Serve Spouse<br/>Within 120 days]
    
    Serve --> WaitResp[Wait for Response]
    WaitServe --> Served[Receive Papers]
    
    Served --> Respond{Respond Within<br/>20/30 days?}
    Respond -->|Yes| FileResp[File Response<br/>Pay $274]
    Respond -->|No| Default[Default Possible]
    
    WaitResp --> Check{Response<br/>Filed?}
    Check -->|No| Default
    Check -->|Yes| FileResp
    
    FileResp --> Disclosure[Financial Disclosure<br/>Due in 40 days]
    Default --> DefaultProc[Default Proceedings]
    
    Disclosure --> Temp{Need Temporary<br/>Orders?}
    Temp -->|Yes| TempMotion[File Motion]
    Temp -->|No| Negotiate
    
    TempMotion --> TempHear[Temporary Orders<br/>Hearing]
    TempHear --> TempOrder[Temporary Orders<br/>Issued]
    TempOrder --> Negotiate
    
    Negotiate --> Agree{Reach<br/>Agreement?}
    Agree -->|Yes| Consent[Draft Consent Decree]
    Agree -->|No| Discovery[Discovery Process]
    
    Discovery --> Mediation{Try<br/>Mediation?}
    Mediation -->|Yes| Med[Attend Mediation]
    Mediation -->|No| Trial
    
    Med --> MedAgree{Agreement<br/>Reached?}
    MedAgree -->|Yes| Consent
    MedAgree -->|No| Trial
    
    Consent --> Submit[Submit to Court]
    DefaultProc --> Submit
    
    Submit --> Review[Judge Reviews]
    Review --> Approve{Approved?}
    Approve -->|No| Fix[Fix Issues]
    Fix --> Submit
    Approve -->|Yes| Sign[Judge Signs Decree]
    
    Trial --> PreTrial[Pre-Trial Conference]
    PreTrial --> TrialDay[Trial Day]
    TrialDay --> Decision[Judge's Decision]
    Decision --> Sign
    
    Sign --> Wait60[Wait 60 Days<br/>from Service]
    Wait60 --> Final{60 Days<br/>Passed?}
    Final -->|No| KeepWait[Continue Waiting]
    KeepWait --> Final
    Final -->|Yes| Effective[Decree Effective]
    
    Effective --> End([Divorced])
    
    style Start fill:#f9f,stroke:#333,stroke-width:4px
    style End fill:#9f9,stroke:#333,stroke-width:4px
    style Default fill:#faa,stroke:#333,stroke-width:2px
    style Trial fill:#ffa,stroke:#333,stroke-width:2px
```

## ⏱️ Timeline Breakdown

### Uncontested Path (Green Route)
```mermaid
gantt
    title Uncontested Divorce Timeline
    dateFormat  YYYY-MM-DD
    section Filing
    File Petition           :done, filing, 2024-01-01, 1d
    Serve Spouse           :done, serve, after filing, 14d
    section Response
    Response Period         :active, response, after serve, 20d
    File Response          :milestone, after response, 0d
    section Disclosure
    Financial Disclosure    :disclosure, after response, 40d
    section Agreement
    Negotiate Terms        :negotiate, after response, 30d
    Draft Agreement        :draft, after negotiate, 7d
    section Final
    Submit to Court        :submit, after draft, 1d
    60-Day Wait           :crit, wait, 2024-01-01, 60d
    Final Decree          :milestone, after wait, 0d
```

### Contested Path (Red Route)
```mermaid
gantt
    title Contested Divorce Timeline
    dateFormat  YYYY-MM-DD
    section Initial
    File & Serve           :done, init, 2024-01-01, 21d
    Response Filed         :done, resp, after init, 20d
    section Temporary
    Temporary Orders       :temp, after resp, 45d
    section Discovery
    Discovery Period       :disc, after temp, 120d
    section Mediation
    Mediation Attempts     :med, after disc, 30d
    section Trial
    Pre-Trial Prep        :prep, after med, 60d
    Trial                 :crit, trial, after prep, 5d
    section Final
    Decision & Decree     :final, after trial, 30d
```

## 🔄 Alternative Paths

### Default Divorce
```mermaid
flowchart LR
    A[Petition Filed] --> B[Spouse Served]
    B --> C{Response Filed?}
    C -->|No - 20/30 days pass| D[File Default Application]
    D --> E[Default Hearing]
    E --> F[Default Decree]
```

### Legal Separation
```mermaid
flowchart LR
    A[File for Separation] --> B[Same Process as Divorce]
    B --> C[Separation Decree]
    C --> D{Later Decision?}
    D -->|Convert to Divorce| E[Simple Conversion]
    D -->|Stay Separated| F[Remain Married]
```

## 📋 Document Checklist by Stage

### Starting Documents
- [ ] Petition for Dissolution
- [ ] Summons
- [ ] Preliminary Injunction
- [ ] Notice Documents
- [ ] Fee Waiver (if needed)

### Response Stage
- [ ] Response to Petition
- [ ] Counterclaim (if any)
- [ ] Certificate of Service

### Disclosure Stage
- [ ] Affidavit of Financial Info
- [ ] Tax Returns (2 years)
- [ ] Pay Stubs (6 months)
- [ ] Bank Statements (12 months)
- [ ] Other Financial Docs

### Settlement Stage
- [ ] Parenting Plan
- [ ] Child Support Worksheet
- [ ] Property Settlement
- [ ] Spousal Maintenance Terms

### Final Stage
- [ ] Consent Decree or Trial Order
- [ ] Final Child Support Order
- [ ] QDROs (if needed)
- [ ] Transfer Deeds

## 🚦 Decision Points

### Should You File First?
```mermaid
flowchart TD
    Q[Should I File First?]
    Q --> A{Safety Concerns?}
    A -->|Yes| File[File Immediately]
    A -->|No| B{Assets at Risk?}
    B -->|Yes| File
    B -->|No| C{Ready with Docs?}
    C -->|Yes| File
    C -->|No| Prep[Prepare First]
```

### Contested vs. Uncontested
```mermaid
flowchart TD
    Start[Can You Agree on Everything?]
    Start --> Kids{Children?}
    Kids -->|Yes| Custody{Agree on Custody?}
    Kids -->|No| Property
    Custody -->|Yes| Support{Agree on Support?}
    Custody -->|No| Contested[Contested Case]
    Support -->|Yes| Property{Agree on Property?}
    Support -->|No| Contested
    Property -->|Yes| Debts{Agree on Debts?}
    Property -->|No| Contested
    Debts -->|Yes| Uncontested[Uncontested Case]
    Debts -->|No| Contested
```

## 💡 Tips for Each Stage

### Filing Stage
- Gather all documents first
- Consider temporary orders needs
- File in correct county
- Pay fees or get waiver

### Service Stage
- Use professional server
- Keep proof of service
- Don't delay - 120 day limit
- Consider acceptance of service

### Response Stage
- Calendar deadline immediately
- Respond to everything
- File counterclaims now
- Start financial gathering

### Negotiation Stage
- Stay business-like
- Focus on interests
- Consider mediation
- Document agreements

### Trial Stage
- Prepare thoroughly
- Organize exhibits
- Practice testimony
- Arrive early

## 🔗 Related Resources

- [Detailed Divorce Guide](../core-topics/Divorce.md)
- [Court Procedures](../procedures/Court Procedures.md)
- [Forms and Documents](Forms and Documents.md)
- [Timeline Calculator](Child Support Calculator.md)

## 📞 Get Help

- **Self-Help Center**: Form assistance
- **Court Clerk**: Procedural questions
- **Legal Aid**: If you qualify
- **Private Attorney**: Complex cases

---

**Navigation**: [← Forms and Documents](Forms and Documents.md) | [Property Division Worksheet →](Property Division Worksheet.md)

*Last updated: December 30, 2024*