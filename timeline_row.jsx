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
            {Array.isArray(leftText) ? <ul style={{display:"inline-block", width:"fit-content", margin:"32px auto", fontSize:"20px", zIndex:"100"}}>{leftText.map((e)=><li style={{textAlign:"start"}} key={e}>{e}</li>)}</ul> : <p style={{fontSize:"20px", zIndex:"100"}}>{leftText}</p>}
            
            {Array.isArray(centerText) ? <ul style={{display:"inline-block", width:"fit-content", margin:"32px auto", fontSize:"24px", zIndex:"100"}}>{centerText.map((e)=><li style={{textAlign:"start"}} key={e}>{e}</li>)}</ul> : <p style={{fontSize:"24px", zIndex:"100"}}>{centerText}</p>}
            <p style={{fontSize:"20px", zIndex:"100"}}>{rightText}</p>
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
        "data":["", ["Koopamaalingud", "Väikesed skulptuurid"], ""],
        "options":{"periodTitle":"Paleoliitikum", "titleSize":"small"},
        "figures":[figures["lascaux"], figures["willendorf"]],

    },
    {
        "time":"10 000 ekr -- 5000 ekr",
        "data":[["Hakatakse kasutama keerukamaid tööriistu, nt vibu", "Lähis-Idas kujunevad vanimad asulad (Jeeriko, Çatalhöyük)"], ["Kunstis hakatakse kasutama stiliseerimist", "Tekivad inimfiguurid", "Kunst muutub abstraktsemaks"], ""],
        "options":{"periodTitle":"Mesoliitikum", "titleSize":"small"},
        "figures":[ figures["catalhöyük"], figures["cogul"]]

    },
    {
        "time":"5000 ekr -- 1800 ekr",
        "data":[["Hakkab tekkima põllumajandus", "Sellega seoses ka paikne eluviis ja karjakasvatus", "Tekivad esimesed riigid"], ["Esimesed megaliitilised ehitised: menhirid ja dolmenid (ja kromlehh)", "Nende ehitamise põhjus ei ole täpselt teada, kuid arvatakse religioosset seost"], ""],
        "options":{"periodTitle":"Neoliitikum", "titleSize":"small"},
        "figures":[figures["rudston"], figures["poulnabrone"], figures["stonehenge"]]

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