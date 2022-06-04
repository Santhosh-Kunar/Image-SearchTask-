import React, { useEffect, useRef, useState } from "react";
import Styles from "./songcard.module.css"
const SongCards = () => {
   
  let emailref = useRef();
  let handleclick = e => {
    e.PreventDefault();
    let email = emailref.current.value
    console.log(email);
  }
  return (
    <>
      <section className="w-[100%] h-[100vh]">
        <article className={Styles.SongCardarticle}>
          <div className="pt-3">
            <ul className="card_wrap">
              <li id="1" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/naach-meri-rani"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/d41WjznWPL/41Wj2qgNWP/size_m.webp"
                      alt="Naach Meri Rani"
                      title="Naach Meri Rani"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Naach Meri Rani"
                    title="Naach Meri Rani"
                    className="al t_over"
                    href="/song/naach-meri-rani"
                  >
                    {" "}
                    Naach Meri Rani
                  </a>
                </div>
              </li>
              <li id="2" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/lut-gaye-feat-emraan-hashmi"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/a7LWBkzbzX/LWBkkJpRbz/size_m.webp"
                      alt="Lut Gaye (Feat. Emraan Hashmi)"
                      title="Lut Gaye (Feat. Emraan Hashmi)"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Lut Gaye (Feat. Emraan Hashmi)"
                    title="Lut Gaye (Feat. Emraan Hashmi)"
                    className="al t_over"
                    href="/song/lut-gaye-feat-emraan-hashmi"
                  >
                    {" "}
                    Lut Gaye
                  </a>
                </div>
              </li>
              <li id="3" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/teri-aankhon-mein-12"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/a7LWBkzbzX/7LWBVPRDWz/size_m.webp"
                      alt="Teri Aankhon Mein"
                      title="Teri Aankhon Mein"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Teri Aankhon Mein"
                    title="Teri Aankhon Mein"
                    className="al t_over"
                    href="/song/teri-aankhon-mein-12"
                  >
                    {" "}
                    Teri Aankhon Mein
                  </a>
                </div>
              </li>
              <li id="4" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/raataan-lambiyan-from-shershaah"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/song/lJvKa56KDV/vKa91Z1RKD/size_m_1628085090.webp"
                      alt="Raataan Lambiyan"
                      title="Raataan Lambiyan"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Raataan Lambiyan"
                    title="Raataan Lambiyan"
                    className="al t_over"
                    href="/song/raataan-lambiyan-from-shershaah"
                  >
                    {" "}
                    Raataan Lambiyan
                  </a>
                </div>
              </li>
              <li id="5" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/bewafa-tera-masoom-chehra-1"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/mGjKr1b6zX/GjKr5V1ob6/size_m.webp"
                      alt="Bewafa Tera Masoom Chehra"
                      title="Bewafa Tera Masoom Chehra"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Bewafa Tera Masoom Chehra"
                    title="Bewafa Tera Masoom Chehra"
                    className="al t_over"
                    href="/song/bewafa-tera-masoom-chehra-1"
                  >
                    {" "}
                    Bewafa Tera
                  </a>
                </div>
              </li>
              <li id="6" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/kyon-20"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/song/YoEWlwa3zX/EWl1xJkzbz/size_m_1596633535.webp"
                      alt="Kyon?"
                      title="Kyon?"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Kyon?"
                    title="Kyon?"
                    className="al t_over"
                    href="/song/kyon-20"
                  >
                    {" "}
                    Kyon?
                  </a>
                </div>
              </li>
              <li id="7" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/baarish-ban-jaana"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/ogNWkLDbmX/NWkLm5Vkbm/size_m.webp"
                      alt="Baarish Ban Jaana"
                      title="Baarish Ban Jaana"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Baarish Ban Jaana"
                    title="Baarish Ban Jaana"
                    className="al t_over"
                    href="/song/baarish-ban-jaana"
                  >
                    {" "}
                    Baarish Ban Jaana
                  </a>
                </div>
              </li>
              <li id="8" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/ranjha-from-shershaah"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/song/XYybzNrb2g/ybzEg61rW2/size_m_1628084846.webp"
                      alt="Ranjha"
                      title="Ranjha"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Ranjha"
                    title="Ranjha"
                    className="al t_over"
                    href="/song/ranjha-from-shershaah"
                  >
                    {" "}
                    Ranjha
                  </a>
                </div>
              </li>
              <li id="9" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/taaron-ke-shehar"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/0wrb4kNWLg/wrb476lyWL/size_m.webp"
                      alt="Taaron Ke Shehar"
                      title="Taaron Ke Shehar"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Taaron Ke Shehar"
                    title="Taaron Ke Shehar"
                    className="al t_over"
                    href="/song/taaron-ke-shehar"
                  >
                    {" "}
                    Taaron Ke Shehar
                  </a>
                </div>
              </li>
              <li id="10" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/meri-aashiqui-5"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/ogNWkLDbmX/gNWkoD9kWm/size_m.webp"
                      alt="Meri Aashiqui"
                      title="Meri Aashiqui"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Meri Aashiqui"
                    title="Meri Aashiqui"
                    className="al t_over"
                    href="/song/meri-aashiqui-5"
                  >
                    {" "}
                    Meri Aashiqui
                  </a>
                </div>
              </li>
              <li id="11" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/main-jis-din-bhulaa-du"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/7rVW1Rbk56/VW1aaQMgWk/size_m.webp"
                      alt="Main Jis Din Bhulaa Du"
                      title="Main Jis Din Bhulaa Du"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Main Jis Din Bhulaa Du"
                    title="Main Jis Din Bhulaa Du"
                    className="al t_over"
                    href="/song/main-jis-din-bhulaa-du"
                  >
                    {" "}
                    Main Jis Din Bhulaa Du
                  </a>
                </div>
              </li>
              <li id="12" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/saiyaan-ji-ft-nushrratt-bharuccha"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/oAJbDlbnL8/JbDEvp7vKn/size_m.webp"
                      alt="Saiyaan Ji (Ft. Nushrratt Bharuccha)"
                      title="Saiyaan Ji (Ft. Nushrratt Bharuccha)"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Saiyaan Ji (Ft. Nushrratt Bharuccha)"
                    title="Saiyaan Ji (Ft. Nushrratt Bharuccha)"
                    className="al t_over"
                    href="/song/saiyaan-ji-ft-nushrratt-bharuccha"
                  >
                    {" "}
                    Saiyaan Ji
                  </a>
                </div>
              </li>
              <li id="13" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/dil-chahte-ho"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/VdNW0JMKo5/dNW0p7O5Wo/size_m.webp"
                      alt="Dil Chahte Ho"
                      title="Dil Chahte Ho"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Dil Chahte Ho"
                    title="Dil Chahte Ho"
                    className="al t_over"
                    href="/song/dil-chahte-ho"
                  >
                    {" "}
                    Dil Chahte Ho
                  </a>
                </div>
              </li>
              <li id="14" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/baarish-ki-jaaye"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/song/Bp1bAynb02/1bAzZJgAK0/size_m_1619031552.webp"
                      alt="Baarish Ki Jaaye"
                      title="Baarish Ki Jaaye"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Baarish Ki Jaaye"
                    title="Baarish Ki Jaaye"
                    className="al t_over"
                    href="/song/baarish-ki-jaaye"
                  >
                    {" "}
                    Baarish Ki Jaaye
                  </a>
                </div>
              </li>
              <li id="15" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/cute-song-1"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/song/4Z9bqo3yQn/9bqNj4XyKy/size_m_1593616645.webp"
                      alt="Cute Song"
                      title="Cute Song"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Cute Song"
                    title="Cute Song"
                    className="al t_over"
                    href="/song/cute-song-1"
                  >
                    {" "}
                    Cute Song
                  </a>
                </div>
              </li>
              <li id="16" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/dil-tod-ke-14"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/81l3Me3rMx/1l3MYe7e3r/size_m.webp"
                      alt="Dil Tod Ke"
                      title="Dil Tod Ke"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Dil Tod Ke"
                    title="Dil Tod Ke"
                    className="al t_over"
                    href="/song/dil-tod-ke-14"
                  >
                    {" "}
                    Dil Tod Ke
                  </a>
                </div>
              </li>
              <li id="17" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/mujhe-kaise-pata-na-chala"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/song/Bp1bAynb02/1bADxownW0/size_m_1543830076.webp"
                      alt="Mujhe Kaise Pata Na Chala"
                      title="Mujhe Kaise Pata Na Chala"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Mujhe Kaise Pata Na Chala"
                    title="Mujhe Kaise Pata Na Chala"
                    className="al t_over"
                    href="/song/mujhe-kaise-pata-na-chala"
                  >
                    {" "}
                    Mujhe Kaise Pata Na Chala
                  </a>
                </div>
              </li>
              <li id="18" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/is-qadar-2"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/4Z9bqZoKyQ/9bqgozd13y/size_m.webp"
                      alt="Is Qadar"
                      title="Is Qadar"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Is Qadar"
                    title="Is Qadar"
                    className="al t_over"
                    href="/song/is-qadar-2"
                  >
                    {" "}
                    Is Qadar
                  </a>
                </div>
              </li>
              <li id="19" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/care-ni-karda"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/song/0wrb4qNKLg/rb4Ny6yX3L/size_m_1603348858.webp"
                      alt="Care Ni Karda"
                      title="Care Ni Karda"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Care Ni Karda"
                    title="Care Ni Karda"
                    className="al t_over"
                    href="/song/care-ni-karda"
                  >
                    {" "}
                    Care Ni Karda
                  </a>
                </div>
              </li>
              <li id="20" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/paani-paani-3"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/DwPKOkBKqV/PKOxQe503q/size_m_1622784272.webp"
                      alt="Paani Paani"
                      title="Paani Paani"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Paani Paani"
                    title="Paani Paani"
                    className="al t_over"
                    href="/song/paani-paani-3"
                  >
                    {" "}
                    Paani Paani
                  </a>
                </div>
              </li>
              <li id="21" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/nayan-2"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/w4MKPgOboj/4MKPmOLx3o/size_m_1607405239.webp"
                      alt="Nayan"
                      title="Nayan"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Nayan"
                    title="Nayan"
                    className="al t_over"
                    href="/song/nayan-2"
                  >
                    {" "}
                    Nayan
                  </a>
                </div>
              </li>
              <li id="22" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/baby-girl-326"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/ZaP374RWDy/aP37eqa6bD/size_m.webp"
                      alt="Baby Girl"
                      title="Baby Girl"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Baby Girl"
                    title="Baby Girl"
                    className="al t_over"
                    href="/song/baby-girl-326"
                  >
                    {" "}
                    Baby Girl
                  </a>
                </div>
              </li>
              <li id="23" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/mann-bharryaa-20-from-shershaah"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/song/7rVW1Rbk56/VW1L7Rxg3k/size_m_1628958702.webp"
                      alt="Mann Bharryaa 2.0"
                      title="Mann Bharryaa 2.0"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Mann Bharryaa 2.0"
                    title="Mann Bharryaa 2.0"
                    className="al t_over"
                    href="/song/mann-bharryaa-20-from-shershaah"
                  >
                    {" "}
                    Mann Bharryaa 2.0
                  </a>
                </div>
              </li>
              <li id="24" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/filhaal2-mohabbat"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/qaLKY623pO/LKY69RVx3p/size_m.webp"
                      alt="Filhaal2 Mohabbat"
                      title="Filhaal2 Mohabbat"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Filhaal2 Mohabbat"
                    title="Filhaal2 Mohabbat"
                    className="al t_over"
                    href="/song/filhaal2-mohabbat"
                  >
                    {" "}
                    Filhaal2 Mohabbat
                  </a>
                </div>
              </li>
              <li id="25" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/nadiyon-paar-let-the-music-play-again-from-roohi"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/song/4Z9bqo3yQn/9bqje5jXKy/size_m_1614769974.webp"
                      alt="Nadiyon Paar (Let the Music Play Again)"
                      title="Nadiyon Paar (Let the Music Play Again)"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Nadiyon Paar (Let the Music Play Again)"
                    title="Nadiyon Paar (Let the Music Play Again)"
                    className="al t_over"
                    href="/song/nadiyon-paar-let-the-music-play-again-from-roohi"
                  >
                    {" "}
                    Nadiyon Paar
                  </a>
                </div>
              </li>
              <li id="26" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/shona-shona-1"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/VdNW0JMKo5/dNW0v1jpKo/size_m.webp"
                      alt="Shona Shona"
                      title="Shona Shona"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Shona Shona"
                    title="Shona Shona"
                    className="al t_over"
                    href="/song/shona-shona-1"
                  >
                    {" "}
                    Shona Shona
                  </a>
                </div>
              </li>
              <li id="27" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/param-sundari"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/2lV3dl13Rg/V3dldLBE3R/size_m.webp"
                      alt="Param Sundari"
                      title="Param Sundari"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Param Sundari"
                    title="Param Sundari"
                    className="al t_over"
                    href="/song/param-sundari"
                  >
                    {" "}
                    Param Sundari
                  </a>
                </div>
              </li>
              <li id="28" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/dil-galti-kar-baitha-hai-feat-mouni-roy"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/koMWQ7BKqL/MWQ7Gr7XKq/size_m.webp"
                      alt="Dil Galti Kar Baitha Hai (Feat. Mouni Roy)"
                      title="Dil Galti Kar Baitha Hai (Feat. Mouni Roy)"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Dil Galti Kar Baitha Hai (Feat. Mouni Roy)"
                    title="Dil Galti Kar Baitha Hai (Feat. Mouni Roy)"
                    className="al t_over"
                    href="/song/dil-galti-kar-baitha-hai-feat-mouni-roy"
                  >
                    {" "}
                    Dil Galti Kar Baitha Hai
                  </a>
                </div>
              </li>
              <li id="29" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/mehendi-wale-haath-feat-sanjana-sanghi"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/D0PKLqr3Gl/PKLq56YR3G/size_m.webp"
                      alt="Mehendi Wale Haath"
                      title="Mehendi Wale Haath"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Mehendi Wale Haath"
                    title="Mehendi Wale Haath"
                    className="al t_over"
                    href="/song/mehendi-wale-haath-feat-sanjana-sanghi"
                  >
                    {" "}
                    Mehendi Wale Haath
                  </a>
                </div>
              </li>
              <li id="30" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/ringtone-39"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/song/ZaP37OR3Dy/P37N49X6KD/size_m_1591870273.webp"
                      alt="Ringtone"
                      title="Ringtone"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Ringtone"
                    title="Ringtone"
                    className="al t_over"
                    href="/song/ringtone-39"
                  >
                    {" "}
                    Ringtone
                  </a>
                </div>
              </li>
              <li id="31" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/meri-zindagi-hai-tu-from-satyameva-jayate-2"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/song/jBr3gybR1m/r3gwPDpd3R/size_m_1635393821.webp"
                      alt="Sakhiyan2.0"
                      title="Meri Zindagi Hai Tu"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Meri Zindagi Hai Tu"
                    title="Meri Zindagi Hai Tu"
                    className="al t_over"
                    href="/song/meri-zindagi-hai-tu-from-satyameva-jayate-2"
                  >
                    {" "}
                    Meri Zindagi Hai Tu
                  </a>
                </div>
              </li>
              <li id="32" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/chhor-denge-feat-nora-fatehi"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/jBr3gybR1m/r3gLL0BNWR/size_m.webp"
                      alt="Sakhiyan2.0"
                      title="Chhor Denge"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Chhor Denge"
                    title="Chhor Denge"
                    className="al t_over"
                    href="/song/chhor-denge-feat-nora-fatehi"
                  >
                    {" "}
                    Chhor Denge
                  </a>
                </div>
              </li>
              <li id="33" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/kabhii-tumhhe"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/song/21GWwR3pkg/GWwBLwrD3p/size_m_1629370808.webp"
                      alt="Sakhiyan2.0"
                      title="Kabhii Tumhhe"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Kabhii Tumhhe"
                    title="Kabhii Tumhhe"
                    className="al t_over"
                    href="/song/kabhii-tumhhe"
                  >
                    {" "}
                    Kabhii Tumhhe
                  </a>
                </div>
              </li>
              <li id="34" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/bheegi-bheegi-24"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/mGjKrP1W6z/GjKrAXe1b6/size_m.webp"
                      alt="Aabaad Barbaad"
                      title="Bheegi-Bheegi"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Bheegi Bheegi"
                    title="Bheegi Bheegi"
                    className="al t_over"
                    href="/song/bheegi-bheegi-24"
                  >
                    {" "}
                    Bheegi Bheegi
                  </a>
                </div>
              </li>
              <li id="35" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/ek-tarfa"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/oAJbDlbnL8/AJbDYQXDKn/size_m.webp"
                      alt="Aabaad Barbaad"
                      title="Ek-Tarfa"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Ek Tarfa"
                    title="Ek Tarfa"
                    className="al t_over"
                    href="/song/ek-tarfa"
                  >
                    {" "}
                    Ek Tarfa
                  </a>
                </div>
              </li>
              <li id="36" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/tera-suit-1"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/Oxd3xP3gVY/d3xzDvwQbg/size_m.webp"
                      alt="Aabaad Barbaad"
                      title="Tera Suit"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Tera Suit"
                    title="Tera Suit"
                    className="al t_over"
                    href="/song/tera-suit-1"
                  >
                    {" "}
                    Tera Suit
                  </a>
                </div>
              </li>
              <li id="37" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/dil-ko-karaar-aaya"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/song/6Zxb2r7b9w/xb2kGyPOK9/size_m_1596276066.webp"
                      alt="Aabaad Barbaad"
                      title="Dil Ko Karaar Aaya"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt='Dil Ko Karaar Aaya (From "Sukoon")'
                    title='Dil Ko Karaar Aaya (From "Sukoon")'
                    className="al t_over"
                    href="/song/dil-ko-karaar-aaya"
                  >
                    {" "}
                    Dil Ko Karaar Aaya
                  </a>
                </div>
              </li>
              <li id="38" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/dil-galti-kar-baitha-hai-feat-mouni-roy"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/koMWQ7BKqL/MWQ7Gr7XKq/size_m.webp"
                      alt="Dil Galti Kar Baitha Hai (Feat. Mouni Roy)"
                      title="Dil Galti Kar Baitha Hai (Feat. Mouni Roy)"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Dil Galti Kar Baitha Hai (Feat. Mouni Roy)"
                    title="Dil Galti Kar Baitha Hai (Feat. Mouni Roy)"
                    className="al t_over"
                    href="/song/dil-galti-kar-baitha-hai-feat-mouni-roy"
                  >
                    {" "}
                    Dil Galti Kar Baitha Hai
                  </a>
                </div>
              </li>
              <li id="39" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/mehendi-wale-haath-feat-sanjana-sanghi"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/D0PKLqr3Gl/PKLq56YR3G/size_m.webp"
                      alt="Mehendi Wale Haath"
                      title="Mehendi Wale Haath"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Mehendi Wale Haath"
                    title="Mehendi Wale Haath"
                    className="al t_over"
                    href="/song/mehendi-wale-haath-feat-sanjana-sanghi"
                  >
                    {" "}
                    Mehendi Wale Haath
                  </a>
                </div>
              </li>
              <li id="40" className="card">
                <a
                  className="img default_bg "
                  aria-label="artwork"
                  href="/song/woh-chaand-kahan-se-laogi"
                >
                  <div className="LazyLoad is-visible">
                    <img
                      className="animate-pulse"
                      src="https://a10.gaanacdn.com/gn_img/albums/YoEWlwa3zX/oEWleEnrbz/size_m.webp"
                      alt="Filhaal2 Mohabbat"
                      title="Woh Chaand Kahaan Se Laaogi"
                    />
                  </div>
                  <span className="play_icon" title="Play" />
                </a>
                <div className="t_wrap">
                  <a
                    alt="Woh Chaand Kahan Se Laogi"
                    title="Woh Chaand Kahan Se Laogi"
                    className="al t_over"
                    href="/song/woh-chaand-kahan-se-laogi"
                  >
                    Woh Chaand
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
};

export default SongCards;
      