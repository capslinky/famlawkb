# Arizona Family Law Wiki

A comprehensive, open-source wiki for Arizona family law information.

## 🎯 Purpose

This wiki provides accessible, accurate information about family law in Arizona for:
- Legal professionals
- Law students
- Self-represented litigants
- Anyone seeking to understand Arizona family law

## ⚖️ Legal Disclaimer

**This wiki is for informational purposes only and does not constitute legal advice.** Always consult with a qualified attorney for specific legal matters.

## 🚀 Quick Start

### For Users
1. Visit the live wiki at [azfamilylaw.wiki](https://azfamilylaw.wiki) (once published)
2. Browse topics or use search
3. Click internal links to navigate between related topics

### For Contributors
1. Fork this repository
2. Make your changes in a new branch
3. Submit a pull request
4. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines

## 📁 Structure

```
Family Law Knowledge Base/
├── index.md                    # Wiki homepage
├── Welcome.md                  # Navigation index
├── Legal Disclaimer.md         # Important legal notices
├── Marriage and Domestic Relations.md
├── Divorce.md
├── Child Custody.md
├── Child Support.md
├── Property Division.md
├── ... (20+ topic files)
├── mkdocs.yml                  # MkDocs configuration
├── setup-wiki.sh              # Publishing setup script
└── _templates/                # Reusable templates
```

## 🛠️ Publishing Options

Run `./setup-wiki.sh` to set up your preferred publishing platform:

### 1. **Obsidian Publish** (Recommended for ease)
- Cost: $8/month
- Native Obsidian integration
- Zero configuration needed

### 2. **MkDocs Material** (Recommended for features)
- Cost: Free
- Beautiful Material Design theme
- Full search functionality
- GitHub Pages compatible

### 3. **Quartz** (Recommended for aesthetics)
- Cost: Free
- Stunning visual design
- Graph visualization
- Fast static site

### 4. **Digital Garden Plugin**
- Cost: Free
- Publish directly from Obsidian
- Netlify hosting
- Minimal setup

## 🔧 Technical Setup

### Prerequisites
- Git
- Python 3.x (for MkDocs)
- Node.js (for Quartz)
- Obsidian (for editing)

### MkDocs Deployment

```bash
# Install dependencies
pip install mkdocs-material

# Preview locally
mkdocs serve

# Deploy to GitHub Pages
mkdocs gh-deploy
```

### Custom Domain Setup
1. Purchase domain (e.g., azfamilylaw.wiki)
2. Add CNAME file to repository
3. Configure DNS:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   CNAME www   [username].github.io
   ```

## 📊 Content Guidelines

### Writing Style
- Clear, concise language
- Define legal terms
- Use examples when helpful
- Maintain neutral tone
- Update dates on changes

### Formatting
- Use Markdown headers (##, ###)
- Include statute citations
- Cross-reference with [[wiki links]]
- Add tags for categorization

### Legal Accuracy
- Cite current Arizona Revised Statutes
- Note effective dates of laws
- Include relevant court rules
- Flag recent changes

## 🤝 Contributing

We welcome contributions! Please:
1. Check existing issues
2. Propose major changes first
3. Follow formatting guidelines
4. Include sources/citations
5. Update last modified dates

## 📄 License

This work is licensed under [Creative Commons CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) - Public Domain Dedication.

## 🙏 Acknowledgments

- Arizona State Bar Association
- Contributing attorneys and legal professionals
- Open source community

## 📞 Contact

- Issues: Use GitHub Issues
- Email: contribute@azfamilylaw.wiki
- **Do not send confidential information**

## 🚦 Status

- [ ] Initial content creation
- [ ] Legal review
- [ ] Technical setup
- [ ] Domain registration
- [ ] Launch preparation
- [ ] Public announcement

---

**Remember:** This wiki provides information only. Always consult a qualified attorney for legal advice.