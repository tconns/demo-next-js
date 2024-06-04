'use client'

import React, { useEffect } from 'react'

type Props = {
}

declare global {
  interface Window {
    jwplayer?: any
  }
}
const MCard: React.FC<Props> = ({}) => {
  useEffect(() => {
    // window.jwplayer.key = 'ITWMv7t88JGzI0xPwW8I0+LveiXX9SWbfdmt0ArUSyc='
    setTimeout(() => {
      var videoPlayer = window.jwplayer('video')
      videoPlayer.setup({
        key: 'ITWMv7t88JGzI0xPwW8I0+LveiXX9SWbfdmt0ArUSyc=',
        primary: 'html5',
        sources: [
          {
            file: 'https://s3.phim1280.tv/20240411/rcT2x8QB/index.m3u8',
            label: 'FULL HD',
            type: 'hls',
          },
        ],
        //   sources: [
        //     {
        //       file: 'https://www.youtube.com/watch?v=3w4c8pVZoNM',
        //       type: 'youtube',
        //     },
        //   ],
        image: '',
        ga: {},
        width: '100%',
        height: '100%',
        aspectratio: '16:9',
        playbackRateControls: true,
        displayPlaybackLabel: true,
        fullscreen: true,
        autostart: 'true',
        // skin: {
        //     name: "halimthemes",
        //     url: "https://hhtq4.vip/wp-content/plugins/halimPlayer/assets/css/halim.css",
        // },
        // logo: {
        //     file: "https://vn4u.vn/wp-content/uploads/2023/09/logo-co-tinh-nhat-quan-2.png",
        //     link: "https://hhtq4.vip/",
        //     hide: false,
        //     logoBar: "https://hhtq4.vip/wp-content/uploads/2024/03/LOGO-PHIMHHTQ-player.png",
        //     target: "_blank",
        //     position: "bottom-right",
        // },
        tracks: [],
        captions: {
          color: '#fff',
          fontSize: 14,
          backgroundOpacity: 0,
          edgeStyle: 'raised',
        },
        // advertising: {
        //     tag: "https://hhtq4.vip/tvc.xml",
        //     client: "vast",
        //     vpaidmode: "insecure",
        //     preloadAds: "",
        //     skipoffset: "5",
        //     skipmessage: "Bỏ qua sau xxs",
        //     skiptext: "Bỏ qua quảng cáo"
        // },
        displaytitle: false,
        //   autostart: false,
        //   playbackRateControls: true,
        mute: false,
      })
    }, 1000)
  }, [])
  return (
    <div className="jw-wrapper jw-reset">
      <div className="jw-media jw-reset">
        <video
          id="video"
          controls
          className="jw-video jw-reset"
        />
      </div>
    </div>
  )
}
export default MCard
