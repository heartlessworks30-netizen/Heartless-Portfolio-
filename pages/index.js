import { useEffect } from "react";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial", background: "#0b0b0b", color: "white" }}>

      {/* HERO SECTION */}
      <div style={{ position: "relative", height: "80vh", overflow: "hidden" }}>
        
        {/* Background Banner */}
        <img
          src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.3
          }}
        />

        {/* Overlay Content */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          animation: "fadeIn 1.2s ease"
        }}>
          
          {/* Profile Image */}
          <img
            src="https://via.placeholder.com/120"
            alt="profile"
            style={{
              borderRadius: "50%",
              marginBottom: "15px",
              border: "3px solid white"
            }}
          />

          <h1 style={{ fontSize: "42px" }}>Ashu Edits</h1>

          <p style={{ color: "#aaa", marginTop: "10px" }}>
            Professional Video Editor | 3 Years of Experience
          </p>

        </div>
      </div>

      {/* SKILLS */}
      <div style={{ textAlign: "center", padding: "50px 20px" }}>
        <h2>Tools I Use</h2>
        <p style={{ color: "#aaa", marginTop: "10px" }}>
          Premiere Pro • After Effects • DaVinci Resolve
        </p>
      </div>

      {/* SHOWREEL */}
      <div style={{ textAlign: "center", padding: "50px 20px" }}>
        <h2>Showreel</h2>

        <div style={{ marginTop: "20px" }}>
          <iframe
            width="80%"
            height="400"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="showreel"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* INSTAGRAM EDITS */}
      <div style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Instagram Edits</h2>
        <p style={{ color: "#aaa" }}>
          High-retention reels with subtitles, effects, and fast cuts
        </p>
      </div>

      {/* BEFORE AFTER */}
      <div style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Before & After</h2>
        <p style={{ color: "#aaa" }}>
          Transforming raw clips into engaging content
        </p>
      </div>

      {/* MOTIVATIONAL EDITS */}
      <div style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Motivational Edits</h2>
        <p style={{ color: "#aaa" }}>
          Story-driven impactful edits with emotion and pacing
        </p>
      </div>

      {/* CONTACT */}
      <div style={{ textAlign: "center", padding: "40px", color: "#777" }}>
        <p>Contact me on Instagram: @yourusername</p>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translate(-50%, -60%);
            }
            to {
              opacity: 1;
              transform: translate(-50%, -50%);
            }
          }
        `}
      </style>

    </div>
  );
            }
