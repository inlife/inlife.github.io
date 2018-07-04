import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import config from '../config'
import Footer from '../components/Footer'

export default () => (
    <div>
        <Head>
            <title>{ config.name } - Projects</title>
        </Head>

        <div className='header'>
            <div className='back'>
                <Link href='/'><a><i className='fa fa-angle-left'></i> back</a></Link>
            </div>

            <h1>projects:</h1>
        </div>

        <div className='content animated fadeIn'>
            <div id='projects'>

<ul>
<li><p><strong>librg</strong> <br />
<strong>type:</strong> open-source, team<br />
<strong>year:</strong> 2017-2018 <br />
<strong>link:</strong> <a href="https://github.com/librg/librg"rel="noopener noreferrer" target="_blank">https://github.com/librg/librg</a> <br />
<strong>description:</strong> Pure C99 game networking library for building simple and elegant cross-platform mmo client-server solutions.<br />
<strong>responsibilities:</strong> Development.<br />
<strong>used technologies:</strong> C, nodejs, git</p>
</li>
<li><p><strong>zpl</strong> <br />
<strong>type:</strong> open-source, team<br />
<strong>year:</strong> 2017-2018 <br />
<strong>link:</strong> <a href="https://github.com/zpl-c/zpl"rel="noopener noreferrer" target="_blank">https://github.com/zpl-c/zpl</a> <br />
<strong>description:</strong> A collection of single-file public domain header-only libraries for C and C++.<br />
<strong>responsibilities:</strong> Development.<br />
<strong>used technologies:</strong> C, git</p>
</li>
<li><p><strong>nexrender</strong> <br />
<strong>type:</strong> open-source, personal<br />
<strong>year:</strong> 2016-2018 <br />
<strong>link:</strong> <a href="https://github.com/Inlife/nexrender"rel="noopener noreferrer" target="_blank">https://github.com/Inlife/nexrender</a> <br />
<strong>link:</strong> <a href="https://www.npmjs.com/package/nexrender"rel="noopener noreferrer" target="_blank">https://www.npmjs.com/package/nexrender</a> <br />
<strong>description:</strong> Nexrender is a tool, created to automate creating and rendering adobe after effects video projects. Features: creating network of connected nodes, substitute image/audio assets in video projects, perform data-based injections inside video project on render runtime to render personalized/localized/data-driven dynamic videos, supports multiple simultaneous rendering, and rendering parallelization. This project consists of 3 main components: renderer, api-server (JSON REST) and node api wrapper <br />
<strong>responsibilities:</strong> Development.<br />
<strong>used technologies:</strong> js + es6, node.js, adobe after effects, travis, mocha, chai, istanbul</p>
</li>
<li><p><strong>circle</strong> <br />
<strong>type:</strong> open-source, team<br />
<strong>year:</strong> 2015-2016 <br />
<strong>link:</strong> <a href="https://github.com/Inlife/circle"rel="noopener noreferrer" target="_blank">https://github.com/Inlife/circle</a> <br />
<strong>link:</strong> <a href="https://itunes.apple.com/us/app/apple-store/id1072705595"rel="noopener noreferrer" target="_blank">https://itunes.apple.com/us/app/apple-store/id1072705595</a> <br />
<strong>description:</strong> Circle is a relaxing arcade game. Player should follow shrinking circle with his finger. Difficulty increases over time, exponentially. Game was released in iTunes Store.<br />
<strong>responsibilities:</strong> Idea, basic game design, game code development.<br />
<strong>used technologies:</strong> js, swift, node.js, html, css, git</p>
</li>
<li><p><strong>Juniper Park</strong> <br />
<strong>type:</strong> closed-source, freelance<br />
<strong>year:</strong> 2013-2016 <br />
<strong>link:</strong> <a href="http://juniperpark.com/"rel="noopener noreferrer" target="_blank">http://juniperpark.com/</a> <br />
<strong>description:</strong> Website for advertising company Juniper Park. Showcases numerous adv. campaigns and cases, as well as contains info about company itself.<br />
<strong>responsibilities:</strong> Full frontend code base development. <br />
<strong>used technologies:</strong> php5.4, html5, css3, adobe photoshop, git, symfony2</p>
</li>
<li><p><strong>dressboom.co.uk</strong> <br />
<strong>type:</strong> closed-source, team<br />
<strong>year:</strong> 2015-2016 <br />
<strong>description:</strong> Social network/ecommerce application (iOS) for users that want to get rid of their old/unused clothes in ways of swapping or exchanging. It was an attempt to enter the new market: London, UK. There were  few model differences from previous Ukrainian project (dressboom.com.ua), such as: there were no internal currency and orientation on younger audience. <br />
<strong>responsibilities:</strong> Creating platform architecture, developing JSON REST API service, integration with payment and delivery platforms, setting up platform infrastructure (aws ec2+s3) and balancers. Close collaboration with ios dev. Development of landing with merchant registration and dressboom.api integration. Writing and supporting interactive api documentation resource. <br />
<strong>used technologies:</strong> node.js, php5.5, mongodb, mysql, git, stripe.api, facebook.api, shippo.api, mandrill.api, mailchimp.api, slate</p>
</li>
<li><p><strong>taptap</strong> <br />
<strong>type:</strong> open-source, team<br />
<strong>year:</strong> 2015 <br />
<strong>link:</strong> <a href="https://github.com/Inlife/taptap"rel="noopener noreferrer" target="_blank">https://github.com/Inlife/taptap</a> <br />
<strong>link:</strong> <a href="https://inlife.github.io/taptap/"rel="noopener noreferrer" target="_blank">https://inlife.github.io/taptap/</a> <br />
<strong>description:</strong> Simple logic puzzle web/mobile oriented game <br />
<strong>responsibilities:</strong> Idea, game code development.<br />
<strong>used technologies:</strong> js, node.js, jade, html, css, scss, git</p>
</li>
<li><p><strong>agario.org</strong> <br />
<strong>type:</strong> closed-source, team<br />
<strong>year:</strong> 2015 <br />
<strong>link:</strong> <a href="https://github.com/AntuanKhanna/agario.org"rel="noopener noreferrer" target="_blank">https://github.com/AntuanKhanna/agario.org</a> <br />
<strong>description:</strong> This project consisted of many parts, such as: online game, google chrome browser extension, server game platform, website. It accumulated 500,000 players in 2 weeks from launch. It was based on existing game, and added a lot of new features and optimizations. This project was popular worldwide, and accumulated a lot of feedback. <br />
<strong>responsibilities:</strong> Developing extension, reverse-engineering of existing js game code, integration with parse.api, implementing new game features, integration with amazon s3, creating backend for image processing and sharing, experimentation with new obfuscation algorithms. Taking part in product design, marketing, and user support. <br />
<strong>used technologies:</strong> js, node.js, css3, html5, chrome, chrome.api, parse.api, aws, google.adsense, sketch3</p>
</li>
<li><p><strong>universe-engine</strong> <br />
<strong>type:</strong> closed-source, team<br />
<strong>year:</strong> 2014-2015<br />
<strong>link:</strong> <a href="https://bitbucket.org/Inlife/universe-engine/src"rel="noopener noreferrer" target="_blank">https://bitbucket.org/Inlife/universe-engine</a> <br />
<strong>description:</strong> It was a gamemode/framework for MTA:SA, built from scratch. Inlcuded code-level features: ORM, module-request, caching manager.<br />
<strong>responsibilities:</strong> Development of basic modules and components, such as ORM, dependency management modules as well as some modules itself, caching manager, and creating high-level code interfaces for other team devs. <br />
<strong>used technologies:</strong> lua, sqlite, mysql, git</p>
</li>
<li><p><strong>mta-lua-async</strong> <br />
<strong>type:</strong> open-source, personal<br />
<strong>year:</strong> 2014<br />
<strong>link:</strong> <a href="https://github.com/Inlife/mta-lua-async"rel="noopener noreferrer" target="_blank">https://github.com/Inlife/mta-lua-async</a><br />
<strong>description:</strong> It&#39;s a library for asynchronous parallelization of cycles in lua-mta environment. <br />
<strong>responsibilities:</strong> Developing full project code base, writing documentation. <br />
<strong>used technologies:</strong> lua, git</p>
</li>
<li><p><strong>mimimi.co</strong> <br />
<strong>type:</strong> open-source, closed-source (2014), team<br />
<strong>year:</strong> 2013-2014 <br />
<strong>link:</strong> 2013&#39;s: <a href="https://github.com/mimimico/cake"rel="noopener noreferrer" target="_blank">https://github.com/mimimico/cake</a><br />
<strong>description:</strong> This project was a service/social network, that allowed local craftsman, and people that are enjoying handmaking products and are looking for opportunities to monetize this hobby/work to post their&#39;s creations with photos on the resource. Features: creating of personal pages/stores, comments, likes/recommendations, messaging.<br />
<strong>responsibilities:</strong> Full backend code base development, partial design, and frontend development (2014).<br />
<strong>used technologies:</strong> php5.3-php5.4, apache httpd, mysql, git, ssh, ftp, ProtoEngine, Symfony2, doctrine, composer, twig, less, html5, js, jquery</p>
</li>
<li><p><strong>DruidSoccer Multiplayer</strong> <br />
<strong>type:</strong> open-source, personal<br />
<strong>year:</strong> 2013<br />
<strong>link:</strong> <a href="https://github.com/Inlife/druidsoccer-multiplayer"rel="noopener noreferrer" target="_blank">https://github.com/Inlife/druidsoccer-multiplayer</a><br />
<strong>description:</strong>  It&#39;s a multiplayer remake of the game DruidSoccer that was made by Petri Purho. Features: competitive gamemode with direct ip connection. <br />
<strong>responsibilities:</strong> Developing full project code base. <br />
<strong>used technologies:</strong> c#, unity3d, git</p>
</li>
<li><p><strong>ProtoEngine</strong> <br />
<strong>type:</strong> closed-source, open-source (2013), personal <br />
<strong>year:</strong> 2009-2013 <br />
<strong>link:</strong> <a href="https://github.com/Inlife/ProtoEngine"rel="noopener noreferrer" target="_blank">https://github.com/Inlife/ProtoEngine</a> <br />
<strong>description:</strong> This project was a backend PHP MVC framework. It was used for creation of small projects. Latest versions were inspired by Symfony2 framework. It even had own template language, based on regex, with module-plugin like dependent system and partial caching.<br />
<strong>responsibilities:</strong> Developing whole codebase (frontend &amp;&amp; backend), application architecture oriented on DRY and code reusing, minor php-level performance optimizations<br />
<strong>used technologies:</strong> php5.1-php.5.3, apache httpd, mysql, git, html5, css3, js</p>
</li>
</ul>
            </div>
        </div>

        <Footer />
    </div>
)
