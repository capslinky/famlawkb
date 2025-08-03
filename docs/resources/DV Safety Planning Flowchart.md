---
title: Domestic Violence Safety Planning Flowchart
description: Critical safety planning guide and resources for domestic violence situations in Arizona
keywords: domestic violence, safety plan, protective order, emergency resources, Arizona
tags:
  - flowchart
  - domestic-violence
  - safety-planning
  - emergency
updated: 2024-12-30
reviewed: 2024-12-30
---

# Domestic Violence Safety Planning Flowchart

## ⚠️ Immediate Safety

**If you are in immediate danger, call 911**

National Domestic Violence Hotline: **1-800-799-7233** (24/7, free, confidential)
Arizona Coalition to End Sexual & Domestic Violence: **602-279-2900**

## 🔍 Safety Assessment

```mermaid
flowchart TD
    Start([Safety<br/>Assessment]) --> Danger{Immediate<br/>Danger?}
    
    Danger -->|Yes| Emergency[Call 911<br/>Leave Now]
    Danger -->|No| Risk{Increasing<br/>Risk?}
    
    Emergency --> Safe[Get to<br/>Safety]
    
    Risk -->|Yes| Plan[Create Safety<br/>Plan NOW]
    Risk -->|No| Monitor[Monitor<br/>Situation]
    
    Plan --> Elements[Safety Plan<br/>Elements]
    Monitor --> Resources[Gather<br/>Resources]
    
    Safe --> Shelter{Need<br/>Shelter?}
    Shelter -->|Yes| DV[DV Shelter<br/>Hotline]
    Shelter -->|No| Support[Contact<br/>Support]
    
    Elements --> Pack[Emergency<br/>Bag]
    Elements --> Docs[Important<br/>Documents]
    Elements --> Money[Financial<br/>Resources]
    Elements --> Plan2[Escape<br/>Plan]
    
    style Emergency fill:#f00,stroke:#333,stroke-width:4px,color:#fff
    style Safe fill:#0f0,stroke:#333,stroke-width:2px
```

## 🏃 Creating an Escape Plan

```mermaid
flowchart TD
    Escape([Escape Plan]) --> When{When to<br/>Leave?}
    
    When -->|Planned| Planned[Choose Safe<br/>Time]
    When -->|Emergency| EmLeave[Leave<br/>Immediately]
    
    Planned --> PrepareFirst[Prepare in<br/>Advance]
    EmLeave --> GoNow[Go to<br/>Safe Place]
    
    PrepareFirst --> Where{Where<br/>to Go?}
    
    Where -->|Shelter| Shelter2[DV Shelter]
    Where -->|Family| Family[Trusted<br/>Family]
    Where -->|Friends| Friends[Safe<br/>Friends]
    Where -->|Hotel| Hotel[Hotel/<br/>Motel]
    
    Shelter2 --> Route[Practice<br/>Route]
    Family --> Route
    Friends --> Route
    Hotel --> Route
    
    Route --> Transport{Transportation?}
    
    Transport -->|Own Car| Car[Hide Extra<br/>Keys]
    Transport -->|Public| Public[Bus/Uber<br/>Routes]
    Transport -->|Friend| Friend[Arranged<br/>Pickup]
    
    Car --> Code[Code Word<br/>System]
    Public --> Code
    Friend --> Code
    
    Code --> Kids{Children?}
    
    Kids -->|Yes| KidPlan[Practice with<br/>Children]
    Kids -->|No| Execute[Ready to<br/>Execute]
    
    KidPlan --> Execute
```

## 📦 Emergency Bag Checklist

```mermaid
flowchart TD
    Bag([Emergency Bag]) --> Categories{Categories}
    
    Categories --> Documents[Documents]
    Categories --> Money2[Money/Cards]
    Categories --> Personal[Personal Items]
    Categories --> Children[For Children]
    
    Documents --> DocList[ID/Passport<br/>Birth Certificates<br/>SS Cards<br/>Insurance<br/>Court Orders]
    
    Money2 --> MoneyList[Cash<br/>Credit Cards<br/>Bank Info<br/>Checkbook]
    
    Personal --> PersonalList[Medications<br/>Phone/Charger<br/>Keys<br/>Clothes<br/>Photos]
    
    Children --> KidList[Formula/Diapers<br/>Favorite Toy<br/>Medications<br/>School Info]
    
    DocList --> Hide[Hide Bag<br/>Safely]
    MoneyList --> Hide
    PersonalList --> Hide
    KidList --> Hide
    
    Hide --> Access[Quick<br/>Access]
```

## 🛡️ Protective Order Process

```mermaid
flowchart TD
    PO([Need Protection<br/>Order]) --> Type{Type<br/>Needed?}
    
    Type -->|Emergency| EPO[Emergency<br/>Order]
    Type -->|Standard| OOP[Order of<br/>Protection]
    Type -->|Injunction| IAH[Injunction Against<br/>Harassment]
    
    EPO --> Police[Police Can<br/>Request]
    OOP --> Qualify{Qualify?}
    IAH --> NoRelation[No Relationship<br/>Required]
    
    Police --> Hours[Good for<br/>24-72 Hours]
    
    Qualify -->|Relationship| Yes[File at<br/>Court]
    Qualify -->|No Relationship| NoQual[Try IAH<br/>Instead]
    
    Yes --> Forms[Complete<br/>Forms]
    NoRelation --> Forms
    
    Forms --> Evidence{Evidence?}
    
    Evidence -->|Strong| StrongCase[Detailed<br/>Declaration]
    Evidence -->|Limited| LimitedCase[Do Your<br/>Best]
    
    StrongCase --> Judge[See Judge<br/>Same Day]
    LimitedCase --> Judge
    
    Judge --> Decision{Decision?}
    
    Decision -->|Granted| Temp[Temporary<br/>Order]
    Decision -->|Denied| Options[Review<br/>Options]
    
    Temp --> Serve[Serve<br/>Abuser]
    Serve --> Hearing[Hearing in<br/>10-21 Days]
    
    Hearing --> Final2[Possible<br/>1 Year Order]
```

## 📱 Technology Safety

```mermaid
flowchart TD
    Tech([Technology<br/>Safety]) --> Devices{Devices}
    
    Devices --> Phone2[Phone]
    Devices --> Computer[Computer]
    Devices --> Car2[Vehicle]
    Devices --> Home2[Smart Home]
    
    Phone2 --> PhoneSafe[New Number<br/>Location Off<br/>New Account<br/>Check Spyware]
    
    Computer --> CompSafe[New Passwords<br/>New Email<br/>Clear History<br/>Use Library]
    
    Car2 --> CarSafe[Check GPS<br/>Disable OnStar<br/>Check for Trackers]
    
    Home2 --> HomeSafe[Change Codes<br/>Disable Cameras<br/>New Router]
    
    PhoneSafe --> Private[Stay<br/>Private]
    CompSafe --> Private
    CarSafe --> Private
    HomeSafe --> Private
```

## 🏠 Housing Safety Options

```mermaid
flowchart TD
    Housing([Housing<br/>Options]) --> Current{Current<br/>Situation?}
    
    Current -->|Shared Home| Shared[Shared<br/>Residence]
    Current -->|Own Home| Own[Your<br/>Home]
    Current -->|Rental| Rental[Rental<br/>Property]
    
    Shared --> SharedOpt{Options?}
    SharedOpt -->|Leave| Leave[Leave<br/>Safely]
    SharedOpt -->|Remove Abuser| Remove[Exclusive<br/>Use Order]
    
    Own --> OwnOpt{Options?}
    OwnOpt -->|Stay| Secure[Change Locks<br/>Security System]
    OwnOpt -->|Leave| TempLeave[Temporary<br/>Relocation]
    
    Rental --> RentOpt{Options?}
    RentOpt -->|Break Lease| Break[AZ Law<br/>Allows]
    RentOpt -->|Transfer| Transfer[Different<br/>Unit]
    
    Leave --> NewPlace[Find New<br/>Housing]
    Remove --> Court2[Court<br/>Process]
    Secure --> Safety[Increase<br/>Security]
    Break --> Notice[30-Day<br/>Notice]
```

## 💰 Financial Safety

```mermaid
flowchart TD
    FinSafety([Financial<br/>Safety]) --> Assess{Joint<br/>Accounts?}
    
    Assess -->|Yes| Joint2[Joint<br/>Accounts]
    Assess -->|No| Separate[Already<br/>Separate]
    
    Joint2 --> Actions{Actions}
    Actions -->|Document| Document[Screenshot<br/>Balances]
    Actions -->|Withdraw| Withdraw[Half of<br/>Funds]
    Actions -->|New Account| NewAcct[Open Own<br/>Account]
    
    Separate --> Protect[Protect<br/>Assets]
    
    Document --> Secret[Keep<br/>Secret]
    Withdraw --> Secret
    NewAcct --> Secret
    
    Secret --> Benefits{Benefits?}
    
    Benefits -->|Apply| Apply[TANF<br/>Food Stamps<br/>Medicaid]
    Benefits -->|Working| Work[Direct Deposit<br/>to New Acct]
    
    Protect --> Monitor2[Monitor<br/>Credit]
    Apply --> Support2[Financial<br/>Support]
    Work --> Support2
```

## 🏛️ Court Safety Measures

```mermaid
flowchart TD
    CourtSafety([Court<br/>Safety]) --> Measures{Safety<br/>Measures}
    
    Measures --> Before[Before<br/>Court]
    Measures --> During[During<br/>Court]
    Measures --> After[After<br/>Court]
    
    Before --> BeforeList[Separate Entrance<br/>Security Escort<br/>Victim Advocate]
    
    During --> DuringList[Separate Seating<br/>Security Present<br/>Phone Testimony]
    
    After --> AfterList[Leave First<br/>Security Escort<br/>Different Exit]
    
    BeforeList --> Request[Request from<br/>Court]
    DuringList --> Request
    AfterList --> Request
    
    Request --> Advocate[Victim<br/>Advocate Help]
```

## 📋 Safety Plan Worksheet

### At Home
- [ ] Identify safe rooms (with locks/exits)
- [ ] Keep phone accessible
- [ ] Teach children to call 911
- [ ] Create code word for danger
- [ ] Plan escape routes
- [ ] Keep car fueled
- [ ] Hide spare keys
- [ ] Pack emergency bag

### Leaving
- [ ] Choose safe time
- [ ] Have destination ready
- [ ] Take children if safe
- [ ] Take emergency bag
- [ ] Turn off phone location
- [ ] Use cash not cards
- [ ] Don't go to predictable places
- [ ] Call DV hotline

### After Leaving
- [ ] Change phone number
- [ ] New email accounts
- [ ] Close joint accounts
- [ ] Change all passwords
- [ ] Inform work/school
- [ ] Vary daily routes
- [ ] Consider protection order
- [ ] Document everything

## 🆘 Emergency Resources

### 24/7 Hotlines
- **National DV Hotline**: 1-800-799-7233
- **Arizona Coalition**: 602-279-2900
- **Legal Aid**: 1-866-637-5341
- **Crisis Text Line**: Text HOME to 741741

### Phoenix Area Shelters
- **Chrysalis**: 602-955-9059
- **Sojourner Center**: 602-244-0089
- **My Sister's Place**: 602-263-6461
- **UMOM**: 602-275-7852

### Tucson Area
- **Emerge!**: 520-888-7777
- **Sister Jose**: 520-909-3905

### Statewide
- **Against Abuse**: 1-800-782-6400
- **Catholic Charities**: 602-997-6105

## 💻 Online Safety Resources

### Delete History
1. **Chrome**: Ctrl+Shift+Delete
2. **Safari**: History → Clear History
3. **Firefox**: Ctrl+Shift+Delete
4. **Use Incognito/Private Mode**

### Safe Computers
- Public library
- Friend's device
- Work computer (carefully)
- New tablet/phone

### Email Safety
- Create new account
- Use different password
- Don't use real name
- Access from safe computer

## 🔗 Related Resources

- [Domestic Violence Guide](../special-situations/Domestic Violence.md)
- [Emergency Orders](../procedures/Emergency Orders.md)
- [Legal Representation](../procedures/Legal Representation.md)
- [Court Procedures](../procedures/Court Procedures.md)

## 📞 Remember

- **You are not alone**
- **It's not your fault**
- **Help is available**
- **You deserve safety**
- **There is hope**

---

**Navigation**: [← Parenting Plan Flowchart](Parenting Plan Flowchart.md) | [Tax Considerations →](Tax Considerations.md)

*Last updated: December 30, 2024*

**This information could save lives. Please share with those who need it.**