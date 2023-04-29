import { useEffect, useRef } from 'react'
import './App.css'
import { Card } from './components/Card'

function App() {
  const cursor = useRef(null)
  const cursorinner = useRef(null)

  const onMouseMove = (e) => {
    cursor.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    cursorinner.current.style.left = e.clientX + 'px'
    cursorinner.current.style.top = e.clientY + 'px'
  }

  const onMouseDown = () => {
    cursor.current.classList.add('click')
    cursorinner.current.classList.add('cursorinnerhover')
  }

  const onMouseUp = () => {
    cursor.current.classList.remove('click')
    cursorinner.current.classList.remove('cursorinnerhover')
  }

  useEffect(()=>{
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
    }
  })


  return (
    <>
    {/* <video autoplay muted loop id="myVideo">
      <source src="videoplayback.mp4" type="video/mp4"/>
    </video> */}
    <header>
      <img src="logo.svg" className='logo' alt='logo' />
      <img src="ecv.svg" className='logo' alt='ecv logo'/>
    </header>
    <div className="parent">
        <div className="card div2">
          <h4 className='scroll-text' data-text = "ECV • M2 dev web • Note d'intention • Mouvement • Cosmox • ">
            <span>ECV • M2 dev web • Note d'intention • Mouvement • Cosmox • ECV • M2 dev web • Note d'intention • Mouvement • Cosmox •</span>
          </h4>
        </div>
      <Card
        className="about"
        info={
          <>
            <div className='about__info'>
              <div>
                <h1>Ramus ASSOGBA</h1>
                <p>Etudiant en master 2 de développement web</p>
              </div>
              <img src="me.jpg" className='me' alt='avatar'/>
            </div>

          </>}
          content={
            <>
              <h2>Qui suis-je</h2>
              <p>Je m'appelle <span>Ramus ASSOGBA</span>, étudiant en <span>Master 2 de développement web</span> et un développeur JavaScript passionné qui aime créer des applications Web performantes
                et des expériences utilisateur exceptionnelles. J'aime apprendre de nouvelles choses et je suis toujours à la recherche de technologies innovantes pour apporter
                des solutions personnalisées à mes clients. Je suis aussi un grand fan de l'open-source et j'adore collaborer avec d'autres développeurs pour créer des projets
                incroyables. Voici quelques technologies avec lesquelles j'ai récemment travaillé :
              </p>
              <ul className='techno-list'>
                <li>PWA</li>
                <li>TypeScript</li>
                <li>JavaScript (ES6+)</li>
                <li>Node.js</li>
                <li>React</li>
                <li>React Native</li>
                <li>Vue Js</li>
              </ul>
              <h2>Pourquoi ?</h2>
              <p>
                Pour valider nos compétences de concepteur/développeur web, il nous a été demandé de présenter
                une stratégie à travers les différentes phases de conception, de prototypage et de développement basée sur une recherche approfondie,
                personnelle et concrète avec comme objectif de produire individuellement <span>une application mobile </span> 
                dont la thématique est le <span> MOUVEMENT</span>.
              </p>
            </>
          }
      />
        
        <Card
        className="div3"
        info={
        <>
          <h1>Intention</h1>
          <p>Quelle musique écoutons-nous ?</p>
          </>}
          content={
            <>
              <h2>Quelle musique écoutons-nous ?</h2>
              <p><span>La musique</span> est un élément fondamental de notre culture et, pour chacun d'entre nous, est souvent <span>influencée</span> par notre environnement social,
                nos amis et notre famille. Nous découvrons de nouvelles choses musicales grâce à nos expériences et notre vécu.
                L'ère numérique et les réseaux sociaux ont rendu la musique du monde entier plus accessible que jamais.
                Cette accessibilité soulève tout de même une<span> question importante </span>: sommes-nous encore capables de découvrir de la musique de manière
                autonome ou <span>nos choix musicaux, sont-ils dirigés par les algorithmes</span> des plateformes de streaming ? <br/> Il est essentiel de
                réfléchir à cela afin de garantir notre liberté de choix et la diversité culturelle.
              </p>
              
              <p>
                En outre, l'accessibilité accrue à la musique grâce à ces plateformes a également conduit à la création d'une culture de la<span> playlist</span>.
                Les auditeurs sont encouragés à écouter des listes de lecture <span>recommandées</span> en fonction de leurs goûts musicaux, plutôt que d'explorer de manière
                <span> autonome de nouveaux artistes et genres</span>. Bien que les listes de lecture puissent être pratiques pour les auditeurs pressés, cela peut également
                avoir un effet néfaste sur la diversité musicale en limitant leur exposition à de nouvelles formes de musique et en favorisant la musique déjà populaire.
                C'est pourquoi il est essentiel de trouver un équilibre entre la commodité des listes de lecture et l'exploration autonome de la musique pour <span>préserver
                la diversité culturelle.</span>
              </p>
            </>
          }
        />
        <Card className="div4"
          info={<>
            <h1>Constat</h1>
            <p>Comment favoriser la découverte musicale sans l'influence de nos préférences d'écoute ?</p>
          </>}
          content={
            <>
              <h2>Les plateformes d'écoutes</h2>
              <p>Les <span>algorithmes</span> utilisés par les plateformes de streaming de musique sont souvent conçus pour <span>suggérer des chansons similaires</span> à celles que l'utilisateur
                a déjà écoutées. Cela signifie que les auditeurs sont <span>enfermés</span> dans des habitudes d'écoute basées sur leur <span>environnement socio-culturel</span> et leurs
                préférences musicales existantes. Les algorithmes tendent ainsi à promouvoir la musique populaire et à <span>décourager</span> les auditeurs <span>d'explorer </span>
                de nouveaux genres et artistes émergents.<br />
                De ce fait, les auditeurs peuvent passer à côté de la richesse et de la <span>diversité de la musique du monde</span>,
                qui est pourtant plus accessible que jamais grâce à la technologie numérique.<br/>
                C'est pourquoi il est important de prendre conscience de l'influence
                des algorithmes sur nos choix musicaux et de faire un effort pour <span>sortir de notre zone de confort et découvrir de nouvelles formes de musique.</span>
              </p>
              <h2>En chiffre</h2>
              <p>Il est intéressant de noter que <span>la musique du monde</span> représente une petite partie de la musique disponible sur les plateformes de streaming, malgré l'accessibilité
                croissante offerte par la technologie numérique. Selon une étude récente, <span>environ 33&nbsp;% des pays</span> du monde ont une présence musicale sur ces plateformes. Cela signifie
                que la musique de nombreux pays n'est pas encore représentée sur les plateformes de streaming, ce qui limite l'accessibilité à la diversité culturelle musicale.
              </p>
              <p>De plus, il est alarmant de constater que même lorsque les musiques sont disponibles sur les plateformes, <span>la plupart des auditeurs ne les écoutent pas</span>. Selon la même étude,
                environ <span>50&nbsp;%</span> de la musique disponible n'est pas du tout écoutée. Cela suggère que les auditeurs se concentrent sur un petit nombre d'artistes et de genres de musique, ce qui
                peut contribuer à une perte de diversité musicale.
              </p>
              <p>Il est également important de noter que la situation est similaire en <span>France</span>, où seulement <span>3&nbsp;% des genres de musique</span> sont effectivement écoutés. Cela montre un manque de diversité dans
                les habitudes d'écoute de la population française, qui peut être dû à une multitude de facteurs tels que l'influence sociale, les habitudes d'écoute préexistantes et les algorithmes des
                plateformes de streaming.</p>
              <p>Ces constats soulèvent la question de savoir : <br /><br /></p>
              <h3><span>COMMENT FAVORISER LA DÉCOUVERTE MUSICALE SANS L'INFLUENCE DE NOS PRÉFÉRENCES D'ÉCOUTES ?</span></h3>
            </>
          }
        />
        <Card className="div5"
          info={
          <>
            <h1>Cosmox</h1>
            <p>Une application de découverte de musique basée sur une approche différente.</p>
            </>}
          content={
            <>
              <p><span>Cosmox</span> est une application de découverte de musique basée sur une approche <span>différente</span> de celle des <span>algorithmes
              traditionnelle </span> des plateformes de musique. Cette application se base sur la <span>découverte aveugle et par suppression</span> de musique avec
                l'accompagnement d'une <span>intelligence artificielle</span> qui apprend à connaître les préférences de l'utilisateur en
                matière de musique et à lui faire découvrir de la musique qu'il aimerait probablement, mais qu'il ne
                connaîtrait certainement pas à cause de son environnement socio-culturel.
              </p>
              <p><span>Cosmox</span> fonctionne en proposant une sélection aléatoire de chansons de différents genres et artistes, sans prendre en compte les <span>préférences
                musicales préexistantes</span> de l'utilisateur. L'IA apprend ensuite à connaître les chansons que l'utilisateur a aimées et celles qu'il a ignorées ou rejetées.
                Au fil du temps, l'IA est en mesure de proposer des chansons qui correspondent davantage aux goûts musicaux de l'utilisateur, tout en proposant toujours
                des genres et des artistes différents.
              </p>
              <p>Cette application permet à l'utilisateur de <span>découvrir de nouveaux genres et artistes</span> musicaux qu'il n'aurait peut-être jamais découverts autrement. Cosmox
                inclut également des informations sur les artistes, <span>les cultures et les histoires</span> derrière la musique pour aider à élargir la compréhension de l'utilisateur
                de la musique.
              </p>
              <p>En utilisant Cosmox, les utilisateurs peuvent sortir de leur <span>zone de confort musicale</span>, élargir leur horizon et découvrir la richesse de la musique du monde.
                Cette application encourage <span>la diversité et l'accessibilité de la musique</span> en offrant une alternative intéressante aux algorithmes de plateformes de musique traditionnelle.
              </p>
            </>
          }
        />
        <Card className="div6"
          info={
          <div className='tech'>
            <div>
              <h1>Identité</h1>
              <div className='identity'>
                <img src='LogoCosmox.png' alt='logo Cosmox' />
                <img src='CosmoxAvatar.svg' alt='Avatar Cosmox'/>
                <div className='color primary'></div>
                <div className='color dark'></div>
              </div>
            </div>
            <div>
              <h1>Technique</h1>
              <div className='technique'>
              <img src='react.svg' alt='logo React' />
              <img src='node.svg' alt='logo NodeJs' />
              <img src='pwa.svg' alt='logo PWA' />
              <img src='gpt.svg' alt='logo GPT4' />
              <img src='spotify.svg' alt='logo Spotify' />
              </div>
            </div>
          </div>}
          content={
            <>
              <h2>Identité</h2>
              <p>Pour le choix du design de l'application Cosmox, il a été décidé d'utiliser une palette de couleurs basée sur des <span>tons de violet et de noir. </span>
                Ces couleurs apportent une <span>ambiance moderne et sophistiquée</span> qui s'aligne bien avec l'objectif de l'application de fournir des recommandations de <span>musique éclectiques et uniques.</span>
                  <br/>
                La police <span>Urbanist</span> a été sélectionnée pour la typographie, car elle offre un aspect <span>élégant et épuré</span>, tout en étant facile à lire.
                Cela permettra à l'utilisateur de se concentrer sur les recommandations de musique proposées par l'application.
                  <br/>
                Enfin, le choix de l'utilisation du <span>glassomorphisme</span> a été fait pour donner à l'application une apparence <span>moderne et élégante.</span></p>
              <h2>Technique</h2>
              <h3>Front ( React Js, PWA ) <img className='icon' src='react.svg' alt='logo React' /><img className='icon' src='pwa.svg' alt='logo PWA' /></h3>
              <p>
                <span>React</span> est le choix pour le front car il permet de créer des interfaces utilisateur <span>dynamiques et interactives. </span>
                L'utilisation de React permet également une <span>gestion efficace de la complexité</span> de l'interface utilisateur en découpant
                les composants en éléments plus petits et plus faciles à gérer. Cela permet également une plus grande flexibilité dans
                la <span>personnalisation de l'interface utilisateur</span> en fonction des besoins de l'application.
              </p>
              <p>Le choix d'utiliser une <span>Progressive Web App (PWA)</span> pour Cosmox a été motivé par plusieurs avantages qu'offre ce type d'application.
                <br/>
                Tout d'abord, les PWA sont beaucoup <span>plus légères et plus rapides</span> à charger que les applications natives, ce qui est particulièrement important pour une application de musique où l'utilisateur doit avoir accès à sa musique rapidement et sans interruption.
                 <br/>
                Ensuite, les PWA sont <span>accessibles sur tous les types de terminaux</span>, qu'il s'agisse d'un ordinateur, d'une tablette ou d'un smartphone, ce qui permet à l'application d'être facilement accessible à tous les utilisateurs.
                 <br/>
                De plus, les PWA sont capables de <span>fonctionner hors-ligne</span>, offrant ainsi une expérience utilisateur ininterrompue même en cas de perte de connexion internet.</p>
              <h3>Back ( Node.Js ) <img className='icon' src='node.svg' alt='logo NodeJs' /></h3>
              <p><span>Node.js</span>, quant à lui, est un choix évident pour le back-end, car il est particulièrement adapté aux applications en temps réel
                et aux applications qui nécessitent une communication en <span>temps réel</span> entre le serveur et le client.</p>
              <h3>Intelligence artificielle ( GPT4 ) <img className='icon' src='gpt.svg' alt='logo GPT4' /></h3>
              <p>
                Le choix d'un <span>modèle GPT-4</span> pour l'IA est justifié par sa capacité à <span>apprendre et à comprendre</span> les préférences musicales de l'utilisateur.
                En utilisant un modèle de ce type, Cosmox sera en mesure de <span>s'adapter rapidement</span> aux goûts de l'utilisateur et de <span>proposer des
                recommandations</span> plus pertinentes et personnalisées au fil du temps.
              </p>
              <h3>API ( Spotify ) <img className='icon' src='spotify.svg' alt='logo Spotify' /></h3>
              <p>L'utilisation de l'API de <span>Spotify</span> permet de bénéficier d'un grand nombre d'informations sur les chansons,
                les artistes et les albums, ce qui peut aider à <span>améliorer les recommandations</span> de l'application en utilisant des
                critères tels que le genre, le tempo et la popularité.
              </p>
            </>
          }
        />
        <Card className="div7"
          info={
            <>
              <h1>Mouvement</h1>
              <p>Comment cosmox s'inscrit dans le mouvement ?</p>
            </>
          }
          content={
            <>
              <h2>Le mouvement</h2>
              <p>Cosmox s'inscrit dans un <span>mouvement</span> plus large qui vise à sortir de la bulle
                dans laquelle nous enferment les <span>algorithmes addictifs</span>. Ce mouvement, de plus en plus fort après la période du <i>Covid19</i>,
                encourage à sortir de sa zone de confort et à <span>découvrir</span> de nouveaux horizons culturels, artistiques
                ou simplement sociaux. Avec Cosmox, nous souhaitons donner à nos utilisateurs la possibilité de sortir
                de leur <span>"bulle musicale"</span> habituelle et de découvrir de nouvelles musiques et genres musicaux du monde entier.
              </p>
              <p>
                Les <span>choix graphiques</span> de Cosmox renforcent cette idée de découverte et d'exploration.
                Avec l'utilisation de <span>l'espace et des étoiles</span> dans l'interface,
                nous souhaitons donner à nos utilisateurs une sensation de <span>voyage et d'ouverture</span> vers l'inconnu.
                L'<span>espace</span> est un symbole fort de l'infini et de l'inexploré, et en l'utilisant dans l'application,
                nous voulons inciter nos utilisateurs à sortir de leur zone de confort et à découvrir de nouveaux horizons musicaux.<br/>
                De plus, la représentation des <span><i>"stars"</i></span> par des <span>étoiles</span> rajoute à cette dimension tout son sens.
              </p>
              <h2>Conclusion</h2>
              <p>Ainsi, <span>Cosmox</span> s'inscrit dans un <span>mouvement mondial </span>qui encourage la <span>découverte et l'exploration</span>,
                en sortant de la bulle dans laquelle les <span>algorithmes addictifs</span> nous enferment. Les choix graphiques
                de l'application reflètent cette idée de <span>voyage et d'exploration</span>, pour donner à nos utilisateurs une
                <span> expérience unique et enrichissante</span>.</p>
            </>
          }
        />
      </div>
      <div>
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>
      <div className="cursor" ref={cursor}></div>
      <div className="cursor2" ref={cursorinner}></div>
    </>
  )
}

export default App
