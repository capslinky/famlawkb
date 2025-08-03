---
title: Modification Process Flowchart
description: Visual guide to modifying child support, spousal maintenance, custody, and parenting time orders in Arizona
keywords: modification, change order, substantial change, post-decree, Arizona
tags:
  - flowchart
  - modification
  - post-decree
  - visual-guide
updated: 2024-12-30
reviewed: 2024-12-30
---

# Modification Process Flowchart

## 🔍 Visual Overview

This flowchart illustrates the process for modifying existing family law orders in Arizona, including the requirements, procedures, and timelines for different types of modifications.

## 📊 General Modification Process

```mermaid
flowchart TD
    Start([Want to Modify<br/>Existing Order]) --> Type{Type of<br/>Modification?}
    
    Type -->|Child Support| CSMod[Child Support<br/>Modification]
    Type -->|Custody/Parenting| CustodyMod[Custody<br/>Modification]
    Type -->|Spousal Maintenance| SpousalMod[Spousal<br/>Modification]
    Type -->|Other Orders| OtherMod[Other<br/>Modifications]
    
    CSMod --> CSReq{Meet<br/>Requirements?}
    CustodyMod --> CustReq{Substantial<br/>Change?}
    SpousalMod --> SpReq{Continuing<br/>Jurisdiction?}
    OtherMod --> OthReq{Grounds<br/>Exist?}
    
    CSReq -->|15% Change| CSYes[File Petition]
    CSReq -->|No| CSNo[Cannot Modify]
    
    CustReq -->|Yes + Best Interest| CustYes[File Petition]
    CustReq -->|No| CustNo[Cannot Modify]
    
    SpReq -->|Yes + Change| SpYes[File Petition]
    SpReq -->|No| SpNo[Cannot Modify]
    
    OthReq -->|Yes| OthYes[File Petition]
    OthReq -->|No| OthNo[Cannot Modify]
    
    CSYes --> Process[Modification<br/>Process]
    CustYes --> Process
    SpYes --> Process
    OthYes --> Process
    
    Process --> Serve[Serve Other<br/>Party]
    Serve --> Response{Response<br/>Filed?}
    
    Response -->|Agreement| Stipulation[Submit<br/>Stipulation]
    Response -->|Contested| Hearing[Schedule<br/>Hearing]
    Response -->|No Response| Default[Default<br/>Process]
    
    Stipulation --> Review[Court<br/>Review]
    Hearing --> Evidence[Present<br/>Evidence]
    Default --> Review
    
    Evidence --> Decision[Court<br/>Decision]
    Review --> Decision
    
    Decision --> Order[New Order<br/>Issued]
    
    style CSNo fill:#faa,stroke:#333,stroke-width:2px
    style CustNo fill:#faa,stroke:#333,stroke-width:2px
    style SpNo fill:#faa,stroke:#333,stroke-width:2px
    style OthNo fill:#faa,stroke:#333,stroke-width:2px
    style Order fill:#9f9,stroke:#333,stroke-width:2px
```

## 💰 Child Support Modification Requirements

```mermaid
flowchart TD
    CSStart([Child Support<br/>Modification]) --> Simplified{Simplified<br/>Process?}
    
    Simplified -->|Every 3 Years| Simple[File Simplified<br/>Request]
    Simplified -->|COLA Adjustment| COLA[Automatic<br/>Adjustment]
    Simplified -->|Regular| Regular[Standard<br/>Process]
    
    Regular --> Calculate[Calculate<br/>Current vs New]
    
    Calculate --> Difference{15% or $100<br/>Difference?}
    
    Difference -->|Yes| Grounds[Grounds<br/>Established]
    Difference -->|No| Factors{Other<br/>Factors?}
    
    Factors -->|Medical| Medical[Extraordinary<br/>Medical]
    Factors -->|Education| Education[Educational<br/>Expenses]
    Factors -->|Emancipation| Emancipate[Child<br/>Emancipated]
    Factors -->|None| NoMod[Cannot<br/>Modify]
    
    Simple --> File[File<br/>Petition]
    COLA --> Automatic[Court<br/>Adjusts]
    Grounds --> File
    Medical --> File
    Education --> File
    Emancipate --> File
    
    File --> Timeline{When Last<br/>Modified?}
    
    Timeline -->|< 1 Year| Emergency{Emergency?}
    Timeline -->|> 1 Year| Proceed[Proceed<br/>Normal]
    
    Emergency -->|Yes| EmProceed[Emergency<br/>Hearing]
    Emergency -->|No| Wait[May Need<br/>to Wait]
    
    style NoMod fill:#faa,stroke:#333,stroke-width:2px
    style Wait fill:#ff9,stroke:#333,stroke-width:2px
```

## 👨‍👩‍👧 Custody/Parenting Time Modification

```mermaid
flowchart TD
    CustStart([Custody/Parenting<br/>Modification]) --> TimeReq{1 Year Since<br/>Last Order?}
    
    TimeReq -->|No| Emergency1{Emergency<br/>Situation?}
    TimeReq -->|Yes| Change{Substantial<br/>Change?}
    
    Emergency1 -->|Danger| EmFile[Emergency<br/>Motion]
    Emergency1 -->|No| WaitYear[Wait for<br/>1 Year]
    
    Change -->|No| NoBasis[No Basis<br/>to Modify]
    Change -->|Yes| TypeChange{Type of<br/>Change?}
    
    TypeChange -->|Parent Relocation| Relocation[Relocation<br/>Process]
    TypeChange -->|Child's Needs| Needs[Changed<br/>Needs]
    TypeChange -->|Parent Issues| Issues[Parent<br/>Problems]
    TypeChange -->|Child's Wishes| Wishes[Child<br/>Preference]
    
    Relocation --> Distance{Distance?}
    Distance -->|100+ Miles| Notice[45-Day<br/>Notice]
    Distance -->|< 100 Miles| Regular1[Regular<br/>Process]
    
    Needs --> Document[Document<br/>Changes]
    Issues --> Document
    Wishes --> Age{Child's Age?}
    
    Age -->|12+| Consider[Court May<br/>Consider]
    Age -->|< 12| Limited[Limited<br/>Weight]
    
    Notice --> Objection{Objection?}
    Objection -->|Yes| RelHearing[Relocation<br/>Hearing]
    Objection -->|No| Approved[Move<br/>Approved]
    
    Document --> BestInt{Best Interests<br/>Served?}
    Consider --> BestInt
    Limited --> BestInt
    Regular1 --> BestInt
    
    BestInt -->|Yes| FileMod[File<br/>Modification]
    BestInt -->|No| NoChange[No<br/>Change]
    
    EmFile --> ExParte[Ex Parte<br/>Hearing]
    FileMod --> FullProcess[Full<br/>Process]
    RelHearing --> FullProcess
    
    style WaitYear fill:#ff9,stroke:#333,stroke-width:2px
    style NoBasis fill:#faa,stroke:#333,stroke-width:2px
    style NoChange fill:#faa,stroke:#333,stroke-width:2px
```

## 💵 Spousal Maintenance Modification

```mermaid
flowchart TD
    SpStart([Spousal Maintenance<br/>Modification]) --> Duration{Within<br/>Duration?}
    
    Duration -->|Expired| Expired[Cannot<br/>Modify]
    Duration -->|Active| Jurisdiction{Court Has<br/>Jurisdiction?}
    
    Jurisdiction -->|No| NoJuris[Cannot<br/>Modify]
    Jurisdiction -->|Yes| Modifiable{Order<br/>Modifiable?}
    
    Modifiable -->|Non-Modifiable| Fixed[Cannot<br/>Change]
    Modifiable -->|Modifiable| Changes{Substantial<br/>Change?}
    
    Changes -->|No| NoGrounds[No Grounds<br/>for Change]
    Changes -->|Yes| TypeCh{Type of<br/>Change?}
    
    TypeCh -->|Income Change| Income[Document<br/>Income]
    TypeCh -->|Health Issues| Health[Medical<br/>Evidence]
    TypeCh -->|Cohabitation| Cohab[Prove<br/>Cohabitation]
    TypeCh -->|Retirement| Retire[Retirement<br/>Analysis]
    
    Income --> Amount{Change<br/>Amount?}
    Health --> Impact{Financial<br/>Impact?}
    Cohab --> Financial{Financial<br/>Support?}
    Retire --> Ability{Ability<br/>to Pay?}
    
    Amount -->|Significant| FileSpMod[File<br/>Petition]
    Amount -->|Minor| Unlikely[Unlikely<br/>Success]
    
    Impact -->|Substantial| FileSpMod
    Impact -->|Minimal| Unlikely
    
    Financial -->|Yes| Terminate[Seek<br/>Termination]
    Financial -->|No| Reduce[Seek<br/>Reduction]
    
    Ability -->|Decreased| FileSpMod
    Ability -->|Same| NoGrounds
    
    FileSpMod --> Burden[Prove Change<br/>+ Unfair]
    Terminate --> Burden
    Reduce --> Burden
    
    style Expired fill:#faa,stroke:#333,stroke-width:2px
    style NoJuris fill:#faa,stroke:#333,stroke-width:2px
    style Fixed fill:#faa,stroke:#333,stroke-width:2px
    style NoGrounds fill:#faa,stroke:#333,stroke-width:2px
    style Unlikely fill:#ff9,stroke:#333,stroke-width:2px
```

## 📋 Modification Timeline & Costs

```mermaid
flowchart LR
    subgraph "Timeline"
        File[File Petition<br/>Day 1] --> Serve1[Serve Papers<br/>Days 2-10]
        Serve1 --> Response1[Response Due<br/>Day 30]
        Response1 --> Disclosure[Disclosure<br/>Day 40]
        Disclosure --> Status[Status Conf<br/>Day 60-90]
        Status --> Trial[Trial/Hearing<br/>Day 120-180]
    end
    
    subgraph "Costs"
        Filing[Filing Fee<br/>$274] --> Service[Service<br/>$50-150]
        Service --> Attorney[Attorney<br/>$2,000-10,000]
        Attorney --> Expert[Experts<br/>$500-5,000]
    end
```

## 🚨 Emergency Modifications

```mermaid
flowchart TD
    Emergency([Emergency<br/>Situation]) --> Type2{Type of<br/>Emergency?}
    
    Type2 -->|Child Danger| Danger[Immediate<br/>Danger]
    Type2 -->|DV| Violence[Domestic<br/>Violence]
    Type2 -->|Substance| Substance[Substance<br/>Abuse]
    Type2 -->|Abandonment| Abandon[Child<br/>Abandoned]
    
    Danger --> ExParte1[Ex Parte<br/>Motion]
    Violence --> ExParte1
    Substance --> Evidence2[Gather<br/>Evidence]
    Abandon --> ExParte1
    
    Evidence2 --> ExParte1
    
    ExParte1 --> Filed[Same Day<br/>Filing]
    Filed --> Review2{Judge<br/>Review}
    
    Review2 -->|Granted| TempOrder[Temporary<br/>Order]
    Review2 -->|Denied| Regular2[Regular<br/>Process]
    
    TempOrder --> FullHear[Full Hearing<br/>Within 15 Days]
    
    FullHear --> Both[Both Parties<br/>Present]
    Both --> Final[Final<br/>Decision]
```

## 📝 Required Documentation

```mermaid
flowchart TD
    Docs([Documentation<br/>Needed]) --> ModType{Modification<br/>Type?}
    
    ModType -->|Support| SupportDocs[Financial<br/>Documents]
    ModType -->|Custody| CustodyDocs[Child-Related<br/>Documents]
    ModType -->|Maintenance| MaintDocs[Income/Expense<br/>Documents]
    
    SupportDocs --> SD1[Pay Stubs<br/>3 Months]
    SupportDocs --> SD2[Tax Returns<br/>2 Years]
    SupportDocs --> SD3[Bank Statements]
    SupportDocs --> SD4[New Expenses]
    
    CustodyDocs --> CD1[School Records]
    CustodyDocs --> CD2[Medical Records]
    CustodyDocs --> CD3[Police Reports]
    CustodyDocs --> CD4[Witness Statements]
    
    MaintDocs --> MD1[Current Income]
    MaintDocs --> MD2[Monthly Expenses]
    MaintDocs --> MD3[Medical Bills]
    MaintDocs --> MD4[Job Search Efforts]
```

## 💡 Success Factors

### Likely to Succeed ✅
1. **Significant income change** (>15% for support)
2. **Documented safety concerns**
3. **Major health changes**
4. **Child's documented needs**
5. **Agreement between parties**

### Unlikely to Succeed ❌
1. **Minor inconveniences**
2. **Disagreement with order**
3. **No substantial change**
4. **Recent modification** (<1 year)
5. **Failure to follow current order**

## 📊 Modification Statistics

```mermaid
pie title "Modification Success Rates"
    "Child Support Granted" : 65
    "Custody Changes Granted" : 35
    "Maintenance Modified" : 45
    "Modifications Denied" : 40
```

## 🔄 Alternative to Court Modification

```mermaid
flowchart LR
    Alternative[Alternatives to<br/>Court Process] --> Options{Options}
    
    Options --> Mediation[Mediation<br/>$500-2,000]
    Options --> Agreement[Written<br/>Agreement]
    Options --> Arbitration[Binding<br/>Arbitration]
    
    Mediation --> Stipulation2[Stipulated<br/>Agreement]
    Agreement --> Caution[⚠️ May Not<br/>Be Enforceable]
    Arbitration --> Binding[Binding<br/>Decision]
    
    Stipulation2 --> FileCourt[File with<br/>Court]
    Binding --> FileCourt
    
    FileCourt --> Official[Official<br/>Order]
```

## 📋 Modification Checklist

### Before Filing
- [ ] Read current order completely
- [ ] Document substantial changes
- [ ] Calculate financial differences
- [ ] Gather supporting evidence
- [ ] Consider mediation first
- [ ] Consult with attorney

### Filing Process
- [ ] Complete correct forms
- [ ] Pay filing fee ($274)
- [ ] Attach evidence
- [ ] File with same court
- [ ] Serve other party properly
- [ ] Meet all deadlines

### After Filing
- [ ] Respond to discovery
- [ ] Attend all hearings
- [ ] Bring evidence to court
- [ ] Follow temporary orders
- [ ] Update financial info
- [ ] Comply with new order

## 🔗 Related Resources

- [Post-Decree Issues Guide](Post-Decree Issues.md)
- [Child Support Modification Forms](Forms and Documents.md#modification-forms)
- [Custody Modification Guide](../core-topics/Child Custody.md#modifications)
- [Emergency Orders](../procedures/Emergency Orders.md)

## 📞 Get Help

- **Self-Help Center**: Court assistance
- **Legal Aid**: If you qualify
- **Private Attorneys**: Complex cases
- **Mediators**: Agreement help

---

**Navigation**: [← Property Division Flowchart](Property Division Flowchart.md) | [Forms and Documents →](Forms and Documents.md)

*Last updated: December 30, 2024*