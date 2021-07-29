import React from "react"
import MasterLayout from "../components/MasterLayout"
import ContentBlockLayoutRight from "../components/ContentBlockLayoutRight"
import ContentBlockLayoutLeft from "../components/ContentBlockLayoutLeft"

export default function Home() {

  const indexContentTexts = [
    `
      Innovative Commercial and Project Management Solutions
      <br><br>
      Nelgara Pty Ltd is an Australian commercial management consulting firm
      that leverages its significant industry experience to develop and apply
      best practice solutions to a broad mix of service industries including oil and gas,
      water treatment, power distribution, infrastructure, resources and mining
      for both private and public institutions.
      <br><br>
      We can understand our clients’ needs quickly, as we have worked there,
      and respond with significant and cost-effective improvements to their
      operational performance whilst supporting their business goals.
      <br><br>
      We bring in combined local and global knowledge for the benefit of the Australian
      construction industry.
      <br><br>
      We put clients first.
    `,
    `
      Nelgara Pty Ltd brings more than 100 years of experience in delivering
      solutions across the end to end phases of projects both pre and post
      construction.
      <br><br>
      Nelgara continues to draw on its actual delivery experience
      integrated with the latest technology solutions to provide a unique
      firm that delivers sustainable outcomes for an ever-changing world.
      <br><br>
      We are Skilled in Project Leadership, People, Schedule and Cost Management,
      Sub-Contractor Management, and Stressed Project Recovery
      (more consultants are joining monthly).
    `,
    `
      Nelgara Pty Ltd is based in Perth, WA but consultants have both worked on projects
      and or being responsible at a business Contracts Manager or Commercial Manager level
      for projects in Queensland, NSW and Victoria.
      <br><br>
      We can also provide solutions through our network of consultant partners in the industry.
    `
  ];

  const indexContentImages = ["../img/project2.png", "../img/road2.png", "../img/startup.jpg", "../img/train.png", "../img/office.jpg", "../img/bridge.png", "../img/bigminner.png", "../img/desal.png", "../img/miningtruck.png", "../img/openpit.png", "../img/room.jpg"];
  const indexContentTitles = ["What We Do", "Expertise", "Locations"] 

  return (
    <MasterLayout title="Home Page">
      <ContentBlockLayoutRight title={indexContentTitles[0]} contentText={indexContentTexts[0]} imgSource={"../" +indexContentImages[0]}></ContentBlockLayoutRight>
      <ContentBlockLayoutLeft title={indexContentTitles[1]} contentText={indexContentTexts[1]} imgSource={"../" +indexContentImages[1]}></ContentBlockLayoutLeft>
      <ContentBlockLayoutRight title={indexContentTitles[2]} contentText={indexContentTexts[2]} imgSource={"../" +indexContentImages[2]}></ContentBlockLayoutRight>
    </MasterLayout>
  )
}



