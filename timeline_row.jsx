function TimelineRow({data, year, options, figures}){
    const [leftText, centerText, rightText] = data;

    var titleSize = options == null || !("titleSize" in options) ? "med" : options.titleSize;

    const sizes = {
        "small":"18px",
        "med":"24px",
        "large":"32px",
    };

    return <div style={{margin:"auto", textAlign:"center"}}>
        {options != null && "periodTitle" in options && titleSize == "large" && <div style={{position: "absolute", left:"50%", height: 0, width: 0, scale:"0.5"}} className="shadow"></div>}
        {options != null && "periodTitle" in options && <p style={{textTransform:"uppercase", marginBottom:"32px", fontSize:sizes[titleSize]}}>{options.periodTitle}</p>}
        {year && <div style={{zIndex:"100", backgroundColor:"#B0B7B550", borderRadius:"8px", display:"inline", padding:"8px 16px"}}>{year.replace("--", "–").replaceAll("ekr", "eKr")}</div>}
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", justifyContent:"space-evenly", alignItems:"center"}}>
            {Array.isArray(leftText) ? <ul style={{display:"inline-block", width:"fit-content", margin:"32px auto", fontSize:"20px", zIndex:"100"}}>{leftText.map((e)=> e.length > 0 ? e.startsWith("TITLE") ? <p style={{color: "grey", textTransform:"uppercase"}}>{e.replace("TITLE", "")}</p> : <li style={{textAlign:"start"}} key={e}>{e.replaceAll("--", " – ")}</li> : <br />)}</ul> : <p style={{fontSize:"20px", zIndex:"100"}}>{leftText}</p>}
            
            {Array.isArray(centerText) ? <ul style={{display:"inline-block", width:"fit-content", margin:"32px auto", fontSize: "24px", zIndex:"100"}}>{centerText.map((e)=> e.length <= 0 ? <br /> : <li style={{textAlign:"start", marginLeft: e.startsWith("SUB") ? "12px" : "0", fontSize: e.startsWith("SUB") ? "0.8em" : "inherit", color: e.startsWith("SUB") ? "grey" : "black"}} key={e}>{e.replace("SUB", "")}</li>)}</ul> : <p style={{fontSize:"24px", zIndex:"100"}}>{centerText}</p>}

            {Array.isArray(rightText) ? <ul style={{display:"inline-block", width:"fit-content", margin:"32px auto", fontSize:"20px", zIndex:"100"}}>{rightText.map((e)=> e.length > 0 ? e.startsWith("TITLE") ? <p style={{color: "grey", textTransform:"uppercase"}}>{e.replace("TITLE", "")}</p> : <li style={{textAlign:"start"}} key={e}>{e.replaceAll("--", " – ")}</li> : <br />)}</ul> : <p style={{fontSize:"20px", zIndex:"100"}}>{rightText}</p>}
        </div>
        {figures != null && <div style={{zIndex:"-1000", display:"flex", justifyContent:"center", gap:"20%"}}>{figures}</div> }
        <div style={{height:"32px"}}></div>
    </div>;
}


// Data - {img:, title:, author:, year:,}
function ArtImage({data}){
    const img = data.img;
    const randomNumber = -13 + Math.round(Math.random()*26);
    const randomNumber2 = -50 + Math.round(Math.random()*100);

    return <div>
        <figure style={{zIndex:"-1000", translate: "0 "+ randomNumber2+"px", maxWidth:"300px", display:"inline-block", margin:"auto", rotate:randomNumber+"deg", textAlign:"start"}}>
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
    "abikaasad":<ArtImage data={{author:"Abikaasade sarkofaag", year:"530 -- 510 eKr", title:null, img:"https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/21264708/image/medium-93cdff14a8158c40c5c43cab70ffb9ea.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20240403%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240403T051706Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=af585bcfb6e72919e18a9cef763aa01c57b64c041478f73e94a53f092de849d3"}} />,

    "panteon":<ArtImage data={{author:"Panteon", year:"u 200 pKr", title:null, img:"https://img1.advisor.travel/1200x630px-Pantheon_Rome_20.jpg"}} />,
    "aurelius":<ArtImage data={{author:"Marcus Aureliuse ratsamonument", year:"175 pKr", title:null, img:"https://kunstiabi.weebly.com/uploads/1/0/1/6/10161718/2655201_orig.jpg"}} />,
    "diatreet":<ArtImage data={{author:"Diatreet", year:"4. saj", title:null, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/2329_-_Milano_-_Museo_archeologico_-_Diatreta_Trivulzio_-_Foto_Giovanni_Dall%27Orto%2C_30-Oct-2008.jpg/640px-2329_-_Milano_-_Museo_archeologico_-_Diatreta_Trivulzio_-_Foto_Giovanni_Dall%27Orto%2C_30-Oct-2008.jpg"}} />,

    // "monalisa":<ArtImage data={{author:"Leonardo da Vinci", year:"1503--1519", title:"Mona Lisa", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"}} />,

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
        "options":{"periodTitle":"Mesopotaamia", "titleSize":"large"},
        "time":"3000 ekr -- 539 ekr",
        "data":[["TITLEVana-Egitpus", "1550 - 1075 eKr -- Uus Riik", "1075 - 525 eKr -- Hilis-Egitpus", "TITLEMesopotaamia","3000 eKr - 2340 eKr -- sumerite linnriigid: Ur, Uruk, Kiš", "2340 - 2160 eKr -- Akadi riik", "2065 - 1970 eKr -- semiidistunud sumerid", "1792 - 1595 eKr -- Vana-Babüloonia (Hammurapi, Babülon)", "934 - 609 eKr -- Assüüria (Sargon II; Assur ja Niinive)", "626 - 539 eKr -- Uus- Babüloonia (Ištari värav; Nebukadnetsar II)", "539 eKr -- Kyros II vallutab Babüloni, sellega lõpeb Mesopotaamia aeg", "", "", "Sumerid on esimene kõrgkultuur, algab ajalooline aeg", "Tekib kiri ja riik", "Lisaks leiutatakse ratas, õigussüsteem, kalender (astronoomia/loogia), eepos, potikeder jne", "Tekib linnatsivilisatsioon"], ["Iseloomulik hoonetüüp -- tsikuraat (astmiktempel)", "Asukohast tulenevalt on ülioluline savi, ka kunstis", "SUBSaviskulptuur", "SUBReljeef", "SUBSilinderpitsat", "Olulised on ka fantastiliste olendite kujutamine", "SUBLamassu", "SUBSirruš"], ["Tsivilisatsiooni tekkega tekkis lisaks ka vajadus ühiskonnas korra hoidmiseks", "Sellele pani alguse Vana-Babüloonia valitseja Hammurapi (1792-1750 eKr)", "Õiguse ja õigluse konseptsioon toodi jumalatele mõeldud ideaalidest maa peale, selleks seatigi inimeste tegevusele õiguslikud piirid ehk loodi seadused", "Hammurapi seadused on küll tänapäeva mõistes julmad ja inimõiguste ning tänapäevaste õigusprintsiipide (nt õiguslik võrdsus) vastased, ent oma aja kohta uuenduslikud -- seetõttu loetaksegi õiguse kui süsteemi loojaks just teda", "Samuti tuletatakse Hammurapi seadustest mõningad põhimõtted, mis kehtivad tänagi -- süütuse presumptsioon", "", "Mesopotaamias oli seadusandlik ja kohtuvõim valitseja käes"]],
        "figures":[figures["lamassu"], figures["uristandart"], figures["istar"], figures["hammurapi"]],
    },
    {
        "options":{"periodTitle":"Vana-Egiptus", "titleSize":"large"},
        "time":"6000 eKr -- 30 eKr",
        "data":[["6000 eKr -- eeldünastiline periood", "3000 eKr -- Ülem- ja Alam-Egiptuse ühendamine", "2700-2200 eKr -- Vana Riik (vaaraode kuldaeg, pealinn Memphis)", "2000-1650 eKr -- Keskmine Riik (pealinn Teeba)", "1550-1075 eKr -- Uus Riik (Egiptuse suurriik, preestrite suur võim)", "332 eKr -- Aleksander Suure vallutus tagab võimu Ptolemaiostele", "30 eKr -- sureb Kleopatra, roomlased vallutavad Egiptuse", "", "", "Egitpus oli maaühiskond, samuti väga religioosne", "Vaarao oli jumala tähtsusega", "Jumalatel olid hüüdnimed, nende pärisnimesid ei teatud -- muidu oleks neid šantašeerida saanud", "Egiptuse ühiskonnas oli väga oluline surmajärgne elu (püramiidid, hinge kaalumine jne)", "Ühiskond on suletud ja üsna konservatiivne"], ["Kunst on sümboliterohke", "Kunstil on kindel ülesanne: vaaraode austamine ja hauataguse elu kindlustamine", "Kunst püsib 3000 aastat muutumatu", "SUBmadalreljeef - Narmeri palett", "SUBsüvendreljeef - Ramses III", "Väga olulised on hauaehitised", "SUBmastaba - algelisim hauaehitis", "SUBastmikpüramiid - Džoseri astmikpüramiid (2650 eKr)", "SUBpüramiid - Giza püramiidid (u 2500 eKr)", "Olulised on ka Egiptuse templid (Luxor, Karnak) ja obeliskid nende ees", "Jumalate, vaaraode skulptuurid olid ranged, üldistatud; lihtrahva omad loomulikumad, värvilised", "SUBPinnakunstis olid vaaraod suuremad", "Kasutati Egiptuse poosi", "Egiptlased oskasid teha ka ilusaid ja värvilisi klaasesemeid"], ["Vana-Egiptuses on õigus kehtinud juba eeldünastilisest ajast ehk kohe Egiptuse aja algusest (6000 eKr)", "On teada, et vaaraodel oli absoluutne seadusandlik ja kohtuvõim, siiski pole kahjuks säilinud Egiptuse õiguse alusdokumente", "Vana-Egiptuses oli oluline lepinguõigus -- enam ei olnud lepingud ainult suusõnalised", "Õigussüsteemi aluseks on maat (harmoonia)", "Tolleaegsetele seadustele on omane väga karmid karistused", "Vana-Egitpuses kehtis ilmselt pretsedendiõigus, pretsedendid seati üldiselt juba Vanas Riigis (see näitab ka ühiskondlikku konservatiivsust ja muutumatust, mis tuleb välja ka nt kunstis)", "Õigus oli tihedalt seotud religiooniga - muuhulgas arvati, et seadused on tulnud otse jumalatelt", "Egiptusest pärineb ka väga algeline kohtusüsteem - eri kohtunikel oli erinev pädevus, kõige kõrgem neist oli otseloomulikult vaarao"]],
        "figures":[ figures["giza"], figures["narmer"], figures["luxor"]]
    },

    {
        "options":{"periodTitle":"Kreeta-Mükeene", "titleSize":"large"},
        "time":"3200 -- 800 eKr",
        "data":[["3200-2300 eKr -- küklaadid (minimalistlikud skulptuurid)", "2000-1100 eKr -- Kreeta-Mükeene", "1100-800 eKr -- tume ajajärk (kunstivaene aeg)", "", "Kreetal oli minoiline kultuur, suured ja uhked paleed, polnud kindlustusi", "Mükeenes olid võimsad kindluspaleed, kõrgetasemeline kullasepatöö, rõhk oli võitlemise kujutamisel"], ["Väljapaistva kunstilise tasemega olid küklaadid", "Neilt on säilinud väga ilusad minimalistlikud marmorist peakujud", "Naisi kujutavad küklaadid aktifiguurina, meestel on riided", "Suure tõenäosusega on skulptuurid olnud värvilised (nagu hiljem Vana-Kreekaski)", "", "Kreeta kunsti iseloomustab värviküllus ja elurõõm", "Paleed koosnesid paljudest tubadest, mis olid paigutatud ümber siseõu", "Paleeseinu kaunistasid freskod", "Sammaste läbimõõt oli allpool väiksem", "Kreeta kuulsaim tempel on Knossose tempel (al 1900 eKr)", "Lisaks oli Kreetal oluline skulptuur (Madude jumalannad) ja keraamika", "", "Mükeene oli minoilisest kultuurist palju maha jäänud, võtsid sealt palju üle", "Olulisemad teosed on näiteks Lõvivärav ja Agamemnoni mask"], ["Kreeta saarelt on avastatud Gortyni koodeks, kuulus seadustekogu, mis küll kirjutati peale Kreeta-Mükeene aega, ent arvatakse, et sarnased põhimõtted kehtisid ka varem", "Selle koodeksi järgi oli olulisel kohal justnimelt perekonna- ja omandiõigus (väga tänapäevane)", "Lisaks on teada, et Mükeenes kasutati nö kaheastmelist kohtusüsteemi, kuid mitte tänapäevases mõttes", "Esimene aste oli mõeldud lihtrahvale, teine kuningliku võimu teostamiseks"]],
        "figures":[ figures["kuklaad"], figures["harjahuppamine"], figures["agamemnon"]]
    },
    {
        "options":{"periodTitle":"Vana-Kreeka", "titleSize":"large"},
        "time":"1100 -- 30 eKr",
        "data":[["1100-800 eKr -- tume ajajärk", "800-500 eKr -- arhailine periood (linnriigid, kultuuritaseme kasv)", "500-338 eKr -- klassikaline periood (kultuuri kõrgaeg)", "338-30 eKr -- hellenstlik periood (Aleksander Suure impeerium)"], ["Algselt olid Kreekas hooned puidust, kivi hakati kasutama 7. saj eKr (sellepärast varasemaid ei ole säilinud)", "Tähtsaim hoonetüüp on tempel, mida iseloomustab tasakaal ja kord", "SUBtempli ehitamine oli kindlalt reglementeeritud, väga proportsionaalne", "SUBtempel koosneb talastikust, sammastikust ja krepidomast", "Templite ehitamise stiilid (order) olid:", "SUBdooria - kõige algelisem, vanim, sammastel puudub baas", "SUBjoonia - klassikalisest perioodist, sambal on baas ja voluut (TIKi sammas)", "SUBkorintos - hellenismiaegne, väga ilus lopsakas kapiteel, saledad ja kõrged sambad", "Akropolil olid Erechteioni, Nike ja Parthenoni templid", "SUBOluline skulptor ja ehituse ülevaataja oli Pheidias", "Skulptuuris eristati kurost (mees) ja koret (naiskuju), oluline oli arhailine naeratus", "klassikalisel perioodil hakatakse kasutama loomulikumat kujutamist ja kontraposti (Odakandja)", "Hellenismis asendati ideaaliotsing realismipüüdlusega, väljendati tundeid ja oldi dünaamilised (Laokooni grupp)", "Keraamikas mõtlesid kreeklased välja musta- ja punasefiguurilise vaasimaali", ], ["Vana-Kreeka on õigussüsteemi arenemise koha pealt väga murranguline ajajärk", "Ainuüksi õigus kui sõna (justice) tuleb Vana-Kreeka jumalannast Justitia, kelle kuju asub ka Riigikohtus", "Filosoof Platon pakkus oma teoses 'Vabariik' välja esimesed õigusprintsiibid", "Tema hinnagul peab õigus tagama tasakaalu ja harmoonia inimese kui indiviidi ja ühiskonna vahel", "Kuna Vana-Kreekas olid linnriigid, erinesid seadused kohati üsnagi palju (nagu tänapäeval USAs)", "Huvitaval kombel polnud (erinevalt Egiptusest/Mesopotaamiast) Vana-Kreekas eraldi kohtunikke ja advokaate, vaid kaebusi lahendati vandekohtu kaudu, kes ühtlasi ka karistuse määras (muus osas meenutas süsteem pisut tsiviilkohtumenetlust)", "Olulisel kohal olid demokraatia, võrduse ja õigluse põhimõtted"]],
        "figures":[figures["akropol"], figures["laokoon"], figures["kettaheitja"]],
    },

    {
        "options":{"periodTitle":"Vana-Rooma", "titleSize":"large"},
        "time":"800 eKr -- 476 pKr",
        "data":[[],[],[]]
    },
    {
        "options":{"periodTitle":"Etruskid", "titleSize":"med"},
        "time":"800 eKr -- 300 eKr",
        "data":[["Elasid Itaalias Etruuria maakonnas", "Oli oma keel (etruski keel), tekste palju säilinud pole", "Kultuuri kõrgaeg 7.-6. saj eKr", "Etruskid olid Rooma viimased kuningad", "Etruski kunst ja teadmised kandusid hiljem roomlastele edasi"],["Etruskid uskusid hauatagusesse ellu - selle tõttu ehitati hauaehitisi (tumulus)", "SUBsamuti ehitati surnutele eraldi linnu e nekropole", "SUBtumuluste seinad olid kaetud seinamaalidega", "Skulptuuris on oluline terracotta (põletatud savi) ja metall", "Kuigi neid pole säilinud, olid ka etruskitel kreeklaste omadega sarnanevad templid", "Samuti tegid etruskid keraamikat - vaase nimega bucchero"],["Etruskite õigussüsteemist ei teata väga palju", "Siiski on selle olulisus ilmne, kasvõi seetõttu, et peajumal Tina on ühtlasi õiguse ja õigluse jumal", "Ajalooallikatest nähtub ka, et teatud klanni liikmed (mehed) olid õiguslikult teistest ülimuslikumad, mistõttu kreeklaste võrdsuspõhimõte arvatavasti ertruskitele edasi ei kandunud"]],
        "figures":[figures["tumulus"], figures["abikaasad"]],

    },
    {
        "options":{"periodTitle":"Vana-Rooma", "titleSize":"med"},
        "time":"753 eKr -- 476 pKr",
        "data":[["753--509 eKr -- kuningate ajajärk (etruski kuningad, Rooma rajamine)", "509--30 eKr -- vabariigi ajajärk (arhitektuur, tehnoloogia)", "30 eKr--476 pKr -- keisririigi ajajärk (Rooma hiilgeaeg)", "", "", "Legendi kohaselt  asutas Rooma linna 753. aastal eKr Romulus"], ["Roomlaste panus kunstilukku on väga suur", "Olulisemad valdkonnad on arhitektuur, portreekunst ja ajalooline reljeef", "Arhitektuuris võeti kasutusele kaared, võlvid ja kuplid", "SUBsamuti hakati kasutama Rooma betooni ja etruskite toskaana sammast", "SUBroomlased segasid erinevaid stiile väga palju", "Vana-Roomast pärinevad järgmised ehitisetüübid", "SUBakvedukt - veejuhe", "SUBamfiteater - ringikujuline vabaõhuteater", "SUBterm - avalik saun", "SUBtriumfikaar", "SUBjne", "Erinevalt Kreekast ei ole roomlaste jaoks sambad struktuurse tähtsusega, vaid esteetilised", "Rooma templi suurnäiteks on Panteon, mis on üks täiuslikumaid kuppelehitisi maailmas", "Arhitektuuris on veel olulised foorumid ja basiilikad", "Skulptuuri poole pealt vaadates erinesid roomlased tunduvalt kreeklastest", "Skulptuure tehti peamiselt inimestest, mitte jumalatest", "SUBinimene ei ole täiuslik ja roomlased ei varjanudki seda", "Skulptuure tehti marmorist või pronksist (nt Marcus Aureliuse ratsamonument)", "Maalidest on olulised freskod, mis on eriti hästi säilinud Pompeii linnas (Müsteeriumite tuba) ja põrandamosaiik", "Tegeleti ka keraamikaga, loodi näiteks diatreete"], ["Tänapäevast õigussüsteemi on Rooma õigus väga tugevasti mõjutanud", "Juba 449. a eKr loodi Roomas 12 tahvli seadused, mis andsid Rooma kodanikule õigused ja kohustused", "On oluline, et nendega laiendati juba de facto kehtinud õigust ka alamklassile ja panid Rooma õigusele kirjaliku aluse", "Rooma ajast pärineb mh Lex Canuleia (445 eKr), mis sätestab patriitside ja plebeide vahelise abielu lubatavuse, aga ka kuulus Corpus Iuris Civilis", "Roomas võeti esimesena kasutusele töökoht jurist, samuti hakati õigust tõlgendama ja õpetama kui teadust", "Tänapäevalgi kasutuses olev nn common law (nt Suurbritannia, USA)põhineb ajaloolisel Rooma õigusel ja seetõttu kasutatakse seal palju ladinakeelseid termineid", "Seega on Rooma õigusel suur roll ka tänapäevases elus"]],
        "figures":[figures["panteon"], figures["diatreet"], figures["aurelius"]]

    }
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