function TimelineRow({data, year, options, figures}){
    const [leftText, centerText, rightText] = data;

    var titleSize = options == null || !("titleSize" in options) ? "med" : options.titleSize;

    const sizes = {
        "small":"18px",
        "med":"24px",
        "large":"32px",
    };

    return <div font={options["fontFamily"]} textColor={options["textColor"]} bgImage={options["bgImage"]} bgColor={options["bgColor"]} className="timeline-row" style={{margin:"auto", textAlign:"center"}}>
        {options != null && "periodTitle" in options && titleSize == "large" && <div style={{position: "absolute", left:"50%", height: 0, width: 0, scale:"0.5"}} className="shadow"></div>}
        {options != null && "periodTitle" in options && <p style={{textTransform:"uppercase", marginBottom:"32px", fontSize:sizes[titleSize]}}>{options.periodTitle}</p>}
        {year && <div style={{zIndex:"100", backgroundColor:"#B0B7B550", borderRadius:"8px", display:"inline", padding:"8px 16px"}}>{year.replace("--", "–").replaceAll("ekr", "eKr")}</div>}
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", justifyContent:"space-evenly", alignItems:"center"}}>
            {Array.isArray(leftText) ? <ul style={{display:"inline-block", width:"fit-content", margin:"32px auto", fontSize:"20px", zIndex:"100"}}>{leftText.map((e)=> e.length > 0 ? e.startsWith("TITLE") ? <p style={{color: "grey", textTransform:"uppercase"}}>{e.replace("TITLE", "")}</p> : <li style={{textAlign:"start"}} key={e}>{e.replaceAll("--", " – ")}</li> : <br />)}</ul> : <p style={{fontSize:"20px", zIndex:"100"}}>{leftText}</p>}
            
            {Array.isArray(centerText) ? <ul style={{display:"inline-block", width:"fit-content", margin:"32px auto", fontSize: "24px", zIndex:"100"}}>{centerText.map((e)=> e.length <= 0 ? <br /> : <li style={{textAlign:"start", marginLeft: e.startsWith("SUB") ? "12px" : "0", fontSize: e.startsWith("SUB") ? "0.8em" : "inherit", color: e.startsWith("SUB") ? "grey" : "inherit"}} key={e}>{e.replace("SUB", "").replaceAll("--", "–")}</li>)}</ul> : <p style={{fontSize:"24px", zIndex:"100"}}>{centerText}</p>}

            {Array.isArray(rightText) ? <ul style={{display:"inline-block", width:"fit-content", margin:"32px auto", fontSize:"20px", zIndex:"100"}}>{rightText.map((e)=> e.length > 0 ? e.startsWith("TITLE") ? <p style={{color: "grey", textTransform:"uppercase"}}>{e.replace("TITLE", "")}</p> : <li style={{textAlign:"start"}} key={e}>{e.replaceAll("--", " – ")}</li> : <br />)}</ul> : <p style={{fontSize:"20px", zIndex:"100"}}>{rightText}</p>}
        </div>
        {figures != null && <div style={{zIndex:"-1000", display:"flex", justifyContent:"center", gap:"20%", scale: figures.length == 4 ? "0.8" : "1" }}>{figures}</div> }
        <div style={{height:"32px"}}></div>
    </div>;
}


// Data - {img:, title:, author:, year:,}
function ArtImage({data}){
    const img = data.img;
    const randomNumber = -13 + Math.round(Math.random()*26);
    const randomNumber2 = -50 + Math.round(Math.random()*100);

    return <div>
        <figure className="art-image fadeup" style={{zIndex:"-1000", translate: "0 "+ randomNumber2+"px", maxWidth:"300px", display:"inline-block", margin:"auto", rotate:randomNumber+"deg", textAlign:"start"}}>
            <img style={{maxHeight:"200px", borderRadius:"4px", maxWidth:"300px", textAlign:"left"}} src={img} alt={data.title} />
            <figcaption style={{textAlign:"start"}}>{data.author} {data.year != null && "("+data.year.replace("--", " – ").replaceAll("ekr", "eKr")+")"} {data.title != null && data.title}</figcaption>
        </figure>
    </div>;
}

const figures = {
    "cave1":<ArtImage data={{author:"Lubang Jerji Saleh, Borneo", year:"40 000 eKr", title:"Vanim kujutav koopamaal", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Lubang_Jeriji_Sal%C3%A9h_cave_painting_of_Bull.jpg/1200px-Lubang_Jeriji_Sal%C3%A9h_cave_painting_of_Bull.jpg"}} />,
    "cave2":<ArtImage data={{author:"Santa Cruz", year:"7300--700eKr", title:"Käte koobas", img:"https://www.researchgate.net/publication/342500834/figure/fig1/AS:907045184237569@1593267832568/Cueva-de-las-Manos-Cave-of-the-Hands-Santa-Cruz-Argentina-approx-7-300-BCE-Photo.png"}} />,

    "lascaux":<ArtImage data={{author:"Prantsusmaa", year:"ca 15 000 ekr", title:"Lascaux koopamaalingud", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Lascaux_painting.jpg/220px-Lascaux_painting.jpg"}} />,
    "willendorf":<ArtImage data={{author:"Willendorf, Austria", year:"30 000 -- 25 000 ekr", title:"Willendorfi Veenus", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Venus_von_Willendorf_01.jpg/220px-Venus_von_Willendorf_01.jpg"}} />,

    "cogul":<ArtImage data={{author:"Roca del Moros, Hispaania", year:null, title:"Coguli tants", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/064_Pintures_de_la_cova_dels_Moros%2C_exposici%C3%B3_al_Museu_de_Gav%C3%A0.JPG/260px-064_Pintures_de_la_cova_dels_Moros%2C_exposici%C3%B3_al_Museu_de_Gav%C3%A0.JPG"}} />,
    "catalhöyük":<ArtImage data={{author:"Çatalhöyüki linn", year:null, title:null, img:"https://cdn.sci.news/images/enlarge/image_1681_1e-Catalhoyuk.jpg"}} />,

    "rudston":<ArtImage data={{author:"Rudstoni monoliit, menhir", year:"GB kõrgeim menhir", title:null, img:"https://upload.wikimedia.org/wikipedia/commons/f/f9/RudstonMonolith%28StephenHorncastle%29Apr2006.jpg"}} />,
    "stonehenge":<ArtImage data={{author:"Stonehenge (kromlehh)", year:"ca 3500 ekr", title:null, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Stonehenge_Total.jpg/300px-Stonehenge_Total.jpg"}} />,
    "poulnabrone":<ArtImage data={{author:"Poulnabrone dolmen", year:"ca 3500 ekr", title:null, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Macro%2C_Liquid_drop_on_Feather%2C_70-300mm-Coupler_%26_reverse_Lens-213.jpg/1280px-Macro%2C_Liquid_drop_on_Feather%2C_70-300mm-Coupler_%26_reverse_Lens-213.jpg"}} />,

    "lamassu":<ArtImage data={{author:"Assüüria", year:"u 3000 eKr", title:"Lamassu", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Human_headed_winged_bull_facing.jpg/220px-Human_headed_winged_bull_facing.jpg"}} />,
    "uristandart":<ArtImage data={{author:"Sumeri riik", year:"2600 eKr", title:"Uri standart", img:"https://www.worldhistory.org/img/r/p/750x750/501.jpg?v=1599280204"}} />,
    "istar":<ArtImage data={{author:"Babülon", year:"575 eKr", title:"Ištari värav", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Pergamon_Museum_Berlin_2007yy.jpg/220px-Pergamon_Museum_Berlin_2007yy.jpg"}} />,
    "hammurapi":<ArtImage data={{author:"Vana-Babüloonia", year:"1800 eKr", title:"Hammurapi seaduste steel", img:"https://study.com/cimages/multimages/16/Code_of_Hammurabi_replica_stele_REM.JPG"}} />,
    
    "giza":<ArtImage data={{author:"Giza, Egitpus", year:"2500 eKr", title:"Giza püramiidid", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pyramids_of_the_Giza_Necropolis.jpg/300px-Pyramids_of_the_Giza_Necropolis.jpg"}} />,
    "luxor":<ArtImage data={{author:"Luxor, Egitpus", year:"1400 eKr", title:"Luxori tempel", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Templo_de_Luxor%2C_Luxor%2C_Egipto%2C_2022-04-01%2C_DD_01.jpg/250px-Templo_de_Luxor%2C_Luxor%2C_Egipto%2C_2022-04-01%2C_DD_01.jpg"}} />,
    "narmer":<ArtImage data={{author:"Nekhen, Egitpus", year:"3200 -- 3000 eKr", title:"Narmeri palett", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Narmer_Palette.jpg/300px-Narmer_Palette.jpg"}} />,
    
    "kuklaad":<ArtImage data={{author:"Küklaadi naisskulptuur", year:"u 2500 eKr", title:null, img:"https://cycladic.gr/wp-content/uploads/2023/06/CYCLADIC_template_banner_1920x1080.jpg"}} />,
    "harjahuppamine":<ArtImage data={{author:"Kreeta", year:"1450 eKr", title:"Härja hüppamine", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Knossos_Bull-Leaping_Fresco.jpg/220px-Knossos_Bull-Leaping_Fresco.jpg"}} />,
    "agamemnon":<ArtImage data={{author:"Mükeene", year:"u 1500 eKr", title:"Agamemnoni mask", img:"https://upload.wikimedia.org/wikipedia/commons/c/c8/MaskOfAgamemnon.jpg"}} />,

    "akropol":<ArtImage data={{author:"Ateena", year:"440 eKr", title:"Parthenoni tempel Akropolil", img:"https://annaabi.ee/mpic.php?inside=116297/Backup-4_1.jpg"}} />,
    "kettaheitja":<ArtImage data={{author:"Myron", year:"u 450 eKr", title:"Kettaheitja", img:"https://maalid.weebly.com/uploads/4/3/1/2/43125675/5897419.png"}} />,
    "laokoon":<ArtImage data={{author:"Rhodose skulptorid", year:"200 -- 70 eKr", title:"Laokooni grupp", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuEzxDCZplRz3zVn9bqCNSFnBtc80xG1dwffEUXfCwog&s"}} />,


    "tumulus":<ArtImage data={{author:"Etruuria", year:"u 500 eKr", title:"Tumulused", img:"https://socks-studio.com/img/blog/Etruscan-tumuli-13.jpg"}} />,
    "abikaasad":<ArtImage data={{author:"Abikaasade sarkofaag", year:"530 -- 510 eKr", title:null, img:"https://time.graphics/uploadedFiles/500/e5/06/e506efb2cf23eaa5d604a4a5ee50be4c.png"}} />,

    "panteon":<ArtImage data={{author:"Panteon", year:"u 200 pKr", title:null, img:"https://img1.advisor.travel/1200x630px-Pantheon_Rome_20.jpg"}} />,
    "aurelius":<ArtImage data={{author:"Marcus Aureliuse ratsamonument", year:"175 pKr", title:null, img:"https://kunstiabi.weebly.com/uploads/1/0/1/6/10161718/2655201_orig.jpg"}} />,
    "diatreet":<ArtImage data={{author:"Diatreet", year:"4. saj", title:null, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/2329_-_Milano_-_Museo_archeologico_-_Diatreta_Trivulzio_-_Foto_Giovanni_Dall%27Orto%2C_30-Oct-2008.jpg/640px-2329_-_Milano_-_Museo_archeologico_-_Diatreta_Trivulzio_-_Foto_Giovanni_Dall%27Orto%2C_30-Oct-2008.jpg"}} />,

    "bassus":<ArtImage data={{author:"Julius Bassuse sarkofaag", year:"359", title:null, img:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Tesoro_di_san_pietro%2C_sarcofago_di_giunio_basso.JPG"}} />,
    "heakarjane":<ArtImage data={{author:"Hea Karjane", year:"3. saj", title:null, img:"https://kunstiajalugujne.weebly.com/uploads/2/3/8/3/23831424/107961338.jpg"}} />,
    "maggiore":<ArtImage data={{author:"Rooma", year:"5. saj", title:"Santa Maria Maggiore basiilika", img:"https://romesite.com/images/basilica_santa_maria_maggiore.jpg"}} />,

    "theodorich":<ArtImage data={{author:"Theodorichi mausoleum", year:"520", title:null, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mausoleum_of_Theodoric_%28Ravenna%29_-_Exterior.jpg/1200px-Mausoleum_of_Theodoric_%28Ravenna%29_-_Exterior.jpg"}} />,
    "kells":<ArtImage data={{author:"Kellsi raamat", year:"ca 800", title:null, img:"https://cdn.britannica.com/75/136775-050-5286A3E7/depiction-letters-chi-name-rho-Greek-Christ-c-800-AD.jpg"}} />,
    "aachen":<ArtImage data={{author:"Aacheni lossi kabel", year:"792--805", title:null, img:"https://upload.wikimedia.org/wikipedia/commons/3/37/Aix_dom_int_vue_cote.jpg"}} />,

    "hagia":<ArtImage data={{author:"Istanbul", year:"537", title:"Hagia Sophia", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/800px-Hagia_Sophia_Mars_2013.jpg"}} />,
    "justinianus":<ArtImage data={{author:"Ravenna", year:"6. saj", title:"Mosaiik Justinianuse õukonnast", img:"https://www.metmuseum.org/-/media/images/exhibitions/2012/byzantium-and-islam/blog/sanvitale1.jpg"}} />,
    "sanvitale":<ArtImage data={{author:"Ravenna", year:"6. saj", title:"San Vitale kirik", img:"https://upload.wikimedia.org/wikipedia/commons/7/70/Basilica_di_San_Vitale.jpg"}} />,

    "kirikutüübid":<ArtImage data={{author:"Romaani kirikutüübid: 1. Saalkirik, 2. Kodakirik, 3. Basiilika", year:null, title:null, img:"https://i.ibb.co/Qn8vjJ2/Screenshot-2024-06-01-135917.png"}} />,
    "speyer":<ArtImage data={{author:"Speyer", year:"11. saj", title:"Speyeri toomkirik", img:"https://cdn.britannica.com/42/179842-138-E6D272C1/Overview-Speyer-Cathedral-Germany.jpg"}} />,
    "bayeux":<ArtImage data={{author:"Bayeux", year:"11. saj lõpp", title:"Bayeux' vaip", img:"https://www.imelineajalugu.ee/wp-content/uploads/2024/11/vaip-600x400-1.jpg"}} />,
    "vezelay":<ArtImage data={{author:"Vezelay", year:"12. saj", title:"St Madelaine'i katedraal", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Vezelay-7776-Bearbeitet.jpg/1200px-Vezelay-7776-Bearbeitet.jpg"}} />,

    "stdenis":<ArtImage data={{author:"Saint-Denis", year:"13. saj", title:"Saint Denis' katedraal", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Saint-Denis_-_Fa%C3%A7ade.jpg/1200px-Saint-Denis_-_Fa%C3%A7ade.jpg"}} />,
    "notredame":<ArtImage data={{author:"Pariis", year:"12.--13. saj", title:"Notre Dame de Paris", img:"https://www.thetrainline.com/cms/media/4030/europe_france_paris_notre-dame.jpg?mode=crop&width=800&height=800&quality=70"}} />,
    "stchapelle":<ArtImage data={{author:"Pariis", year:"13. saj", title:"Sainte Chapelle' kabel", img:"https://cdn.britannica.com/32/242532-050-AB384633/Illuminated-interior-Sainte-Chapelle-Paris-France.jpg"}} />,

    "westminster":<ArtImage data={{author:"London", year:"13.--14.saj", title:"Westminster Abbey", img:"https://images.immediate.co.uk/production/volatile/sites/7/2019/12/GettyImages-541057288-74741cf.jpg?resize=1200%2C630"}} />,
    "köln":<ArtImage data={{author:"Köln", year:"13.--19. saj", title:"Kölni katedraal", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/CologneCathedral-FlightOverCologne001a_.jpg/800px-CologneCathedral-FlightOverCologne001a_.jpg"}} />,
    "berry":<ArtImage data={{author:"Berry", year:"15. saj", title:"Hertsog Berry tundideraamat", img:"https://williammorristile.com/medieval/book_of_hours/book_of_hours_castles.jpg"}} />,
    "doodz":<ArtImage data={{author:"Veneetsia", year:"14.--15. saj", title:"Doodžide palee", img:"https://f10.pmo.ee/hLJVa_Q4YY77ZYhHBbu4sWPZCXU=/685x0/filters:focal(2247x1079:2679x1418):format(webp)/nginx/o/2018/01/04/7461479t1hde91.jpg"}} />,

    "valjala":<ArtImage data={{author:"Saaremaa", year:"13. saj", title:"Valjala kirik", img:"https://register.muinas.ee/content/monument/regular/418766.jpg"}} />,
    "jaani":<ArtImage data={{author:"Tartu", year:"14. saj", title:"Tartu Jaani kirik", img:"https://visitestonia.com/images/3228891/Tartu+St.+John%E2%80%99s+Church-visit+estonia3.jpg"}} />,
    "rode":<ArtImage data={{author:"Niguliste kirik", year:"15. saj", title:"Hermen Rode tiibaltar", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Niguliste_church.altar.jpg/640px-Niguliste_church.altar.jpg"}} />,


    "firenze":<ArtImage data={{author:"F. Brunelleschi", year:"14.--15. saj", title:"Santa Maria del Fiore katedraal", img:"https://www.germalo.ee/admin/upload/Failid/Reis/1509530400/15099253621710.jpg"}} />,
    "botticelli":<ArtImage data={{author:"S. Botticelli", year:"1486", title:"Veenuse sünd", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/400px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg"}} />,
    "ghiberti":<ArtImage data={{author:"L. Ghiberti", year:"15. saj", title:"Paradiisiväravad", img:"https://s-media-cache-ak0.pinimg.com/originals/c2/c1/dd/c2c1ddfa5874970dcbeda894c4a64829.jpg"}} />,

    "monalisa":<ArtImage data={{author:"Leonardo da Vinci", year:"1503--1519", title:"Mona Lisa", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"}} />,
    "rotonda":<ArtImage data={{author:"A. Palladio", year:"16. saj", title:"Villa Rotonda", img:"https://www.worldhistory.org/image/13119/villa-la-rotonda-by-palladio/download/"}} />,
    "michelangelo":<ArtImage data={{author:"Michelangelo", year:"1534--41", title:"Viimne kohtupäev", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Michelangelo_Buonarroti_-_Jugement_dernier.jpg/640px-Michelangelo_Buonarroti_-_Jugement_dernier.jpg"}} />,

    "arnolfini":<ArtImage data={{author:"Jan van Eyck", year:"1434", title:"Abielupaar Arnolfini portree", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/The_Arnolfini_portrait_%281434%29.jpg/1200px-The_Arnolfini_portrait_%281434%29.jpg"}} />,
    "dürer":<ArtImage data={{author:"A. Dürer", year:"1514", title:"Püha Hieronymus", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/D%C3%BCrer-Hieronymus-im-Geh%C3%A4us.jpg/1200px-D%C3%BCrer-Hieronymus-im-Geh%C3%A4us.jpg"}} />,
    "sittow":<ArtImage data={{author:"M. Sittow", year:"1514/15", title:"Taani kuninga Christian II portree", img:"https://upload.wikimedia.org/wikipedia/commons/0/00/Christian_II_-_Sittow.jpg"}} />,


    // "banksy1":<ArtImage data={{author:"Banksy", year:"2005", title:"Peckham Rock", img:"https://d5wt70d4gnm1t.cloudfront.net/media/a-s/artworks/banksy/74284-956146078851/banksy-peckham-rock-800x800.jpg"}} />,

    
};

// const rows = {
   
//     "2":["", "Banksy 'koopamaalingud'", "", {"figures":[figures["banksy1"]]}],
// };

const rows = [
    {
        "time":null,
        "data":["Esiaeg jaguneb kivi-, raua- ja pronksiajaks", ["Hakati tegelema kunstiga", "Täpseid põhjuseid ei teata, võis olla nt mäng või maagilistel eesmärkidel",], ""],
        "options":{"periodTitle":"Esiaeg", "titleSize":"large"},
        "figures":[figures["cave1"], figures["cave2"]],
    },
    {
        "time":"600 000 ekr -- 1800 ekr",
        "data":["", "", ""],
        "options":{"periodTitle":"Kiviaeg", "titleSize":"med"}
    },
    {
        "time":"600 000 ekr -- ca 10 000 ekr",
        "data":["", ["Koopamaalingud:", "SUBChauvet: 30 000 a", "SUBLascaux: 18 000 a", "SUBAltamira: 15 000 a", "Väikesed skulptuurid:", "SUBWillendorfi Veenus: 25 000 eKr", "SUBLõvimees Hohlenstein-Stadel: 40 000 eKr"], ""],
        "options":{"periodTitle":"Paleoliitikum", "titleSize":"small"},
        "figures":[figures["lascaux"], figures["willendorf"]],

    },
    {
        "time":"10 000 ekr -- 5000 ekr",
        "data":[["Hakatakse kasutama keerukamaid tööriistu, nt vibu", "Lähis-Idas kujunevad vanimad asulad (Jeeriko, Çatalhöyük)", "", "TITLEVana-Egiptus", "Alguse saab Vana-Egiptuse eeldünastiline periood (al 5300 eKr)"], ["Kunstis hakatakse kasutama stiliseerimist", "Tekivad inimfiguurid", "Kunst muutub abstraktsemaks"], ""],
        "options":{"periodTitle":"Mesoliitikum", "titleSize":"small"},
        "figures":[ figures["catalhöyük"], figures["cogul"]]

    },
    {
        "time":"5000 ekr -- 1800 ekr",
        "data":[["3000 eKr -- vaarao Menes ühendab Ülem- ja Alam-Egitpuse", "2778 eKr - u 2263 eKr -- Vana Riik", "u 2040 - 1730 eKr -- Keskmine Riik", "", "","Hakkab tekkima põllumajandus", "Sellega seoses ka paikne eluviis ja karjakasvatus", "Tekivad esimesed riigid"], ["Esimesed megaliitilised ehitised: menhirid ja dolmenid (ja kromlehh)", "Nende ehitamise põhjus ei ole täpselt teada, kuid arvatakse religioosset seost"], ""],
        "options":{"periodTitle":"Neoliitikum", "titleSize":"small"},
        "figures":[figures["rudston"], figures["poulnabrone"], figures["stonehenge"]]

    },
    {
        "options":{"periodTitle":"Mesopotaamia", "titleSize":"large", "bgColor":"#B66A50"},
        "time":"3000 ekr -- 539 ekr",
        "data":[["TITLEVana-Egitpus", "1550 - 1075 eKr -- Uus Riik", "1075 - 525 eKr -- Hilis-Egitpus", "TITLEMesopotaamia","3000 eKr - 2340 eKr -- sumerite linnriigid: Ur, Uruk, Kiš", "2340 - 2160 eKr -- Akadi riik", "2065 - 1970 eKr -- semiidistunud sumerid", "1792 - 1595 eKr -- Vana-Babüloonia (Hammurapi, Babülon)", "934 - 609 eKr -- Assüüria (Sargon II; Assur ja Niinive)", "626 - 539 eKr -- Uus- Babüloonia (Ištari värav; Nebukadnetsar II)", "539 eKr -- Kyros II vallutab Babüloni, sellega lõpeb Mesopotaamia aeg", "", "", "Sumerid on esimene kõrgkultuur, algab ajalooline aeg", "Tekib kiri ja riik", "Lisaks leiutatakse ratas, õigussüsteem, kalender (astronoomia/loogia), eepos, potikeder jne", "Tekib linnatsivilisatsioon"], ["Iseloomulik hoonetüüp -- tsikuraat (astmiktempel)", "Asukohast tulenevalt on ülioluline savi, ka kunstis", "SUBSaviskulptuur", "SUBReljeef", "SUBSilinderpitsat", "Olulised on ka fantastiliste olendite kujutamine", "SUBLamassu", "SUBSirruš"], ["Tsivilisatsiooni tekkega tekkis lisaks ka vajadus ühiskonnas korra hoidmiseks", "Sellele pani alguse Vana-Babüloonia valitseja Hammurapi (1792-1750 eKr)", "Õiguse ja õigluse konseptsioon toodi jumalatele mõeldud ideaalidest maa peale, selleks seatigi inimeste tegevusele õiguslikud piirid ehk loodi seadused", "Hammurapi seadused on küll tänapäeva mõistes julmad ja inimõiguste ning tänapäevaste õigusprintsiipide (nt õiguslik võrdsus) vastased, ent oma aja kohta uuenduslikud -- seetõttu loetaksegi õiguse kui süsteemi loojaks just teda", "Samuti tuletatakse Hammurapi seadustest mõningad põhimõtted, mis kehtivad tänagi -- süütuse presumptsioon", "", "Mesopotaamias oli seadusandlik ja kohtuvõim valitseja käes"]],
        "figures":[figures["lamassu"], figures["uristandart"], figures["istar"], figures["hammurapi"]],
    },
    {
        "options":{"periodTitle":"Vana-Egiptus", "titleSize":"large", "bgColor":"#ff9934", "fontFamily":"Papyrus"},
        "time":"6000 eKr -- 30 eKr",
        "data":[["6000 eKr -- eeldünastiline periood", "3000 eKr -- Ülem- ja Alam-Egiptuse ühendamine", "2700-2200 eKr -- Vana Riik (vaaraode kuldaeg, pealinn Memphis)", "2000-1650 eKr -- Keskmine Riik (pealinn Teeba)", "1550-1075 eKr -- Uus Riik (Egiptuse suurriik, preestrite suur võim)", "332 eKr -- Aleksander Suure vallutus tagab võimu Ptolemaiostele", "30 eKr -- sureb Kleopatra, roomlased vallutavad Egiptuse", "", "", "Egitpus oli maaühiskond, samuti väga religioosne", "Vaarao oli jumala tähtsusega", "Jumalatel olid hüüdnimed, nende pärisnimesid ei teatud -- muidu oleks neid šantašeerida saanud", "Egiptuse ühiskonnas oli väga oluline surmajärgne elu (püramiidid, hinge kaalumine jne)", "Ühiskond on suletud ja üsna konservatiivne"], ["Kunst on sümboliterohke", "Kunstil on kindel ülesanne: vaaraode austamine ja hauataguse elu kindlustamine", "Kunst püsib 3000 aastat muutumatu", "SUBmadalreljeef - Narmeri palett", "SUBsüvendreljeef - Ramses III", "Väga olulised on hauaehitised", "SUBmastaba - algelisim hauaehitis", "SUBastmikpüramiid - Džoseri astmikpüramiid (2650 eKr)", "SUBpüramiid - Giza püramiidid (u 2500 eKr)", "Olulised on ka Egiptuse templid (Luxor, Karnak) ja obeliskid nende ees", "Jumalate, vaaraode skulptuurid olid ranged, üldistatud; lihtrahva omad loomulikumad, värvilised", "SUBPinnakunstis olid vaaraod suuremad", "Kasutati Egiptuse poosi", "Egiptlased oskasid teha ka ilusaid ja värvilisi klaasesemeid"], ["Vana-Egiptuses on õigus kehtinud juba eeldünastilisest ajast ehk kohe Egiptuse aja algusest (6000 eKr)", "On teada, et vaaraodel oli absoluutne seadusandlik ja kohtuvõim, siiski pole kahjuks säilinud Egiptuse õiguse alusdokumente", "Vana-Egiptuses oli oluline lepinguõigus -- enam ei olnud lepingud ainult suusõnalised", "Õigussüsteemi aluseks on maat (harmoonia)", "Tolleaegsetele seadustele on omane väga karmid karistused", "Vana-Egitpuses kehtis ilmselt pretsedendiõigus, pretsedendid seati üldiselt juba Vanas Riigis (see näitab ka ühiskondlikku konservatiivsust ja muutumatust, mis tuleb välja ka nt kunstis)", "Õigus oli tihedalt seotud religiooniga - muuhulgas arvati, et seadused on tulnud otse jumalatelt", "Egiptusest pärineb ka väga algeline kohtusüsteem - eri kohtunikel oli erinev pädevus, kõige kõrgem neist oli otseloomulikult vaarao"]],
        "figures":[ figures["giza"], figures["narmer"], figures["luxor"]]
    },

    {
        "options":{"periodTitle":"Kreeta-Mükeene", "titleSize":"large", "bgColor":"#3375bf", "fontFamily":"Greek Freak", "textColor":"white"},
        "time":"3200 -- 800 eKr",
        "data":[["3200-2300 eKr -- küklaadid (minimalistlikud skulptuurid)", "2000-1100 eKr -- Kreeta-Mükeene", "1100-800 eKr -- tume ajajärk (kunstivaene aeg)", "", "Kreetal oli minoiline kultuur, suured ja uhked paleed, polnud kindlustusi", "Mükeenes olid võimsad kindluspaleed, kõrgetasemeline kullasepatöö, rõhk oli võitlemise kujutamisel"], ["Väljapaistva kunstilise tasemega olid küklaadid", "Neilt on säilinud väga ilusad minimalistlikud marmorist peakujud", "Naisi kujutavad küklaadid aktifiguurina, meestel on riided", "Suure tõenäosusega on skulptuurid olnud värvilised (nagu hiljem Vana-Kreekaski)", "", "Kreeta kunsti iseloomustab värviküllus ja elurõõm", "Paleed koosnesid paljudest tubadest, mis olid paigutatud ümber siseõu", "Paleeseinu kaunistasid freskod", "Sammaste läbimõõt oli allpool väiksem", "Kreeta kuulsaim tempel on Knossose tempel (al 1900 eKr)", "Lisaks oli Kreetal oluline skulptuur (Madude jumalannad) ja keraamika", "", "Mükeene oli minoilisest kultuurist palju maha jäänud, võtsid sealt palju üle", "Olulisemad teosed on näiteks Lõvivärav ja Agamemnoni mask"], ["Kreeta saarelt on avastatud Gortyni koodeks, kuulus seadustekogu, mis küll kirjutati peale Kreeta-Mükeene aega, ent arvatakse, et sarnased põhimõtted kehtisid ka varem", "Selle koodeksi järgi oli olulisel kohal justnimelt perekonna- ja omandiõigus (väga tänapäevane)", "Lisaks on teada, et Mükeenes kasutati nö kaheastmelist kohtusüsteemi, kuid mitte tänapäevases mõttes", "Esimene aste oli mõeldud lihtrahvale, teine kuningliku võimu teostamiseks"]],
        "figures":[ figures["kuklaad"], figures["harjahuppamine"], figures["agamemnon"]]
    },
    {
        "options":{"periodTitle":"Vana-Kreeka", "titleSize":"large", "bgColor":"#fefefe", "bgImage":"https://t3.ftcdn.net/jpg/01/45/44/98/360_F_145449835_ffVkRh5FWnDPDy6D01CvEUIvHzpxaHt5.jpg", "fontFamily":"Greek Freak"},
        "time":"1100 -- 30 eKr",
        "data":[["1100-800 eKr -- tume ajajärk", "800-500 eKr -- arhailine periood (linnriigid, kultuuritaseme kasv)", "500-338 eKr -- klassikaline periood (kultuuri kõrgaeg)", "338-30 eKr -- hellenstlik periood (Aleksander Suure impeerium)"], ["Algselt olid Kreekas hooned puidust, kivi hakati kasutama 7. saj eKr (sellepärast varasemaid ei ole säilinud)", "Tähtsaim hoonetüüp on tempel, mida iseloomustab tasakaal ja kord", "SUBtempli ehitamine oli kindlalt reglementeeritud, väga proportsionaalne", "SUBtempel koosneb talastikust, sammastikust ja krepidomast", "Templite ehitamise stiilid (order) olid:", "SUBdooria - kõige algelisem, vanim, sammastel puudub baas", "SUBjoonia - klassikalisest perioodist, sambal on baas ja voluut (TIKi sammas)", "SUBkorintos - hellenismiaegne, väga ilus lopsakas kapiteel, saledad ja kõrged sambad", "Akropolil olid Erechteioni, Nike ja Parthenoni templid", "SUBOluline skulptor ja ehituse ülevaataja oli Pheidias", "Skulptuuris eristati kurost (mees) ja koret (naiskuju), oluline oli arhailine naeratus", "klassikalisel perioodil hakatakse kasutama loomulikumat kujutamist ja kontraposti (Odakandja)", "Hellenismis asendati ideaaliotsing realismipüüdlusega, väljendati tundeid ja oldi dünaamilised (Laokooni grupp)", "Keraamikas mõtlesid kreeklased välja musta- ja punasefiguurilise vaasimaali", ], ["Vana-Kreeka on õigussüsteemi arenemise koha pealt väga murranguline ajajärk", "Ainuüksi õigus kui sõna (justice) tuleb Vana-Kreeka jumalannast Justitia, kelle kuju asub ka Riigikohtus", "Filosoof Platon pakkus oma teoses 'Vabariik' välja esimesed õigusprintsiibid", "Tema hinnagul peab õigus tagama tasakaalu ja harmoonia inimese kui indiviidi ja ühiskonna vahel", "Kuna Vana-Kreekas olid linnriigid, erinesid seadused kohati üsnagi palju (nagu tänapäeval USAs)", "Huvitaval kombel polnud (erinevalt Egiptusest/Mesopotaamiast) Vana-Kreekas eraldi kohtunikke ja advokaate, vaid kaebusi lahendati vandekohtu kaudu, kes ühtlasi ka karistuse määras (muus osas meenutas süsteem pisut tsiviilkohtumenetlust)", "Olulisel kohal olid demokraatia, võrduse ja õigluse põhimõtted"]],
        "figures":[figures["akropol"], figures["laokoon"], figures["kettaheitja"]],
    },

    {
        "options":{"periodTitle":"Vana-Rooma", "titleSize":"large", "bgColor":"#c56151", "fontFamily":"Cinzel"},
        "time":"800 eKr -- 476 pKr",
        "data":[[],[],[]]
    },
    {
        "options":{"periodTitle":"Etruskid", "titleSize":"med", "bgColor":"#c56151", "fontFamily":"Cinzel"},
        "time":"800 eKr -- 300 eKr",
        "data":[["Elasid Itaalias Etruuria maakonnas", "Oli oma keel (etruski keel), tekste palju säilinud pole", "Kultuuri kõrgaeg 7.-6. saj eKr", "Etruskid olid Rooma viimased kuningad", "Etruski kunst ja teadmised kandusid hiljem roomlastele edasi"],["Etruskid uskusid hauatagusesse ellu - selle tõttu ehitati hauaehitisi (tumulus)", "SUBsamuti ehitati surnutele eraldi linnu e nekropole", "SUBtumuluste seinad olid kaetud seinamaalidega", "Skulptuuris on oluline terracotta (põletatud savi) ja metall", "Kuigi neid pole säilinud, olid ka etruskitel kreeklaste omadega sarnanevad templid", "Samuti tegid etruskid keraamikat - vaase nimega bucchero"],["Etruskite õigussüsteemist ei teata väga palju", "Siiski on selle olulisus ilmne, kasvõi seetõttu, et peajumal Tina on ühtlasi õiguse ja õigluse jumal", "Ajalooallikatest nähtub ka, et teatud klanni liikmed (mehed) olid õiguslikult teistest ülimuslikumad, mistõttu kreeklaste võrdsuspõhimõte arvatavasti ertruskitele edasi ei kandunud"]],
        "figures":[figures["tumulus"], figures["abikaasad"]],

    },
    {
        "options":{"periodTitle":"Vana-Rooma", "titleSize":"med", "bgColor":"#c56151", "fontFamily":"Cinzel"},
        "time":"753 eKr -- 476 pKr",
        "data":[["753--509 eKr -- kuningate ajajärk (etruski kuningad, Rooma rajamine)", "509--30 eKr -- vabariigi ajajärk (arhitektuur, tehnoloogia)", "30 eKr--476 pKr -- keisririigi ajajärk (Rooma hiilgeaeg)", "", "", "Legendi kohaselt  asutas Rooma linna 753. aastal eKr Romulus"], ["Roomlaste panus kunstilukku on väga suur", "Olulisemad valdkonnad on arhitektuur, portreekunst ja ajalooline reljeef", "Arhitektuuris võeti kasutusele kaared, võlvid ja kuplid", "SUBsamuti hakati kasutama Rooma betooni ja etruskite toskaana sammast", "SUBroomlased segasid erinevaid stiile väga palju", "Vana-Roomast pärinevad järgmised ehitisetüübid", "SUBakvedukt - veejuhe", "SUBamfiteater - ringikujuline vabaõhuteater", "SUBterm - avalik saun", "SUBtriumfikaar", "SUBjne", "Erinevalt Kreekast ei ole roomlaste jaoks sambad struktuurse tähtsusega, vaid esteetilised", "Rooma templi suurnäiteks on Panteon, mis on üks täiuslikumaid kuppelehitisi maailmas", "Arhitektuuris on veel olulised foorumid ja basiilikad", "Skulptuuri poole pealt vaadates erinesid roomlased tunduvalt kreeklastest", "Skulptuure tehti peamiselt inimestest, mitte jumalatest", "SUBinimene ei ole täiuslik ja roomlased ei varjanudki seda", "Skulptuure tehti marmorist või pronksist (nt Marcus Aureliuse ratsamonument)", "Maalidest on olulised freskod, mis on eriti hästi säilinud Pompeii linnas (Müsteeriumite tuba) ja põrandamosaiik", "Tegeleti ka keraamikaga, loodi näiteks diatreete"], ["Tänapäevast õigussüsteemi on Rooma õigus väga tugevasti mõjutanud", "Juba 449. a eKr loodi Roomas 12 tahvli seadused, mis andsid Rooma kodanikule õigused ja kohustused", "On oluline, et nendega laiendati juba de facto kehtinud õigust ka alamklassile ja panid Rooma õigusele kirjaliku aluse", "Rooma ajast pärineb mh Lex Canuleia (445 eKr), mis sätestab patriitside ja plebeide vahelise abielu lubatavuse, aga ka kuulus Corpus Iuris Civilis", "Roomas võeti esimesena kasutusele töökoht jurist, samuti hakati õigust tõlgendama ja õpetama kui teadust", "Tänapäevalgi kasutuses olev nn common law (nt Suurbritannia, USA)põhineb ajaloolisel Rooma õigusel ja seetõttu kasutatakse seal palju ladinakeelseid termineid", "Seega on Rooma õigusel suur roll ka tänapäevases elus"]],
        "figures":[figures["panteon"], figures["diatreet"], figures["aurelius"]]

    },
    {
        "options":{"periodTitle":"Varakristlik kunst", "titleSize":"large", "bgColor":"#31363F", "fontFamily":"Olde English", "textColor":"white"},
        "time":"313 -- 6. saj",
        "data":[["313 -- Milano edikt", "380 -- Theodosius kuulutab ristiusu ametlikuks religiooniks", "Varakristlik kunst jaotatakse Constantinuse-eelseks ja -järgseks"], ["Esimesed kristliku kunsti näited pärinevad alles II sajandi lõpust", "SUBRistiusk oli kuni 313 keelatud, tegutseti põrandaaluselt", "SUBKristlased olid esialgu üsna vaesed, ei saanud kunsti lubada", "SUBKristlus on sõna-religioon", "Esialgu vormilt antiikkunst, sisult kristlik", "Oluliseks muutuvad sümbolid (ikonograafia teke)", "Sisu on vormist olulisem", "Varakristlikud kunstiliigid:", "SUBseinamaal (algselt katakombides)", "SUBskulptuur -- reljeef, sarkofaag", "SUBmosaiik", "SUBillumineeritud manuskriptid"], ["Kuna varakristlik aeg oli põhiliselt Vana-Rooma ajal, olid õigusteaduslikud uuendused kõik seotud Rooma õigusega", "Siiski saab varakristliku kunsti lõpust, keiser Justinianuse ajast, välja tuua väga olulise uuenduse: Corpus Iuris Civilis (534)", "Sellega ühendas Justinianus nn vana ja uue Rooma õiguse ühtseks tervikuks, seega ei sisaldanud see dokument iseenesest midagi uut, vaid oli pigem varasemate teadmiste korrastamine, ent siiski väga oluline õiguse säilitamiseks."]],
        "figures":[figures["maggiore"], figures["heakarjane"], figures["bassus"]]
    },

    {
        "options":{"periodTitle":"Varakeskaeg Lääne-Euroopas", "titleSize":"large", "bgColor":"#040D12", "textColor":"white", "fontFamily":"Olde English"},
        "time":"5. saj -- 10. saj",
        "data":[["Keskaeg algab Euroopas Vana-Rooma lagunemisega 476. aastal ja kestab 15. sajandini", "Jaguneb vara-, kõrg-, ja hiliskeskajaks", "Varakeskajal (5.--10. saj) kujuneb välja feodaalkord, tekib naturaalmajandus (majanduslikud sidemed katkevad), Euroopa oli killustunud", "Mõjukaimaks jõuks oli ristiusu kirik, kus 1054 toimus kirikulõhe"], ["Kunsti poolest oli varakeskaeg väga mitmekesine ja kirev ajajärk, mida mõjutasid erinevad kultuurid (Lääne-Euroopa kunst sulatusahjus)", "Kunst on religioosse sisuga (kristlik), olulisel kohal illumineeritud manuskriptid", "", "Merovingid (5.--7. saj) -- Frangi riiki valitsenud dünastia", "SUBillumineeritud manuskriptid, raamatukaaned", "SUBsarkofaagid", "SUBarhitektuurinäiteid on säilinud väga vähe", "", "Iirimaa (6. saj)", "SUBpõimornament", "SUBinsular stiilis (miniatuurmaali stiil) illumineeritud manuskriptid (nt Kellsi raamat)", "", "Karolingid (780--900) -- Frangi riik, Karl Suur", "SUBterritooriumilt võrreldav Bütsantsi riigiga, kultuuriliselt nõrk", "SUBsoovisid siduda antiikkunsti bütsantsi omaga", "SUBkarolingide renessanss -- tänu Karl Suurele toimunud suur kultuuriline tõus 8.--9. sajandil"], ["Roomale omane olnud hästireguleeritud õiguskkord kadus keskaja alguseks täielikult", "Killustunud ühiskondades valitses ilmselt pigem tugevama jõud kui mingigi õig(l)usttagav süsteem", "Tõsi, feodaalkorraga tekkis isandal kohustus kaitsta feodaali vaenlase rünnaku eest", "Varakeskaja lõpuks oli taastekkinud põhiline tsiviilõigus ja mõnigi uus põhimõte, nt habeas corpus (kahtlustatava vabaduse võtmist piirav regulatsioon), ent siiski oli õiguslik areng varakeskajal kesine."]],
        "figures":[figures["theodorich"], figures["kells"], figures["aachen"]]
    },

    {
        "options":{"periodTitle":"Bütsantsi kunst", "titleSize":"large", "bgColor":"#702963", "textColor":"white", "fontFamily":"Josefin Sans"},
        "time":"330 -- 1453",
        "data":[["330 -- Constantinus I rajab pealinna Konstantinoopoli", "395 -- Rooma riigi lõhenemine, tekib Bütsants", "476 -- Lääne-Rooma viimane keiser langeb Odoakeri käe läbi", "Õitseaeg 7. sajandil -- Hagia Sophia, läänepoolne pealinn Ravenna", "1453 -- Ottomanid vallutavad Konstantinoopoli"], ["Ajatu kujutusviisi otsingud", "Kujutusviis taas kahemõõtmeline", "Figuurid väga väärikad, jäigad, nagu polekski keha -- ajatud", "Kinnistub ikonograafia reeglistik, olulisel kohal kuld", "Kunstiliigid Bütsantsis:", "SUBarhitektuur -- kirikud, valitsejate paleed", "SUBmosaiik -- väga oluline õitseaeg", "SUBikoon", "SUBreljeef -- ümarplastika puudub", "SUBillumineeritud manuskriptid", "Arhitektuuris on oluline tsentraalehitis, kuppel ja mosaiikkaunistused", "8.--9. sajand -- pilditüli (ikonoklastid vs ikonoduulid)", "SUBikonoklastid (piltide eitajad) -- värv ja puit tühised, ei saa kujutada kõigekõrgemat", "SUBikonoduul (piltide pooldajad) -- kummardamisel ja austamisel tuleb vahet teha", "Bütsantsi mõjud ulatuvad Lääne-Euroopassegi (renessansiaegsed kunstnikud) ja ulatuvad ka ortodoksi kirikusse"], ["Bütsantsi õigus on sisuliselt Rooma õiguse jätk -- see tuletati põhiliselt Justinianuse Corpus Iuris Civilisest", "Erinevus Roomaga on see, et pigem olid õiguslikud tekstid tseremoniaalse tähendusega kui praktilised", "Seega oli õiguse eesmärgiks põhjendada valitseja jumalikkust ja püha rolli", "Kuigi Bütsantsi õigus tänapäevasele õigusruumile erilist mõju avaldanud pole, oli see väga oluline kõrg- ja hiliskeskaegse Euroopa jaoks", "Olulisim õiguslik teos sellest ajast on Leo III välja antud 'Ecloga', üllatavalt õiglane seadustik, millega muuhulgas sätestati põllumeeste õigused, mis on mõjutanud slaavi õigust (põhiliselt Venemaal) tänapäevani"]],
        "figures":[figures["hagia"], figures["sanvitale"], figures["justinianus"]]
    },

    {
        "options":{"periodTitle":"Romaani kunst", "titleSize":"large", "bgColor":"#c4aa85", "fontFamily":"Romanesque"},
        "time":"10.--12. saj",
        "data":[["Euroopas hakkavad taastuma majandussidemed ja linnaelu", "Tänu jõukamale rahvale saab ehitada suuremaid kirikuid ja linnuseid", "Endise Frangi riigi aladel kujunevad välja erinevad rahvused (prantslased, sakslased)", "Kirikul väga tugev võim, kindel hierarhia"], ["Romaani stiil on keskaja esimene kunstistiil", "See on sulam barbarite rahvakunstist, antiigist ja bütsantsist", "SUBsõjakas, tõsine, religioosne", "Kirik keset küla -- katoliku kiriku keskne tähtsus ühiskonnas", "Kirikuhoone on kunstiline tervik -- ühendab endas arhitektuuri, skulptuuri ja maali", "Romaani kunsti juhtiv kunstiliik oli arhitektuur", "Romaani arhitektuuri iseloomustab:", "SUBümarkaar", "SUBraskepärasus", "SUBhorisontaaljoone rõhutamine", "SUBläänefassaadil 2 torni, nelitisetorn", "SUBkaunistatud portaalid", "Kirikud jaotatakse: basiilika (valgmikuga), kodakirik, saalkirik", "Iseloomulik Saksamaale 🇩🇪:", "SUBpalju erineva kõrgusega torne", "SUBraskepärased kindluskirikud", "Iseloomulik Itaaliale 🇮🇹:", "SUBkääbusgaleriid", "SUBpalju dekoori fassaadil", "SUBkampaniilid (eraldiseisvad kirikutornid)", "Iseloomulik Prantsusmaale 🇫🇷:", "SUBskulptuurirohkus", "SUBKristus Pantokraatori reljeef tümpanonil", "Romaani skulptuuri iseloomustab:", "SUBemotsionaalsus, sidemed arhitektuuriga, jutustav sisu, fantaasiarikkus", "Romaani maalikunst on põhiliselt freskod kirikuvõlvidel ja miniatuurmaalid manuskriptides", "SUBpuudub ruumilisus, pinnapealsed, ornamentika"], ["Nagu varasemalt mainitud, oli keskaja Euroopas õigusteaduse seis võrdlemisi nigel", "Kuigi mõned aktid jätkasid Rooma õigusest tuntud tavasid, oli põhiline (st Corpus Iuris Civilis) eurooplastele tundmatu", "Lisaks tugineti sel ajal Bütsantsi õigusele", "Mõnevõrra parem olukord oli Inglismaal, kus pandi alus tavaõigusele (common law), mis omakorda sillutas teed 13. sajandil välja antud Magna Cartale"]],
        "figures":[figures["speyer"], figures["kirikutüübid"], figures["bayeux"], figures["vezelay"]]
    },
    {    
        "options":{"periodTitle":"Gooti kunst", "titleSize":"large", "fontFamily":"Gothic Weiss", "bgColor":"#a8a7a5"},
        "time":"12.--16. saj",
        "data":[["Periodiseering: varagootika (12. saj II pool), kõrggootika (13--14. saj), hilisgootika (15.--16. saj I pool)", "Euroopa juhtriigid on Prantsusmaa, Inglismaa tänu tugevale keskvõimule (Saksamaa killustatud)", "Ajastule on iseloomulik majanduskasv, elavnes kaubandus", "Uued seisused -- käsitöölised, kaupmehed", "Mõttemaailma kese on kristlus, katoliku kiriku hiilgeaeg", "Tekivad ülikoolid"], ["Gooti kunsti iseloomustab valgus ja suund üles", "Endiselt on olulisim valdkond kirikuehitus", "SUBuuenduslikud on tugikaared ja -piilarid", "Kiriku üldmulje on palju kergem ja õhulisem kui varem -- tänu inseneride meisterlikkusele (sõrestikud)", "Gootika on vitraaži hiilgeaeg", "Kirikute läänefassaadil kaks torni, nelitise kohal sale haritorn", "Kesklööv on külglöövidest palju laiem", "Gootikat esines enim ja kõige paremini Prantsusmaal:", "SUBnt Notre-Dame de Paris, Reims, Sainte-Chapelle jne", "Kirikutel palju dekoratiivset materjali", "SUBkolmik-, neliksiir, ehisviil, krabi, fiaal, roosaken"], ["Üldiselt jätkus Euroopas sarnane õiguskord nagu seda oli olnud kogu keskaja jooksul", "Vaidlusi lahendati tihti mitte kohtus, vaid hoopis isanda juures (tsiviilasju), süüteoasjade jaoks oli siiski kaheastmeline kohtusüsteem (edasikaebamiseta, aste sõltus süüteo ulatusest)", "Märgiline oli 1215. aasta, mil anti välja kuningavõimu piirav Magna Carta -- seda peetakse mõnikord ka Inglismaa esimeseks põhiseaduseks (kuigi vormiliselt põhiseadust kui sellist maailmas veel olemas ei olnudki)"]],
        "figures":[figures["stdenis"], figures["notredame"], figures["stchapelle"]]
    },
    {
        "options":{"periodTitle":null, "titleSize":"large", "fontFamily":"Gothic Weiss", "bgColor":"#a8a7a5"},
        "time":"",
        "data":"",
        "figures":[figures["westminster"], figures["köln"], figures["berry"], figures["doodz"]]
    },
    {    
        "options":{"periodTitle":"Gooti kunst Eestis", "titleSize":"med", "fontFamily":"Gothic Weiss", "bgColor":"#a8a7a5"},
        "time":"13.--16. saj",
        "data":[["Eesti aladel toimus 12. saj lõpul & 13. saj algul ristiusustamine -- eeldus gootika tekkeks (tekivad kivikirikud)", "Al 13. saj on Eestis hansalinnad", "Gootika lõppeb 16. saj reformatsiooniga (pildirüüste 1520)"], ["Gooti kunsti ajajärk on üks Eesti kunsti suurimaid õitseaegu", "Eesti gootika on raskepärasem ja tagasihoidlikum kui Lääne-Euroopas", "Lääne- ja Saaremaa kirikud on väikesed, ühelöövilised (kodakirikud), algselt tornita", "SUBPaljudest on leitud jälgi seinamaalidest", "SUBAinus romaani tunnustega kirik Eestis on Valjala kirik Saaremaal (ühtlasi Eesti vanim kiviehitis)", "Kesk- ja Lõuna-Eesti kirikud ehitati punastest tellistest", "Ajalooliselt on oluline Niguliste kirik, sest sinna pildirüüstajad sisse ei saanud", "SUBSealt on pärit Hermen Rode altar ja 'Surmatants'"], ""],
        "figures":[figures["valjala"], figures["rode"], figures["jaani"]]
    },
    {
        "options":{"periodTitle":"Renessanss", "titleSize":"large", "fontFamily":"Renessanss", "bgColor":"#CEE6F3"},
        "time":"14.--16. saj",
        "data":"",
    },
    {
        "options":{"periodTitle":"Vararenessanss", "titleSize":"med", "fontFamily":"Renessanss", "bgColor":"#CEE6F3"},
        "time":"15. saj",
        "data":[["Juhtiv renessansimaa oli Itaalia, nn 'ideede häll'", "Renessanss on vaimne ja kultuuriline murrang kesk- ja uusaja vahel", "Oluliseks on humanismi levik -- inimene liigub tähtsuse keskmesse", "Toimusid suured leiutised ja avastused, nt Ameerika avastamine, trükikunst", "Kujunevad varakapitalistlikud suhted (nt pangad)", "Reformatsioon ja vastureformatsioon"], ["Kunsti iseloomustab tagasipöördumine antiigi poole", "SUBharmoonia, sümmeetria, tasakaal, perspektiiv", "Realistlik ja looduslähedane kujutamisviis", "Esimest korda on teostel teada autorid", "Kunstiajaloo uurimise algus", "Tõuseb profaanarhitektuuri tähtsus (palazzod, villad)", "Maalikunst ja skulptuur ei ole enam arhitektuuriga seotud", "Täisümarplastilised skulptuurid avalikus ruumis", "Vararenessansi keskus on Firenze", "SUBkunstiharrastajatest Medicite perekond","SUBBrunelleschi -- arhitekt (tsentraalperspektiivi õpetuse looja)", "Igal palazzo korrusel erinev viimistlus -- kerguse mulje loomiseks", "Maalikunst tõuseb tähtsamaks teistest kunstiliikidest", "SUBanatoomia tõetruu kujutamine, valgus ja vari, emotsioon"], ["Renessansiajal toimus omamoodi ka õigusteaduse taassünd", "Ülikoolide tekkega levis justnimelt õigusteadus laiemalt üle Euroopa", "Periood on oluline ka seetõttu, et just siis ühendati kaks siiani eraldiseisnud õigusteooriat: Rooma õigus (Corpus Iuris Civilis) ja keskajal tekkinud õigus (Corpus Iuris Canonici)", "Tänu humanismi laiale levikule läbi renessansi muutus ka kohtupidamine inimlikumaks, rõhku hakati panema õiguse ja õigluse ühendamisele"]],
        "figures":[figures["ghiberti"], figures["botticelli"], figures["firenze"]]
    },
    {
        "options":{"periodTitle":"Kõrgrenessanss", "titleSize":"med", "fontFamily":"Renessanss", "bgColor":"#a9d3eb"},
        "time":"16. saj",
        "data":["", ["Kõrgrenessanssi iseloomustab idealiseeritud tõde, tasakaalustatud kompositsioon ja joonte selgus", "Arhitektuuris oluline tsentraalsümmeetriline põhiplaan", "Andrea Palladio -- palladionism", "SUBkooskõla loodusega", "SUBehitise selge liigendus", "SUBantiigi järgija", "Kõrgrenessansi kolm suurmeistrit:", "SUBLeonardo da Vinci -- polühistor; 'Püha õhtusöömaaeg', 'Mona Lisa'", "SUBMichelangelo -- arhitekt, skulptor; 'Taavet', Püha Peetruse basiilika", "SUBRaffael -- maalija, arhitekt; 'Ateena kool'", "Tekib manerism, mida iseloomustab seletamatu päritoluga valgus, moonutatud anatoomia ja ruumi ähmastumine"]],
        "figures":[figures["monalisa"], figures["rotonda"], figures["michelangelo"]]
    },
    {
        "options":{"periodTitle":"Renessanss Madalmaades, Saksamaal ja Eestis", "titleSize":"med", "fontFamily":"Renessanss", "bgColor":"#8fcff2"},
        "time":"",
        "data":[["1517 -- reformatsioon", "Trükikunsti teke", "", "Madalmaad lähevad Habsburgide Hispaania haru võimu alla", "1581 -- Holland (põhjaosa vabanes)"], ["16. saj algus -- Saksa kunsti õitseaeg", "SUBItaalia renessansi ülevus & saklaste dramaatika", "Albrecht Dürer -- Saksa ajaloo suurim meister", "SUBtegeles põhiliselt graafiliste tööde ja joonistustega", "Dürer tegi autoportreesid, lähenes kunstile teaduslikult ja tegi elusloodusest detailseid pilte", "", "Madalmaades esikohal maalikunst", "Kunst oli linnakodanike teenistuses -- ilmalik", "SUBkunstnik oli pigem kästitööline", "Oluline oli tahvelmaal, seinamaali ei olnud", "Peenmaalitehnika -- üksikasjade väga täpne kujutamine", "Tuntumad Madalmaade kunstnikud on vennad Eyck'id", "", "Maalikunstis kujunes välja 4 teemaderühma:", "SUBmaastik, portree, olustikumaal (igapäevane elu), natüürmort", "", "Eesti kuulsaim renessansiaegne maalija -- Michel Sittow (väga tuntud kogu Euroopas)", "Maalis portreesid ja religioosseid maale", "Teda iseloomustab: väikesed maalid, hea karakteri tabamine, tume taust"]],
        "figures":[figures["arnolfini"], figures["sittow"], figures["dürer"]]
    },
    // {
    //     "time":"2005",
    //     "data":["", ["Banksy 'koopamaalingud'"], ""],
    //     "figures":[figures["banksy1"]],
    // }
];

    
const domContainer = document.querySelector('#container');
const root = ReactDOM.createRoot(domContainer);
root.render(
    <div>
     {rows.map((e)=><TimelineRow key={Math.round(Math.random()*10000)} year={e.time} data={e.data} options={e.options} figures={e.figures} />)}
    </div>
);