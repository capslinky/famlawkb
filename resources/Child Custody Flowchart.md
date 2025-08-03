---
title: Child Custody Decision Flowchart
description: Visual guide to how Arizona courts determine child custody (legal decision-making) and parenting time
keywords: custody flowchart, legal decision making, parenting time, best interests, Arizona
tags:
  - flowchart
  - child-custody
  - visual-guide
  - decision-making
updated: 2024-12-30
reviewed: 2024-12-30
---

# Child Custody Decision Flowchart

## 🔍 Visual Overview

This flowchart illustrates how Arizona courts determine legal decision-making (custody) and parenting time arrangements based on the best interests of the child.

## 📊 Legal Decision-Making Process

```mermaid
flowchart TD
    Start([Custody Case Begins]) --> DV{Domestic Violence<br/>History?}
    
    DV -->|Yes - Significant| DVPresumption[Presumption Against<br/>Joint Custody]
    DV -->|No/Minor| Factors[Evaluate Best<br/>Interest Factors]
    
    DVPresumption --> Overcome{Can Perpetrator<br/>Overcome Presumption?}
    Overcome -->|No| Sole[Sole Legal<br/>Decision-Making<br/>to Victim]
    Overcome -->|Yes| Factors
    
    Factors --> Agreement{Parents Agree?}
    Agreement -->|Yes| Review[Court Reviews<br/>Agreement]
    Agreement -->|No| Evaluation
    
    Review --> BestInt1{Serves Child's<br/>Best Interests?}
    BestInt1 -->|Yes| Approve[Approve Agreement]
    BestInt1 -->|No| Modify[Court Modifies<br/>or Rejects]
    
    Evaluation --> Evidence[Consider Evidence]
    Evidence --> Factors2[Apply A.R.S. § 25-403 Factors]
    
    Factors2 --> Joint{Joint Custody<br/>Appropriate?}
    Joint -->|Yes| JointOptions[Determine Type]
    Joint -->|No| SoleOptions[Determine Sole Parent]
    
    JointOptions --> JointType{Type of Joint}
    JointType -->|Equal| JointEqual[Joint Equal<br/>Decision-Making]
    JointType -->|Final Say| JointFinal[Joint with<br/>Final Say]
    
    SoleOptions --> Primary{Which Parent?}
    Primary -->|Mother| SoleMother[Sole to Mother]
    Primary -->|Father| SoleFather[Sole to Father]
    
    Modify --> Factors2
    Approve --> ParentingTime
    JointEqual --> ParentingTime
    JointFinal --> ParentingTime
    SoleMother --> ParentingTime
    SoleFather --> ParentingTime
    Sole --> ParentingTime
    
    ParentingTime[Determine<br/>Parenting Time]
    
    style Start fill:#f9f,stroke:#333,stroke-width:4px
    style DVPresumption fill:#faa,stroke:#333,stroke-width:2px
    style Sole fill:#faa,stroke:#333,stroke-width:2px
```

## 🏛️ Best Interest Factors Analysis

```mermaid
flowchart LR
    subgraph "A.R.S. § 25-403 Factors"
        F1[Relationships]
        F2[Wishes]
        F3[Adjustment]
        F4[Health]
        F5[Cooperation]
        F6[Coercion]
        F7[Primary Care]
        F8[Substance Abuse]
        F9[Domestic Violence]
        F10[False Reporting]
        F11[Other Factors]
    end
    
    F1 --> Score[Weighted<br/>Analysis]
    F2 --> Score
    F3 --> Score
    F4 --> Score
    F5 --> Score
    F6 --> Score
    F7 --> Score
    F8 --> Score
    F9 --> Score
    F10 --> Score
    F11 --> Score
    
    Score --> Decision[Custody<br/>Decision]
```

## ⏰ Parenting Time Determination

```mermaid
flowchart TD
    PTStart([Parenting Time<br/>Determination]) --> Age{Child's Age}
    
    Age -->|Under 3| Young[Limited Overnights<br/>Frequent Contact]
    Age -->|3-5| Preschool[Graduated<br/>Overnight Schedule]
    Age -->|6-12| School[School-Based<br/>Schedule]
    Age -->|13+| Teen[Consider Child's<br/>Input More]
    
    Young --> Distance1{Parents' Distance}
    Preschool --> Distance1
    School --> Distance1
    Teen --> Distance1
    
    Distance1 -->|Same City| Regular[Regular Schedule<br/>Options]
    Distance1 -->|Different Cities| LongDist[Long Distance<br/>Schedule]
    
    Regular --> Work{Work Schedules<br/>Compatible?}
    Work -->|Traditional| Typical[Typical Patterns]
    Work -->|Non-Traditional| Custom[Custom Schedule]
    
    Typical --> Equal{Equal Time<br/>Feasible?}
    Equal -->|Yes| FiftyFifty[50/50 Options]
    Equal -->|No| Majority[Majority/Minority<br/>Time Split]
    
    FiftyFifty --> Week{Best Pattern?}
    Week -->|Week On/Off| WeekOn[Alternating Weeks]
    Week -->|2-2-5-5| TwoTwo[2-2-5-5 Schedule]
    Week -->|3-4-4-3| ThreeFour[3-4-4-3 Schedule]
    
    Majority --> Standard[Standard Schedule<br/>Every Other Weekend<br/>+ Midweek]
    
    LongDist --> Blocks[Extended Blocks<br/>School Breaks<br/>Summer Time]
    
    Custom --> Unique[Unique Schedule<br/>Based on Needs]
    
    WeekOn --> Final[Final Schedule]
    TwoTwo --> Final
    ThreeFour --> Final
    Standard --> Final
    Blocks --> Final
    Unique --> Final
```

## 🚨 Special Circumstances

```mermaid
flowchart TD
    Special([Special Circumstances]) --> Type{Type of Issue}
    
    Type -->|Safety| Safety[Safety Concerns]
    Type -->|Development| Development[Developmental Needs]
    Type -->|Practical| Practical[Practical Issues]
    
    Safety --> SafetyType{Specific Concern}
    SafetyType -->|DV| DVPlan[Safety Plan<br/>Supervised Visits]
    SafetyType -->|Substance| SubPlan[Testing Required<br/>Graduated Time]
    SafetyType -->|Mental Health| MHPlan[Treatment Plan<br/>Therapeutic Supervision]
    
    Development --> DevType{Child's Needs}
    DevType -->|Special Needs| SNPlan[Accommodated Schedule<br/>Consistency Priority]
    DevType -->|Medical| MedPlan[Treatment Schedule<br/>Medical Decisions]
    DevType -->|Educational| EdPlan[School-Centered<br/>Homework Time]
    
    Practical --> PracType{Issue Type}
    PracType -->|Distance| DistPlan[Creative Solutions<br/>Virtual Time]
    PracType -->|Work| WorkPlan[Flexible Schedule<br/>Third-Party Help]
    PracType -->|Conflict| ConflictPlan[Parallel Parenting<br/>Communication App]
    
    DVPlan --> Implement[Implementation<br/>& Monitoring]
    SubPlan --> Implement
    MHPlan --> Implement
    SNPlan --> Implement
    MedPlan --> Implement
    EdPlan --> Implement
    DistPlan --> Implement
    WorkPlan --> Implement
    ConflictPlan --> Implement
```

## 📋 Decision Tree: Joint vs Sole Custody

```mermaid
flowchart TD
    Q1[Can Parents<br/>Communicate?] -->|Yes| Q2[Agree on Major<br/>Decisions?]
    Q1 -->|No| Sole1[Lean Toward<br/>Sole Custody]
    
    Q2 -->|Usually| Q3[Live Near<br/>Each Other?]
    Q2 -->|Rarely| Sole2[Consider Sole<br/>or Joint/Final Say]
    
    Q3 -->|Yes| Q4[Both Involved<br/>in Daily Life?]
    Q3 -->|No| Q5[Can Coordinate<br/>Despite Distance?]
    
    Q4 -->|Yes| Q6[No Safety<br/>Concerns?]
    Q4 -->|No| Sole3[Primary Parent<br/>Gets Sole]
    
    Q5 -->|Yes| Q6
    Q5 -->|No| Sole4[Practical<br/>Difficulties]
    
    Q6 -->|Yes| Joint1[Joint Custody<br/>Recommended]
    Q6 -->|No| Q7[Can Concerns<br/>Be Addressed?]
    
    Q7 -->|Yes| JointMod[Joint with<br/>Safeguards]
    Q7 -->|No| SoleSafe[Sole to<br/>Safe Parent]
    
    style Joint1 fill:#9f9,stroke:#333,stroke-width:2px
    style JointMod fill:#ff9,stroke:#333,stroke-width:2px
    style Sole1 fill:#faa,stroke:#333,stroke-width:2px
    style Sole2 fill:#faa,stroke:#333,stroke-width:2px
    style Sole3 fill:#faa,stroke:#333,stroke-width:2px
    style Sole4 fill:#faa,stroke:#333,stroke-width:2px
    style SoleSafe fill:#faa,stroke:#333,stroke-width:2px
```

## 🔄 Modification Process

```mermaid
flowchart LR
    Current[Current Order] --> Change{Substantial<br/>Change?}
    Change -->|No| Denied[Modification<br/>Denied]
    Change -->|Yes| Filed[Petition Filed]
    
    Filed --> Burden[Prove Change +<br/>Best Interests]
    Burden --> Hearing[Evidentiary<br/>Hearing]
    
    Hearing --> Decision{Court Decision}
    Decision -->|Granted| NewOrder[New Custody<br/>Order]
    Decision -->|Denied| KeepOld[Original<br/>Order Stands]
```

## 📊 Common Custody Arrangements

### Equal Parenting Time (50/50)

```mermaid
gantt
    title Week On/Week Off Schedule
    dateFormat  YYYY-MM-DD
    section Parent A
    Week 1    :done, 2024-01-01, 7d
    Week 3    :done, 2024-01-15, 7d
    section Parent B
    Week 2    :active, 2024-01-08, 7d
    Week 4    :active, 2024-01-22, 7d
```

### 2-2-5-5 Schedule

```mermaid
gantt
    title 2-2-5-5 Rotation
    dateFormat  YYYY-MM-DD
    section Parent A
    Mon-Tue   :done, 2024-01-01, 2d
    Fri-Sun   :done, 2024-01-05, 5d
    Wed-Thu   :done, 2024-01-17, 2d
    section Parent B
    Wed-Thu   :active, 2024-01-03, 2d
    Mon-Tue   :active, 2024-01-08, 2d
    Fri-Sun   :active, 2024-01-12, 5d
```

## 💡 Key Considerations

### For Parents
1. **Focus on child's needs**, not winning
2. **Document everything** - interactions, concerns
3. **Be flexible** when reasonable
4. **Communicate respectfully**
5. **Follow court orders** exactly

### For Children
1. **Age-appropriate schedules**
2. **Consistency and routine**
3. **Both parents involved**
4. **Minimal transitions**
5. **School/activity focus**

### Red Flags 🚩
- Undermining other parent
- Inflexibility
- Safety concerns
- Substance abuse
- Mental health crises
- Domestic violence

## 🔗 Related Resources

- [Child Custody Guide](../core-topics/Child Custody.md)
- [Parenting Time Details](../special-situations/Parenting Time.md)
- [Modification Process](../resources/Post-Decree Issues.md)
- [Best Interests Factors](../core-topics/Child Custody.md#best-interests-standard)

## 📞 Get Help

- **Custody Evaluators**: Court-appointed experts
- **Parenting Coordinators**: High-conflict help
- **Family Therapists**: Child adjustment
- **Legal Aid**: If you qualify

---

**Navigation**: [← Divorce Process Flowchart](Divorce Process Flowchart.md) | [Property Division Flowchart →](Property Division Flowchart.md)

*Last updated: December 30, 2024*