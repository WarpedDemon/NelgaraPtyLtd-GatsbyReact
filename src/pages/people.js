import React from 'react'
import MasterLayout from '../components/MasterLayout'
import ContentBuilder from '../helpers/ContentBuilderProfile';

export default function people() {

    const peopleContentTexts = [
        `
            Experienced Commercial Manager with a demonstrated history of working in
            the construction industry. Skilled in Value Engineering, Project & Cost Management,
            Procurement, Contracts, and Construction Law. A chartered professional with a
            Bachelor of Science (BSc) focused in Quantity Surveying and a Higher National
            Diploma in Business & Finance (HND).
            <br><br>
            Nick Noonan is a determined professional who is solution focused and
            creates an environment which empowers his team to pursue complex challenges
            and achieve stretch targets. His success has been attributed to an upstanding
            personal character and mastering industry competencies in commercial project
            management, strong and fair leadership, open and honest communication,
            adaptability to the working environment, forecasting risk and implementing
            mitigation, practical and concise problem solving.
            <br><br>
            Nick’s depth of experience over the past 32 years as a qualified
            Quantity Surveyor, project and business commercial manager has led to
            success working within businesses or on projects with turnovers in excess
            +$150M per annum. Over the past thirty-two years Nick has provided
            project and business management support to many contracts, projects
            and business programs. He has provided leadership and consulting
            services to Clients and project teams to create new and innovative
            ways of improving their practices and processes.
            <br><br>
            Please Contact;
            <br><br>
            Nick Noonan
            T +61 (08) 434 333 161
            Nelgara@outlook.com
      `,
      `
            Experienced Supply Chain Manager, qualified Bookkeeper/Accountant to Cert IV,
            and can also provide contract administration services. Kate has a demonstrated
            history of working in the manufacturing industry and providing professional
            services across multiple disciplines. Skilled in working with clients to deliver
            ‘just in time’ supply chain management, Kate offers accounts administrative services
            supported by her Australian book keeping/accounts qualifications. A professional with
            a Bachelor Arts (BA Hons) in Business Studies, a Higher National Diploma in Business & Finance (HND)
            and Cert IV in Bookkeeping and Cert IV in Accounting.
            <br><br>
            Kate’s depth of experience over the past 30 years as a professional has led
            to success working within businesses with turnovers in excess +$50M per annum.
            Over the past thirty years Kate has provided business management support to many
            leadership teams. Kate is self-motivated, possess excellent communications skills
            and can work within any team to produce high quality outcomes.
            <br><br>
            Please Contact;
            <br><br>
            Kate Noonan
            T +61 (08) 452 345 553
            Nelgara@outlook.com
      `,
      `
            Experienced Contracts/Commercial Manager with a demonstrated history of
            working in the construction industry in both the Engineering and Building
            disciplines. Skilled in working with clients to deliver successful outcomes
            inclusive of Project & Cost Management, Procurement, Contracts, and
            Construction Law.
            <br><br>
            A professional with a Bachelor of Science (BSc Hons)
            focused in Quantity Surveying an accredited qualification by the Royal
            Institution of Chartered Surveyors (RICS).
            <br><br>
            Peter Hooks has a vast experience in (but not limited to) pre-contracts
            (tenders in excess of $300m)(working with insurance brokers on tender solutions)
            (Tender Commercial Risk assessments and drafting clarification return documentation),
            contract negotiations, contract administration, managing change, cost forecasting,
            dispute resolution and procurement management.
            <br><br>
            Pete’s depth of experience over the past 14 years as a qualified Quantity Surveyor,
            project and business contracts manager has led to success working within businesses
            or on projects with turnovers in excess +$75M per annum. Over the past fourteen
            years Pete has provided project and business management support to many contracts,
            projects and business programs.
            <br><br>
            Pete has an exceptional understanding of contract
            and commercial management from the pre-tender phase through to project completion.
            Pete is self-motivated, possess excellent communications skills and can competently
            lead teams to produce high quality outcomes.
            <br><br>
            Please Contact;
            <br><br>
            Peter Hooks
            T +61 (08) 417 739 054
            peter.nelgara@outlook.com
      `,
      `
            Paul is a seasoned Civil Engineer and specialist Project Engineering Manager.
            He has 30+ years of experience in delivering projects, engineering management
            and designs for the resources, infrastructure and construction sectors.
            He has participated through all aspects of major project life cycles and his
            specific areas of expertise include:
            <br><br>
            •	Engineering Management, Design Management, Independent Verification,
              Engineering Verification and Validation, Commissioning and Handover
            <br><br>
            •	Engineering Assurance – Systems Engineering, Requirements Management, Safety
            Assurance, Reliability/Availability and Maintainability (RAM) – EN50126/7/8/9
            <br><br>
            •	Leading Design and Delivery Engineering for:
                Civils (geotechnical, roads, bulk earthworks, hydrology/hydraulics/drainage)
                Railways (light rail, passenger, freight, heavy haul, electrified and non-electrified)
                Structures (buildings and bridge structures)
                Subdivisions (services, utilities, housing construction and access)
            <br><br>
            •	Project, Construction and Commissioning Management and Close out Assurance
            <br><br>
            •	Developing strategic project delivery pathways, sequencing and logic
            <br><br>
            With a proven track record, Paul has recently provided leadership,
            engineering and project management, governance, engineering assurance
            (conventional and systems based) for several significant projects in
            Western Australia and Queensland (within both private and public sectors).
            He is comfortable leading and coordinating multi-disciplinary owners,
            design and delivery teams to deliver all phases of engineering,
            designs, construction, commissioning, entry into service and
            handover for mega to mid-sized infrastructure programs of work.
            <br><br>
            Paul’s expertise, experience and capability ensures value add, innovation and optimised solutions.
            <br><br>
            Please Contact;
            <br><br>
            Paul Brown
            T +61 (08) 0410 173 184
            paulbrown.nelgara@outlook.com
      `
    ];

    const peopleContentTitles = ["Nicholas (Nick) Noonan", "Kathryn (Kate) Noonan", "Peter (Pete) Hooks", "Paul Brown"];
    const peopleContentImgs = ["../img/nicknoonan.jpg", "../img/IMG_6170[5973].jpg", "../img/1550793732652.jfif", "../img/paulbrown.jpg"];

    return (
    <MasterLayout title="Our Team">
        <ContentBuilder titles={peopleContentTitles} texts={peopleContentTexts} imgs={peopleContentImgs}></ContentBuilder>
    </MasterLayout>
    )
}
