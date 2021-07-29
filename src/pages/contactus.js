import React from 'react'
import MasterLayout from '../components/MasterLayout'
import ContentBuilder from '../helpers/ContentBuilder';

export default function contactus() {

    const contactContentTexts = [
      `
          Executive Headquarters
          <br><br>
          28 Henderson Drive
          <br><br>
          Kallaroo
          <br><br>
          Perth
          <br><br>
          WA 6025
          <br><br>
          TEL: +61 (0)434 333 161
          <br><br>
          E-Mail: Nelgara@outlook.com
      `
    ];
    const contactContentTitles = ["Contact Us"];
    const contactContentImages = ["../img/startup.jpg"]
    return (
    <MasterLayout title="Contact Us">
      <ContentBuilder titles={contactContentTitles} texts={contactContentTexts} imgs={contactContentImages}></ContentBuilder>
    </MasterLayout>
    )
}
