import React from "react"
import { Link } from "gatsby"
import Image from "~/components/image"
import { fbq } from '@hutsoninc/gatsby-plugin-facebook-pixel';

const AudioBibleLinks = ({ metadata }) => 
  <div className="centered-div">
    <div className="audio-links">

      <div>
        <Link 
          to="/voiceonly"
          onClick={() => {
            fbq('track', 'PageView'); // see https://developers.facebook.com/docs/meta-pixel/implementation/conversion-tracking/ "Custom Conversions"
          }}
        >
          <Image
            className="audio-bible-voice-only-image"
            alt="Audio Bible Voice Only"
            image={metadata.audio_bible_voice_only}
          />
        </Link>
      </div>

      <div>
        <Link 
          to="/dramatized"
          onClick={() => {
            fbq('track', 'PageView'); // see https://developers.facebook.com/docs/meta-pixel/implementation/conversion-tracking/ "Custom Conversions"
          }}
        >
          <Image
            className="audio-bible-dramatized-image"
            alt="Audio Bible Dramatized"
            image={metadata.audio_bible_dramatized}
          />
        </Link>
      </div>

      <div>
        <Link 
          to="/both"
          onClick={() => {
            fbq('track', 'PageView'); // see https://developers.facebook.com/docs/meta-pixel/implementation/conversion-tracking/ "Custom Conversions"
          }}
        >
          <Image
            className="audio-bible-both-image"
            alt="Audio Bible Both"
            image={metadata.audio_bible_both}
          />
        </Link>
      </div>

    </div>
  </div>

export default AudioBibleLinks
