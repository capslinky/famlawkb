---
title: Property Division Flowchart
description: Visual guide to how Arizona divides property and debts in divorce using community property principles
keywords: property division, community property, separate property, debt division, Arizona
tags:
  - flowchart
  - property-division
  - visual-guide
  - community-property
updated: 2024-12-30
reviewed: 2024-12-30
---

# Property Division Flowchart

## 🔍 Visual Overview

This flowchart shows how Arizona courts classify and divide property and debts in divorce cases using community property principles.

## 📊 Property Classification Process

```mermaid
flowchart TD
    Start([Property/Debt<br/>to Classify]) --> When{When Acquired?}
    
    When -->|Before Marriage| Separate1[Presumed<br/>Separate]
    When -->|During Marriage| Community1[Presumed<br/>Community]
    When -->|After Service| Separate2[Presumed<br/>Separate]
    
    Separate1 --> Mixed1{Mixed with<br/>Community?}
    Mixed1 -->|No| SepFinal[Separate Property]
    Mixed1 -->|Yes| Trace1{Can Trace<br/>Source?}
    
    Community1 --> Source{Source of<br/>Funds?}
    Source -->|Earnings/Labor| CommFinal[Community Property]
    Source -->|Gift/Inheritance| SepGift[Separate Property]
    Source -->|Mixed| Trace2{Can Trace<br/>Sources?}
    
    Separate2 --> PostSep[Separate Property]
    
    Trace1 -->|Yes| Portion[Allocate by<br/>Source]
    Trace1 -->|No| CommDefault[Becomes<br/>Community]
    
    Trace2 -->|Yes| Portion
    Trace2 -->|No| CommDefault
    
    Portion --> Calculate[Calculate<br/>Percentages]
    Calculate --> PartSep[Part Separate<br/>Part Community]
    
    style SepFinal fill:#9f9,stroke:#333,stroke-width:2px
    style CommFinal fill:#faa,stroke:#333,stroke-width:2px
    style SepGift fill:#9f9,stroke:#333,stroke-width:2px
    style PostSep fill:#9f9,stroke:#333,stroke-width:2px
    style PartSep fill:#ff9,stroke:#333,stroke-width:2px
    style CommDefault fill:#faa,stroke:#333,stroke-width:2px
```

## 🏠 Real Estate Division

```mermaid
flowchart TD
    House([Marital Home]) --> Classify{Classification?}
    
    Classify -->|All Community| CommHouse[100% Community]
    Classify -->|All Separate| SepHouse[100% Separate]
    Classify -->|Mixed| MixedHouse[Calculate Shares]
    
    CommHouse --> Options1[Division Options]
    MixedHouse --> Calculate2[Determine<br/>Percentages]
    
    Calculate2 --> Options2[Division Options]
    
    Options1 --> Sell{Sell House?}
    Options2 --> Sell
    
    Sell -->|Yes| SellProcess[List & Sell]
    Sell -->|No| Keep{Who Keeps?}
    
    SellProcess --> Proceeds[Divide Proceeds<br/>After Costs]
    
    Keep -->|Wife| WifeBuyout[Wife Buys Out<br/>Husband's Share]
    Keep -->|Husband| HusbandBuyout[Husband Buys Out<br/>Wife's Share]
    Keep -->|Neither Afford| MustSell[Must Sell]
    
    WifeBuyout --> Refinance1{Can Refinance?}
    HusbandBuyout --> Refinance2{Can Refinance?}
    
    Refinance1 -->|Yes| Complete1[Transfer Deed<br/>Remove from Loan]
    Refinance1 -->|No| Alternative1[Other Arrangements<br/>or Sell]
    
    Refinance2 -->|Yes| Complete2[Transfer Deed<br/>Remove from Loan]
    Refinance2 -->|No| Alternative2[Other Arrangements<br/>or Sell]
    
    MustSell --> SellProcess
```

## 💳 Debt Division Process

```mermaid
flowchart TD
    Debt([Debt to Divide]) --> WhenIncurred{When Incurred?}
    
    WhenIncurred -->|Before Marriage| SepDebt[Separate Debt<br/>Original Party Pays]
    WhenIncurred -->|During Marriage| Purpose{Purpose/Benefit?}
    WhenIncurred -->|After Separation| PostDebt[Usually Separate<br/>Who Incurred]
    
    Purpose -->|Family/Household| CommDebt[Community Debt<br/>Divide Equally]
    Purpose -->|One Spouse Only| Waste{Marital Waste?}
    Purpose -->|Mixed| Allocate[Allocate by<br/>Benefit]
    
    Waste -->|Yes| WasteDebt[Sole Debt to<br/>Wasting Spouse]
    Waste -->|No| EqualDebt[Still Community<br/>Divide Equally]
    
    CommDebt --> Name{Whose Name?}
    EqualDebt --> Name
    Allocate --> Name
    
    Name -->|Joint| JointResp[Both Responsible<br/>to Creditor]
    Name -->|One Spouse| Indemnify[Indemnification<br/>Agreement]
    
    Indemnify --> Protection[Non-Debtor Protected<br/>Must Monitor]
    
    style SepDebt fill:#9f9,stroke:#333,stroke-width:2px
    style PostDebt fill:#9f9,stroke:#333,stroke-width:2px
    style WasteDebt fill:#9f9,stroke:#333,stroke-width:2px
    style CommDebt fill:#faa,stroke:#333,stroke-width:2px
```

## 💰 Retirement Account Division

```mermaid
flowchart TD
    Retirement([Retirement Account]) --> Type{Account Type?}
    
    Type -->|401k/403b| ERISA[ERISA Plan]
    Type -->|IRA| IRA[Individual IRA]
    Type -->|Pension| Pension[Defined Benefit]
    Type -->|Military| Military[Military Retired Pay]
    
    ERISA --> CommPortion1{Community<br/>Portion?}
    IRA --> CommPortion2{Community<br/>Portion?}
    Pension --> CommPortion3{Community<br/>Portion?}
    Military --> YearsServed{10/10 Rule<br/>Met?}
    
    CommPortion1 -->|Yes| QDRO1[Need QDRO]
    CommPortion1 -->|No| NoDiv1[No Division]
    
    CommPortion2 -->|Yes| Transfer[Direct Transfer<br/>No QDRO]
    CommPortion2 -->|No| NoDiv2[No Division]
    
    CommPortion3 -->|Yes| QDRO2[Need QDRO<br/>Complex Calc]
    CommPortion3 -->|No| NoDiv3[No Division]
    
    YearsServed -->|Yes| DirectPay[Direct Pay<br/>from DFAS]
    YearsServed -->|No| Offset[Other Property<br/>Offset]
    
    QDRO1 --> Process[QDRO Process]
    QDRO2 --> Process
    
    Process --> Draft[Draft QDRO]
    Draft --> Approve[Court Approval]
    Approve --> Submit[Submit to<br/>Plan Admin]
    Submit --> Implement[Division<br/>Implemented]
```

## ⚖️ Business Division

```mermaid
flowchart TD
    Business([Business Interest]) --> Started{When Started?}
    
    Started -->|Before Marriage| Growth{Growth During<br/>Marriage?}
    Started -->|During Marriage| CommBus[Community<br/>Business]
    
    Growth -->|No| SepBus[Separate<br/>Business]
    Growth -->|Yes| Mixed[Mixed Asset<br/>Apportion]
    
    CommBus --> Value[Get Valuation]
    Mixed --> Value
    
    Value --> Options{Division Options}
    
    Options -->|Sell| SellBus[Sell Business<br/>Divide Proceeds]
    Options -->|One Keeps| Buyout[Buyout Other's<br/>Interest]
    Options -->|Both Keep| Continue[Continue as<br/>Partners]
    
    Buyout --> PayMethod{Payment Method?}
    
    PayMethod -->|Cash| CashOut[Immediate<br/>Payment]
    PayMethod -->|Note| NoteTerms[Payment Plan<br/>with Security]
    PayMethod -->|Offset| TradeAssets[Trade Other<br/>Assets]
    
    Continue --> Agreement[Partnership<br/>Agreement Needed]
    
    style SepBus fill:#9f9,stroke:#333,stroke-width:2px
    style CommBus fill:#faa,stroke:#333,stroke-width:2px
```

## 📋 Division Strategy Flowchart

```mermaid
flowchart TD
    Strategy([Division Strategy]) --> Goals{Primary Goals?}
    
    Goals -->|Quick Resolution| Quick[Simplified<br/>Division]
    Goals -->|Max Value| Detailed[Detailed<br/>Valuation]
    Goals -->|Keep Specific| Target[Targeted<br/>Trading]
    
    Quick --> Equal[Roughly Equal<br/>Split Lists]
    
    Detailed --> Appraise[Professional<br/>Appraisals]
    Appraise --> Spreadsheet[Detailed<br/>Spreadsheet]
    Spreadsheet --> Negotiate[Negotiate<br/>Exchanges]
    
    Target --> Identify[Identify<br/>Must-Haves]
    Identify --> WhatTrade{What to<br/>Trade?}
    
    WhatTrade --> Calculate3[Calculate<br/>Equal Value]
    Calculate3 --> Propose[Propose<br/>Trades]
    
    Equal --> Review1{Fair?}
    Negotiate --> Review2{Fair?}
    Propose --> Review3{Fair?}
    
    Review1 -->|Yes| Final1[Finalize]
    Review1 -->|No| Adjust1[Adjust]
    
    Review2 -->|Yes| Final2[Finalize]
    Review2 -->|No| Adjust2[Adjust]
    
    Review3 -->|Yes| Final3[Finalize]
    Review3 -->|No| Adjust3[Adjust]
    
    Adjust1 --> Equal
    Adjust2 --> Negotiate
    Adjust3 --> Propose
```

## 🎯 Special Considerations

### Tracing Separate Property

```mermaid
flowchart LR
    Separate[Separate Funds] --> Account{Account Type?}
    
    Account -->|Separate| Maintain[Maintained<br/>Separate]
    Account -->|Joint| Commingled[Commingled<br/>Funds]
    
    Maintain --> Docs{Documentation?}
    Commingled --> Trace{Can Trace?}
    
    Docs -->|Yes| RemainsSep[Remains<br/>Separate]
    Docs -->|No| Risk[At Risk]
    
    Trace -->|Yes| ProveSep[Prove Separate<br/>Portion]
    Trace -->|No| BecomeComm[Becomes<br/>Community]
```

### Hidden Assets Search

```mermaid
flowchart TD
    Suspect([Suspect Hidden<br/>Assets]) --> Signs{Red Flags?}
    
    Signs -->|Lifestyle| Lifestyle[Income vs<br/>Spending]
    Signs -->|Behavior| Behavior[Secretive<br/>Actions]
    Signs -->|Financial| Financial[Missing<br/>Statements]
    
    Lifestyle --> Investigate
    Behavior --> Investigate
    Financial --> Investigate
    
    Investigate[Investigation] --> Methods{Methods}
    
    Methods --> Discovery[Formal<br/>Discovery]
    Methods --> Forensic[Forensic<br/>Accountant]
    Methods --> Subpoena[Subpoena<br/>Records]
    Methods --> Depositions[Depose<br/>Parties]
    
    Discovery --> Found{Assets Found?}
    Forensic --> Found
    Subpoena --> Found
    Depositions --> Found
    
    Found -->|Yes| Sanctions[Possible<br/>Sanctions]
    Found -->|No| Continue[Continue<br/>Search]
```

## 📊 Property Division Examples

### Example 1: Simple Division

```mermaid
pie title "Community Property Pool"
    "House Equity" : 300000
    "401k Accounts" : 200000
    "Vehicles" : 50000
    "Bank Accounts" : 50000
    "Credit Card Debt" : -20000
```

**Total**: $580,000 ÷ 2 = $290,000 each

### Example 2: Complex Division with Separate

```mermaid
pie title "Total Marital Estate"
    "Community Property" : 400000
    "Wife's Separate" : 100000
    "Husband's Separate" : 150000
    "Mixed Property (60% Comm)" : 200000
```

## 💡 Division Tips

### Do's ✅
1. **List everything** - Even small items
2. **Get appraisals** - For valuable items
3. **Consider taxes** - Capital gains, etc.
4. **Think long-term** - Maintenance costs
5. **Document agreements** - In writing

### Don'ts ❌
1. **Hide assets** - Severe penalties
2. **Waste assets** - Court can compensate
3. **Ignore debts** - Still responsible
4. **Forget QDROs** - For retirement
5. **Rush decisions** - Take time

## 🔗 Related Resources

- [Property Division Guide](../core-topics/Property Division.md)
- [Property Division Worksheet](Property Division Worksheet.md)
- [Business Valuation](../additional-topics/Business Valuation.md)
- [Tax Considerations](Tax Considerations.md)
- [QDRO Information](../core-topics/Property Division.md#retirement-accounts-qdros)

## 📞 Get Help

- **Appraisers**: Real estate, personal property
- **Business Valuators**: CVA, ABV certified
- **Forensic Accountants**: Hidden asset search
- **QDRO Specialists**: Retirement division

---

**Navigation**: [← Child Custody Flowchart](Child Custody Flowchart.md) | [Modification Process Flowchart →](Modification Process Flowchart.md)

*Last updated: December 30, 2024*