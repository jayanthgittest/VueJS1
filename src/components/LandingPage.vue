<template>
  <q-page style="background-color: cadetblue">
    <q-container class="q-pa-md">
      <q-header elevated class="bg-primary text-white">
        <!-- <q-toolbar style="background-color: transparent">
          <q-toolbar-title style="text-align: center">
            Jayanth Bio Page
          </q-toolbar-title>
        </q-toolbar> -->
      </q-header>
      <!-- <h1>Introduction</h1> -->
      <q-card
        style="background-color: rgba(255, 255, 255, 0.6)"
        class="q-mt-md"
      >
        <q-card-section style="margin-left: 10%">
          <div style="display: inline-block; align-items: center">
            <img
              style="
                border-radius: 10%;
                width: 35%;
                display: block;
                margin-left: -10%;
              "
              src="../assets/profile-photo.png"
            />
            <h5 style="margin-left: 35%; margin-top: -36%">
              Hello, I'm Jayanth Kumar
            </h5>
            <h5 style="margin-left: 35%">
              Born in Chennai, raised in Bangalore
            </h5>
            <h5 style="margin-left: 35%">
              Completed B.E. from SJBIT, Bangalore
            </h5>
            <h5 style="margin-left: 35%">
              Currently, learning a lot and exploring technologies.
            </h5>
            <h4 style="margin-left: -10%">
              Blessed with a good life. Scroll below and explore more about
              me...
            </h4>
            <br />
          </div>
        </q-card-section>
      </q-card>
      <h1>Academics and Qualification</h1>
      <q-card
        style="background-color: rgba(255, 255, 255, 0.6)"
        class="q-mt-md"
      >
        <q-card-section style="text-align: center">
          <h5>Athena Public School (2005-17)</h5>
          <h5>The National College (2017-19)</h5>
          <h5>SJB Institute of Technology (2019-23)</h5>
        </q-card-section>
      </q-card>
      <br />
      <h1>Skillset</h1>
      <div>
        <q-card style="background-color: rgba(255, 255, 255, 0.6)">
          <q-card-section style="margin-left: 20%">
            <h5>Python</h5>
            <p style="margin-top: -3%">
              Struggled in college because of C and C++. <br />
              Once I explored Python, the scenario shifted completely and
              started liking programming again.
            </p></q-card-section
          >
          <q-card-section style="margin-left: 20%">
            <h5 style="margin-top: -3%">Java</h5>
            <p style="margin-top: -3%">
              Not a huge fan of java but still... <br />
              Widely used throughout the industry, so had to pick this one.
            </p></q-card-section
          ><br />
          <q-card-section style="margin-left: 20%">
            <h5 style="margin-top: -4%">Docker</h5>
            <p style="margin-top: -3%">
              After getting to know about DevOps this was the first concept that
              was interesting.
              <br />
              Learnt basics and usecases of it in LTIMindtree.
            </p></q-card-section
          >
          <q-card-section style="margin-left: 20%">
            <h5 style="margin-top: -3%">Linux</h5>
            <p style="margin-top: -3%">
              Initially ignored Linux but later got to know its role and
              importance.
              <br />
              Learnt CentOS and Ubuntu and understood how Linux works.
            </p></q-card-section
          ><br />
          <q-card-section style="margin-left: 20%">
            <h5 style="margin-top: -4%">HTML and CSS</h5>
            <p style="margin-top: -3%">
              Building web pages are fun and frustrating at the same time.
              <br />
              CSS even though tricky and frustrating is still fun.
            </p></q-card-section
          >
          <q-card-section style="margin-left: 20%">
            <h5 style="margin-top: -3%">AWS and Azure</h5>
            <p style="margin-top: -3%">
              Explored cloud technologies during my final year in college.
              <br />
              Experience with 2 of the most widely used cloud platforms.
            </p></q-card-section
          >
        </q-card>
      </div>
      <br />
      <h1>Hobbies</h1>
      <div style="" id="hobby">
        <q-card style="background-color: rgba(255, 255, 255, 0.6)">
          <q-card-section style="margin-left: 20%">
            <h5>Drawing</h5>
            <p style="margin-top: -3%">
              This is one of my favorites and often I would just pick up a blank
              sheet and start sketching.
            </p> </q-card-section
          ><br />
          <q-card-section style="margin-left: 20%">
            <h5 style="margin-top: -5%">Gaming</h5>
            <p style="margin-top: -3%">
              After certain period outdoor games turned into indoor games and
              indoor games became computer games. <br />Then I began exploring
              the world of PC gaming and started playing and never stopped.
            </p>
          </q-card-section>
          <q-card-section style="margin-left: 20%">
            <h5 style="margin-top: -3%">Travelling</h5>
            <p style="margin-top: -3%">
              I like to travel by Train. Sometimes, it's travelling by train
              more interesting than the actual place.
            </p></q-card-section
          >
        </q-card>
      </div>
      <br />
    </q-container>
  </q-page>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>
