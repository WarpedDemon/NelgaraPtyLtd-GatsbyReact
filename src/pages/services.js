import React from 'react'
import MasterLayout from '../components/MasterLayout'
import ContentBuilder from '../helpers/ContentBuilder'

export default function services() {

    const servicesContentTexts = [
        `
            We have established Nelgara Pty Ltd to provide clients with industry
            expertise from experienced resources contracted to deliver commercial
            aspects for businesses and projects and can provide resources to supplement
            peak work demands in line with your technical brief/requirements.
            <br><br>
            We provide following services:
        `,
        `
          Businesses
          <br><br>
          Drafting of, or advice upon, Subcontracts, Supply Agreements, Consultancy Agreements, minor professional Services Agreements;
          <br><br>
          Pre-Contract Review of Contract Terms prior to submission of bids;
          <br><br>
          Advice on Contract Negotiations;
          <br><br>
          Project Commercial Controls health checks;
          <br><br>
          Through our partner consultants, Estimating/Planning Services;
        `,
        `
          Project Procurement Services (Startup /Strategy/Procurement);
          <br><br>
          Preparation of Summary Key Obligations and Rights (Project Commercial Game Plan);
          <br><br>
          Quantity Surveyor/Contract Administrator Services (short/long term);
          <br><br>
          Program Review/Management advice;
          <br><br>
          Variation/Delay/Disruption & Extension of Time Claim preparation or management;
        `,
        `
          Project Management
          <br><br>
          Project management support;
          <br><br>
          Project reviews and due diligence;
          <br><br>
          Risk management analytics and advice;
          <br><br>
          Contract management;
          <br><br>
          Commercial Operational readiness;
        `,
        `
          Cost management;
          <br><br>
          Planning and scheduling advice;
          <br><br>
          Change management;
          <br><br>
          Project reporting;
        `,
        `
          Services for projects under duress;
          <br><br>
          Develop and implement business commercial management processes;
          <br><br>
          Nelgara continues to draw on its actual delivery experience integrated with
          the latest technology solutions to provide a unique firm that delivers
          sustainable outcomes for an ever-changing world.
        `
    ];
    const servicesContentTitles = ["The Business", "Business and Project Risk Services", "Projects", "Management", "Project Controls", "Improvement Services"];
    const servicesContentImages = ["../img/project2.png", "../img/road2.png", "../img/startup.jpg", "../img/train.png", "../img/office.jpg", "../img/bridge.png", "../img/bigminner.png", "../img/desal.png", "../img/miningtruck.png", "../img/openpit.png", "../img/room.jpg"];

    return (
        <MasterLayout title="Commercial Construction Services">
            <ContentBuilder titles={servicesContentTitles} texts={servicesContentTexts} imgs={servicesContentImages}></ContentBuilder>
        </MasterLayout>
    )
}
