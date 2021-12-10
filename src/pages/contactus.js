import React from 'react'
import MasterLayout from '../components/MasterLayout'
import ContentBuilder from '../helpers/ContentBuilder';

export default function contactus() {

    const contactContentTexts = [
      `
          Service Area
          <br><br>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10521866.543888666!2d113.87920017658571!3d-24.42116990662131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeef3eae1493ed79a!2sNelgara%20Pty%20Ltd%3A%20Commercial%20Project%20Management%20Solutions!5e0!3m2!1sen!2sau!4v1639132592269!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
