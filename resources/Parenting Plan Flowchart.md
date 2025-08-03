---
title: Parenting Plan Creation Flowchart
description: Step-by-step visual guide to creating a comprehensive parenting plan in Arizona
keywords: parenting plan, custody agreement, co-parenting, visitation schedule, Arizona
tags:
  - flowchart
  - parenting-plan
  - custody
  - visual-guide
updated: 2024-12-30
reviewed: 2024-12-30
---

# Parenting Plan Creation Flowchart

## 🔍 Visual Overview

This flowchart guides parents through creating a comprehensive parenting plan that addresses all required elements under Arizona law and promotes the best interests of children.

## 📊 Parenting Plan Overview

```mermaid
flowchart TD
    Start([Create Parenting<br/>Plan]) --> Required{Court<br/>Required?}
    
    Required -->|Divorce/Custody Case| Mandatory[Mandatory<br/>Plan]
    Required -->|Voluntary Agreement| Voluntary[Voluntary<br/>Plan]
    
    Mandatory --> Elements[Required<br/>Elements]
    Voluntary --> Elements
    
    Elements --> LegalDec[Legal Decision<br/>Making]
    Elements --> ParTime[Parenting<br/>Time]
    Elements --> Support[Child<br/>Support]
    Elements --> Other[Other<br/>Provisions]
    
    LegalDec --> DecType{Type?}
    DecType -->|Joint| Joint[Joint<br/>Decisions]
    DecType -->|Sole| Sole[Sole<br/>Parent]
    DecType -->|Joint/Final| Final[Joint with<br/>Final Say]
    
    ParTime --> Schedule[Create<br/>Schedule]
    Support --> Calculate[Calculate<br/>Amount]
    Other --> Details[Additional<br/>Details]
    
    Joint --> Areas[Decision<br/>Areas]
    Sole --> Areas
    Final --> Areas
    
    Schedule --> Regular[Regular<br/>Schedule]
    Schedule --> Holiday[Holiday<br/>Schedule]
    Schedule --> Summer[Summer<br/>Schedule]
    
    Areas --> Complete[Complete<br/>Plan]
    Regular --> Complete
    Holiday --> Complete
    Summer --> Complete
    Calculate --> Complete
    Details --> Complete
    
    Complete --> Review[Review &<br/>Sign]
    Review --> File[File with<br/>Court]
    
    style Complete fill:#9f9,stroke:#333,stroke-width:2px
```

## 🏛️ Legal Decision-Making Structure

```mermaid
flowchart TD
    Legal([Legal Decision<br/>Making]) --> Major{Major<br/>Decisions}
    
    Major --> Education[Education]
    Major --> Medical[Healthcare]
    Major --> Religious[Religion]
    Major --> Personal[Personal Care]
    
    Education --> EdDec{Who Decides?}
    Medical --> MedDec{Who Decides?}
    Religious --> RelDec{Who Decides?}
    Personal --> PerDec{Who Decides?}
    
    EdDec -->|Joint| EdJoint[Both Parents<br/>Agree]
    EdDec -->|Mother| EdMom[Mother<br/>Decides]
    EdDec -->|Father| EdDad[Father<br/>Decides]
    EdDec -->|Joint/Mom Final| EdMomFinal[Joint but Mom<br/>Final Say]
    
    MedDec -->|Joint| MedJoint[Both Parents<br/>Agree]
    MedDec -->|Sole| MedSole[One Parent<br/>Decides]
    MedDec -->|Emergency| MedEmerg[Either in<br/>Emergency]
    
    RelDec -->|Joint| RelJoint[Mutual<br/>Agreement]
    RelDec -->|Each During Time| RelEach[Each Parent's<br/>Time]
    RelDec -->|None| RelNone[No Religious<br/>Decisions]
    
    EdJoint --> Dispute{Dispute<br/>Process?}
    MedJoint --> Dispute
    RelJoint --> Dispute
    
    Dispute -->|Mediation| Mediate[Mediate<br/>First]
    Dispute -->|PC| ParCoord[Parenting<br/>Coordinator]
    Dispute -->|Court| Court[Court<br/>Decides]
```

## 📅 Creating Parenting Time Schedule

```mermaid
flowchart TD
    Schedule1([Parenting Time<br/>Schedule]) --> Distance{Parents'<br/>Distance?}
    
    Distance -->|Same City| Local[Local<br/>Schedule]
    Distance -->|Different Cities| LongDist[Long Distance<br/>Schedule]
    
    Local --> Age1{Child's Age?}
    LongDist --> Age2{Child's Age?}
    
    Age1 -->|0-3 Years| Toddler[Frequent<br/>Short Visits]
    Age1 -->|4-5 Years| Preschool[Graduated<br/>Overnights]
    Age1 -->|6-12 Years| School[School-Based<br/>Schedule]
    Age1 -->|13+ Years| Teen[Flexible<br/>Schedule]
    
    Age2 -->|Any Age| Extended[Extended<br/>Visits]
    
    Toddler --> Pattern1[2-2-3<br/>Pattern]
    Preschool --> Pattern2[2-2-5-5<br/>or Similar]
    School --> Pattern3[Week On/Off<br/>or 5-2-2-5]
    Teen --> Pattern4[Flexible with<br/>Teen Input]
    Extended --> Pattern5[School Breaks<br/>& Summer]
    
    Pattern1 --> Holidays1[Holiday<br/>Schedule]
    Pattern2 --> Holidays1
    Pattern3 --> Holidays1
    Pattern4 --> Holidays1
    Pattern5 --> Holidays2[Modified<br/>Holidays]
    
    Holidays1 --> Alternate[Alternate<br/>Years]
    Holidays1 --> Split[Split<br/>Days]
    Holidays1 --> Fixed[Fixed<br/>Assignment]
    
    Holidays2 --> Travel[Include<br/>Travel Time]
```

## 🎄 Holiday Schedule Planning

```mermaid
flowchart LR
    subgraph "Major Holidays"
        NewYear[New Year's]
        Spring[Spring Break]
        Easter[Easter]
        Fourth[July 4th]
        Thanks[Thanksgiving]
        Winter[Winter Break]
    end
    
    subgraph "Other Occasions"
        Mother[Mother's Day]
        Father[Father's Day]
        Birthdays[Birthdays]
        School[School Breaks]
    end
    
    subgraph "Division Methods"
        Alt[Alternate Years]
        Split2[Split Holiday]
        Fixed2[Fixed Schedule]
        Rotate[Rotating Schedule]
    end
    
    NewYear --> Alt
    Spring --> Alt
    Easter --> Split2
    Fourth --> Rotate
    Thanks --> Alt
    Winter --> Split2
    
    Mother --> Fixed2
    Father --> Fixed2
    Birthdays --> Split2
    School --> Alt
```

## 🚗 Exchange Logistics

```mermaid
flowchart TD
    Exchange([Plan Exchanges]) --> Where{Where?}
    
    Where -->|Neutral| Neutral[Public<br/>Location]
    Where -->|Home| Home[Parent's<br/>Residence]
    Where -->|School| School2[School/Daycare]
    
    Neutral --> Safe[Police Station<br/>Restaurant<br/>Library]
    Home --> Rules{Rules?}
    School2 --> Pickup[One Drops<br/>Other Picks Up]
    
    Rules -->|Curbside| Curb[Stay in<br/>Car]
    Rules -->|Door| Door[Brief<br/>Exchange]
    
    Safe --> When{When?}
    Curb --> When
    Door --> When
    Pickup --> Simple[Avoids<br/>Contact]
    
    When -->|After School| AfterSch[3-4 PM]
    When -->|Evening| Evening[5-6 PM]
    When -->|Morning| Morning[8-9 AM]
    
    AfterSch --> Transport{Transportation?}
    Evening --> Transport
    Morning --> Transport
    
    Transport -->|Each Drive| Half[Meet<br/>Halfway]
    Transport -->|Receiving| Receiving[Receiving Parent<br/>Picks Up]
    Transport -->|Delivering| Delivering[Delivering Parent<br/>Drops Off]
```

## 📱 Communication Plan

```mermaid
flowchart TD
    Comm([Communication<br/>Plan]) --> Between{Between?}
    
    Between -->|Parents| ParentComm[Parent<br/>Communication]
    Between -->|Parent-Child| ChildComm[Parent-Child<br/>Contact]
    
    ParentComm --> Method1{Method?}
    ChildComm --> Method2{Method?}
    
    Method1 -->|App| App[OurFamilyWizard<br/>TalkingParents]
    Method1 -->|Email| Email[Email<br/>Only]
    Method1 -->|Text| Text[Emergency<br/>Only]
    
    Method2 -->|Phone| Phone[Daily Calls<br/>Scheduled Time]
    Method2 -->|Video| Video[FaceTime<br/>Zoom]
    Method2 -->|Flexible| Flex[Reasonable<br/>Access]
    
    App --> Rules2[Communication<br/>Rules]
    Email --> Rules2
    Phone --> Privacy[Privacy<br/>Rules]
    Video --> Privacy
    
    Rules2 --> Topics{Topics?}
    Topics -->|Children Only| ChildOnly[Child-Related<br/>Only]
    Topics -->|Emergencies| Emergency2[Define<br/>Emergency]
    Topics -->|Schedule| Schedule2[Schedule<br/>Changes]
    
    Privacy --> NoMonitor[No Monitoring<br/>Calls]
    Privacy --> Reasonable[Reasonable<br/>Duration]
```

## 💰 Financial Provisions

```mermaid
flowchart TD
    Financial([Financial<br/>Provisions]) --> CSup{Child<br/>Support?}
    
    CSup -->|Calculated| Amount[Monthly<br/>Amount]
    CSup -->|Deviation| Deviate[Explain<br/>Deviation]
    
    Amount --> How{Payment<br/>Method?}
    How -->|Clearinghouse| Clear[Support<br/>Clearinghouse]
    How -->|Direct| Direct[Direct<br/>Payment]
    
    Clear --> When2{Frequency?}
    Direct --> When2
    
    When2 -->|Monthly| Month[Once per<br/>Month]
    When2 -->|Bi-weekly| BiWeek[Every Two<br/>Weeks]
    When2 -->|Semi-monthly| Semi[Twice per<br/>Month]
    
    Financial --> Extra{Extra<br/>Expenses?}
    
    Extra -->|Medical| MedExp[Uncovered<br/>Medical]
    Extra -->|School| SchExp[School<br/>Expenses]
    Extra -->|Activities| ActExp[Extracurricular<br/>Activities]
    
    MedExp --> Share{How<br/>Shared?}
    SchExp --> Share
    ActExp --> Share
    
    Share -->|50/50| Equal[Equal<br/>Split]
    Share -->|Pro-rata| ProRata[Income<br/>Based]
    Share -->|One Pays| OnePays[One Parent<br/>Pays All]
```

## 📋 Special Provisions Checklist

```mermaid
flowchart TD
    Special([Special<br/>Provisions]) --> Categories{Categories}
    
    Categories --> Travel[Travel]
    Categories --> Medical2[Medical]
    Categories --> School3[School]
    Categories --> Behavior[Behavior]
    
    Travel --> TravelRules[Passports<br/>Notice Period<br/>Destinations]
    Medical2 --> MedRules[Providers<br/>Medications<br/>Emergencies]
    School3 --> SchRules[School Choice<br/>Activities<br/>Information]
    Behavior --> BehRules[No Disparagement<br/>Consistent Rules<br/>New Partners]
    
    TravelRules --> Include[Include in<br/>Plan]
    MedRules --> Include
    SchRules --> Include
    BehRules --> Include
```

## 🎯 Age-Appropriate Schedule Examples

### Infants (0-1 year)
```mermaid
gantt
    title Weekly Schedule - Infant
    dateFormat YYYY-MM-DD
    section Parent A
    Mon-Tue-Wed    :done, 2024-01-01, 3d
    Saturday AM     :done, 2024-01-06, 0.5d
    section Parent B
    Thu-Fri        :active, 2024-01-04, 2d
    Sunday AM      :active, 2024-01-07, 0.5d
```

### School Age (6-12 years)
```mermaid
gantt
    title Week On/Week Off Schedule
    dateFormat YYYY-MM-DD
    section Parent A
    Week 1         :done, 2024-01-01, 7d
    Week 3         :done, 2024-01-15, 7d
    section Parent B
    Week 2         :active, 2024-01-08, 7d
    Week 4         :active, 2024-01-22, 7d
```

## 💡 Best Practices

### Do's ✅
1. **Be specific** about times and locations
2. **Consider child's needs** first
3. **Plan for growth** and changes
4. **Include backup plans**
5. **Address all scenarios**

### Don'ts ❌
1. **Leave things vague**
2. **Make it too rigid**
3. **Forget holidays**
4. **Ignore child's activities**
5. **Use as weapon**

## 📝 Required Elements Checklist

### Legal Decision-Making
- [ ] Education decisions
- [ ] Healthcare decisions
- [ ] Religious decisions
- [ ] Personal care decisions
- [ ] Dispute resolution method

### Parenting Time
- [ ] Regular schedule
- [ ] Holiday schedule
- [ ] Summer schedule
- [ ] Birthday plans
- [ ] Exchange details

### Communication
- [ ] Parent-to-parent method
- [ ] Parent-child contact
- [ ] Emergency procedures
- [ ] Information sharing
- [ ] Response times

### Financial
- [ ] Child support amount
- [ ] Payment method
- [ ] Extra expenses
- [ ] Tax deductions
- [ ] Insurance coverage

### Other Provisions
- [ ] Travel restrictions
- [ ] Relocation notice
- [ ] Right of first refusal
- [ ] Childcare providers
- [ ] Modification process

## 🔗 Related Resources

- [Parenting Plan Template](Forms and Documents.md#parenting-plan)
- [Child Custody Guide](../core-topics/Child Custody.md)
- [Parenting Time Details](../special-situations/Parenting Time.md)
- [Communication Tools](../resources/Financial Issues.md#communication-apps)

## 📞 Get Help

- **Mediators**: Help create agreements
- **Parenting Coordinators**: High-conflict cases
- **Family Therapists**: Child adjustment
- **Legal Aid**: If you qualify

---

**Navigation**: [← Modification Process Flowchart](Modification Process Flowchart.md) | [Tax Considerations →](Tax Considerations.md)

*Last updated: December 30, 2024*