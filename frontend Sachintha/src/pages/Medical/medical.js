import React, { useEffect, useState } from "react";
import { FadeIn } from "react-slide-fade-in";
import "./Medical.css";
import SignInModal from "./../../components/signUpModal/modal";
import loginModal from "./../../components/loginModal/modal";
import {
  Grid,
  Tabs,
  Tab,
  Typography,
  Icon,
  TextField,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
} from "@mui/material";
import stationeryList from "../../utils/stationeryList";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import imageOne from "./../../assets/Medical/4000.jpg";
import imageTwo from "./../../assets/Medical/4001.jpg";
//import AddStationery from "./AddStationery";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import GridOneImage from "./../../assets/Medical/4000.jpg";

const Stationery = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const navigate = useNavigate();

  return (
    <>
      <Grid
        container
        style={{ display: "flex", flexDirection: "row" }}
        spacing={1}
        className="section pb_45 pt_45"
      >
        {/* Title */}
        <Grid item>
          <span></span>
          <h1 className="section_title_text">Help Us Medical Caring Unit</h1>
        </Grid>

        {/* Tabs */}
      </Grid>
      <Grid item>
        <div>
          <Tabs
            value={currentTab}
            onChange={(event, newValue) => setCurrentTab(newValue)}
          >
            <Tab label="HelpUs MediCare" />
            <Tab label="Donations" />
            <Tab label="Logins" />
          </Tabs>
          <div hidden={currentTab !== 0}>
            <FadeIn
              from="bottom"
              positionOffset={400}
              triggerOffset={200}
              delayInMilliseconds={0}
            >
              <Grid style={{ display: "flex" }}>
                <Grid item style={{}} xs={6}>
                  <img
                    src={imageOne}
                    alt="imageone"
                    style={{ width: "auto", height: "500px" }}
                  />
                </Grid>
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "50px",
                  }}
                  item
                  xs={6}
                >
                  <h1>Welcome To HelpUs MediCare</h1>
                  <p>
                    Welcome to Help Us Medicare, the website dedicated to
                    assisting those affected by natural disasters in Sri Lanka.
                    We are here to connect compassionate volunteers with people
                    in need during these challenging times. If you have a
                    genuine desire to provide aid and support to those suffering
                    from the aftermath of natural disasters, you're in the right
                    place. Our platform serves as a hub for individuals who want
                    to make a positive impact in the lives of those affected by
                    disasters. By joining us, you become part of a community
                    that believes in the power of collective action and empathy.
                    As a volunteer, you will have the opportunity to extend a
                    helping hand, lend an empathetic ear, and contribute your
                    skills and knowledge to alleviate suffering. Together, we
                    can make a significant difference in the lives of those
                    facing the aftermath of natural disasters. Whether you have
                    prior experience, possess medical expertise, or simply have
                    the willingness to support those in need, Help Us Medicare
                    provides a platform for you to make a meaningful impact.
                    Every act of kindness counts, and your involvement can bring
                    hope and relief to those who need it the most. Thank you for
                    joining Help Us Medicare. Your dedication and compassion
                    will help rebuild lives and provide essential assistance to
                    those affected by natural disasters in Sri Lanka. Together,
                    we can create a brighter future and offer a helping hand
                    when it is most needed.
                  </p>
                </Grid>
              </Grid>
            </FadeIn>

            <FadeIn
              from="bottom"
              positionOffset={400}
              triggerOffset={200}
              delayInMilliseconds={0}
            >
              <Grid marginTop={10} container xs={12}>
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                  item
                  xs={6}
                >
                  <h1>How To Be A Volunteer?</h1>
                  <p>
                    Our website is a platform that connects compassionate
                    individuals with those in need during natural disasters.
                    We're looking for volunteers with basic medical knowledge
                    who are willing to provide assistance in times of crisis.
                    Whether you have completed basic medical training, possess
                    first aid knowledge, or have related experience, your
                    commitment can make a significant impact. As a volunteer,
                    you'll work with relief organizations, local medical
                    professionals, and fellow volunteers to deliver essential
                    medical aid to affected communities. Your support brings
                    comfort, relief, and hope to those facing the aftermath of
                    disasters. By joining our platform, you gain access to a
                    network of like-minded individuals who share your
                    dedication. As a volunteer, you'll contribute your skills
                    and offer care where it's needed most. It's a challenging
                    yet rewarding role, where you'll witness the resilience and
                    strength of communities coming together in adversity. We
                    believe everyone can make a positive difference during
                    crises, and we invite you to register as a valued member of
                    our volunteer community. Your commitment and compassion can
                    help save lives, alleviate suffering, and provide vital
                    medical aid during natural disasters. Thank you for being a
                    part of this crucial effort. Together, we can make a
                    significant impact and provide essential medical help when
                    it's most needed. Register today and become a valued member
                    of our volunteer community!
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "20px",
                    }}
                  >
                    <SignInModal />
                  </div>
                </Grid>
                <Grid
                  item
                  style={{ display: "flex", justifyContent: "flex-end" }}
                  xs={6}
                >
                  <img
                    src={imageTwo}
                    alt="imageone"
                    style={{ width: "auto", height: "500px" }}
                  />
                </Grid>
              </Grid>
            </FadeIn>
            <FadeIn
              from="bottom"
              positionOffset={400}
              triggerOffset={200}
              delayInMilliseconds={0}
            >
              <Grid container marginTop={10} xs={12}>
                <Grid
                  item
                  style={{ display: "flex", justifyContent: "flex-start" }}
                  xs={6}
                ></Grid>

                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                  item
                  xs={6}
                ></Grid>
              </Grid>
            </FadeIn>
          </div>
          <div hidden={currentTab !== 1}> </div>
          <div hidden={currentTab !== 2}>Tab 3 content</div>
        </div>
      </Grid>
    </>
  );
};

export default Stationery;
