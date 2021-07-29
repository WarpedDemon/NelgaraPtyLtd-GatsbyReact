import React from 'react';
import MasterLayout from '../components/MasterLayout';
import ContentBuilder from '../helpers/ContentBuilder';

export default function industries() {

    const industryContentTexts = [
        `
            We have established Nelgara Pty Ltd to provide clients with industry
            expertise from experienced resources contracted to deliver commercial
            aspects for businesses and projects and can provide resources to
            supplement peak work demands in line with your technical
            brief/requirements.
            <br><br>
            We provide the follwing services:
        `,
        `
            Humber International Terminal;
            <br><br>
            Immingham Western Lead in Jetty;
            <br><br>
            Great Yarmouth Outer Harbour;
            <br><br>
            Mersey Docks Framework;
            <br><br>
            Gladstone Lock Gates;
            <br><br>
            Ipswich Ro-Ro Terminal;
            <br><br>
            Teeside Ro-Ro Terminal;
            <br><br>
            Multiple Limpet Dam Projects around the UK;
            <br><br>
            Cromer Slipway;
        `,
        `
            Pluto 2;
            <br><br>
            Devil Creek (including Camp);
            <br><br>
            Gorgon Utilities Package;
            <br><br>
            Inpex Browse Ltd ECI (JV Clough/Maunsell)
            <br><br>
            Newgen Kwinana Power Station (Alstom)
        `,
        `
            RTIO Cape Lambert A & B camp;
            <br><br>
            RTIO North West Coastal Highway (Road Diversion & Bridge over Rail);
            <br><br>
            RTIO Mesa J TSF3 (indigenous JV);
            <br><br>
            RTIO Mesa J TSF4 (Indigenous JV);
            <br><br>
            RTIO Rosella Bellbird Sidings (Indigenous JV);
            <br><br>
            RTIO Dampier Fuel Wharf;
            <br><br>
            RTIO Argyle Diamond Mine;
            <br><br>
            BHP Primary & Secondary Crushers;
            <br><br>
            BHP Finucane Water Main Services Relocation;
            <br><br>
            BHP Jimblebar (including dewatering package);
            <br><br>
            BHP 3 Bridges (launch over 5 live Rail);
            <br><br>
            BHP Mulla Mulla Village Expansion;
            <br><br>
            FMG Dewatering Framework Christmas creek & Cloudbreak (Indigenous JV);
            <br><br>
            FMG Solomon Airstrip & Fly Camp;
            <br><br>
            Roy Hill Marble Bar Road;
            <br><br>
            Tianqi Lithium Kwinana;
            <br><br>
            Talison Greenbushes Mine Expansion (Lithium);
        `,
        `
            Aubin Grove Train Station;
            <br><br>
            RTIO Rosella Bellbird Sidings (Indigenous JV);
            <br><br>
            BHP 3 Bridges (Launch over 5 live Rail);
            <br><br>
            RTIO North West Coastal Highway (Bridge over Rail);
            <br><br>
            PTA escalator Replacement Framework;
            <br><br>
            Perth City Link;
            <br><br>
            Narngulu Rail Depot;
        `,
        `
            Mandurah Traffic Bridge;
            <br><br>
            Reid Highway;
            <br><br>
            Bruce Highway (Queensland);
            <br><br>
            Dawson Highway (Queensland);
            <br><br>
            Gateway Alliance;
            <br><br>
            Main Roads Infrastructure Alliance (MRIA);
            <br><br>
            New Lord Street;
            <br><br>
            Ellenbrook;
            <br><br>
            Russell Road ECI And Bridge dueling Project;
            <br><br>
            Great Northern Highway ‘Team Savanah”;
            <br><br>
            Abraham Street Geraldton;
            <br><br>
            Greenhough Bridge Geraldton
            <br><br>
            Many Projects UK based inclusive of Frameworks (Alliances)
        `,
        `
            Ellenbrook Water Tank;
            <br><br>
            Harvey Water Tank;
            <br><br>
            Denmark Water Tank;
            <br><br>
            Spring Gulley Pond C;
            <br><br>
            Many Projects UK based inclusive of Frameworks (Alliances);
        `,
        `
            Perth Airport Skybridge;
            <br><br>
            Tindall Airforce Base NT;
            <br><br>
            RAAF Base Amberley Buildings & Refurbishments (QLD);
        `,
        `
            Primehouse Office Development;
            <br><br>
            Mount Hospital – Hybrid and Catheter Lab Refurbishment, Medical Gas Equipment Upgrade;
            <br><br>
            RAAF Base Amberley Buildings & Refurbishments (QLD);
            <br><br>
            240 St Georges Terrace Office Refurbishment;
            <br><br>
            Fisher & Paykel Industrial Warehouse;
            <br><br>
            Scarborough Surf Club;
            <br><br>
            Many Projects UK based inclusive of Schools, Warehouses, Housing and Hospitals;
        `,
        `
            Multiple Projects Sandvik (Stacker Reclaimer construction);
            <br><br>
            Muja Coal demolition and refurbishment (Cost Plus Contract Negotiation and agreement);
            <br><br>
            ECI /Alliance Contracts include Team Savanah (MRWA), Inpex, Russell Road, Aubin Grove,
            <br><br>
            Escalators Replacement Project, Solomon Airport, Alcoa, Oz Minerals;
        `
    ];

    const industryContentTitles = ["Business and Project Risk Services", "Marine", "LNG", "Resource Projects", "Rail Related", "Main Roads", "Water Related", "Airport Related", "Building Projects", "Others"];
    const industryContentImages = ["../img/project2.png", "../img/road2.png", "../img/startup.jpg", "../img/train.png", "../img/office.jpg", "../img/bridge.png", "../img/bigminner.png", "../img/desal.png", "../img/miningtruck.png", "../img/openpit.png", "../img/room.jpg"];


    return (
    <MasterLayout title="Business & Project Risk Services">
        <ContentBuilder titles={industryContentTitles} texts={industryContentTexts} imgs={industryContentImages}></ContentBuilder>
    </MasterLayout> 
    )
}
