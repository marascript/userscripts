/*jshint -W033 */
/*jshint -W098 */

/**
 * ! These answers may not all be correct, or the item may not be spelled right.
 * 
 * Include in userscipt using:
 * @require     https://raw.githubusercontent.com/marascript/userscripts/master/scripts/utilities/mysteryItems.js
 * 
 * Use these sites to get the answer (maybe):
 * https://mara.guide/mysteryitem.php
 * https://www.marasites.com/?name=Dani&page=MysteryItemGuide
 * https://mara.page/Dani/MysteryItemGuide2
 * https://mara.page/Dani/tessssssssst
 * https://marapics.blogspot.com/?view=flipcard
 * 
 * If the answers image URL is is hosted on Marapets, add the image name and answer to knownItems.
 * Example:
 * 
 * https://images.marapets.com/icefairy/jentnerkommeroggar.png
 * 
 * So you would add:
 * "jentnerkommeroggar.png": "Heavy Concoction"
 */

const knownItems = {
    "bbjkkeyccd.gif": "Alien Grapes",
    "sdhflfhslhdf.gif": "Angel Hits",
    "ggyhtujfkroidfs.gif": "Angelic Wings",
    "sjdjdidosos.gif": "Ball of Bronze Yarn",
    "dfhsdfhslfh.gif": "Balloon Collecting Guide",
    "kkgweertpz.gif": "Bay Leaves",
    "jgjgkkkyk.gif": "Bigne Trading Card",
    "plokijuhgrfedws.gif": "Blue Drab",
    "yrwqkpkpnbvxxsd.gif": "Book of Beaches",
    "ppweoofgkk.gif": "Bop",
    "hjkuikjgg.gif": "Bowling Ball",
    "hflkfhldfhlhf.gif": "Box of Tissues",
    "hfdlfhshfls.gif": "Candy Floss Trading Card",
    "jshshshshshs.gif": "Chibs Shield",
    "loaitsowor.gif": "Christmas Cake",
    "oopooioolk.gif": "Christmas Morning",
    "ghjgkydksk.gif": "Christmas Spork",
    "jskhysueo.gif": "Christmas Tree Yo Yo",
    "hjgkdlpqirbmxvd.gif": "Clown Muffin",
    "bbjrwety.gif": "Cooker",
    "sqprotidnsoewp.gif": "Dakota Notepad ",
    "jopoiujkio.gif": "Decadal Whip",
    "lplpkjkjhy.gif": "Deluxe Hot Dog",
    "fhsklfhsf.gif": "Dentist Ticket",
    "sjdjsdisoisos.gif": "Digital Gumball",
    "yghhrupwnb.gif": "Digital Noises",
    "xvzbxvdgsfetrsf.gif": "Domino Plushie",
    "pimplsno.gif": "Drift Wood",
    "ljkhghjpoyjnmbg.gif": "Dukka Coin Skirt",
    "rewertytre.gif": "Easter Pancakes",
    "hhgyhtyuhtu.gif": "Elvis Wig",
    "fhslkdfhsdf.gif": "Empty Plate",
    "zyxtcrvewb.gif": "Enchanted Magenta Astro Plushie",
    "sosofefivm.gif": "Falling Petals",
    "siliofop.gif": "Fire Spell",
    "spsotnsiotg.gif": "Flower Bed",
    "oknjuhvgtfxdsaw.gif": "Flower Beetle",
    "fgskfggfssf.gif": "Foh",
    "rtmiyghr.gif": "Football Attack Boot",
    "ityhnfmjkhjgj.gif": "Frozen Necklace",
    "kpyrvgwwxdppyii.gif": "Garlic Necklace",
    "bbzxmppkuwttfdg.gif": "Ghost Floaties",
    "jffffklfllllllllllllll.gif": "Giant Red Apple",
    "ddasffsgddhyggf.gif": "Giant Salad",
    "rrybyvgwee.gif": "Giant Squash",
    "joioososo.gif": "Gigantic Fairy Doll",
    "pptgkwwbcy.gif": "GizmOs",
    "cnvbdhfgry.gif": "Glass Paffuto Plushie",
    "satfdserfv.gif": "Gold Calla Lily",
    "eenbvvioyt.gif": "Good Witch Skirt",
    "tyjhkiskdlroytifv.gif": "Grilled Fish",
    "utokglapsgehrt.gif": "Hoop Earrings",
    "tyuwqopjnnhj.gif": "Hula Doll",
    "bvgytokqarcxtuj.gif": "Ice Fairy Wings",
    "gfgflglmbmiss.gif": "Icy Cooker",
    "mthawpro.gif": "Iris Seeds",
    "adgjloyecbtgkuz.gif": "Jar of Bricks ",
    "ykgkguicgh.gif": "Jar of Flowers",
    "shsisisise.gif": "Jasmine",
    "hjfdtyuioh.gif": "Jenoa wig",
    "yfcwaxpkujjbtrf.gif": "Kawaii Beats",
    "vvuggihhoj.gif": "King Baspinar Beach Ball",
    "skddodoso.gif": "Ladybird",
    "owoqmsmnfjg.gif": "Leaf Charm",
    "bopadomy.gif": "Leather Shoes",
    "aloftisheog.gif": "Light Up Ushunda",
    "fghjhgkkfkg.gif": "Lump of Coal",
    "jhuukikiki.gif": "Microphone",
    "sjsduyweyw.gif": "Motherboard",
    "pqowieurythgnvb.gif": "Mummy Poera Plushie",
    "dslhfsldhflkdf.gif": "New Male Certificate",
    "jsueosldkdkd.gif": "Newth Book",
    "sjsjeoeofo.gif": "Newth Necklace",
    "jdhshjsis.gif": "Obese Fairy Doll",
    "dfgdfgggh.gif": "Peanuts",
    "dkfjghrutyvbxpq.gif": "Peeler",
    "jigipapa.gif": "Pistachio Nuts",
    "sjddisiisis.gif": "Plaster",
    "ttjuyyfbvvdferw.gif": "Plate Cookies",
    "ikiijuhhyk.gif": "Poop",
    "hfklkskeows.gif": "Psycho Destruction Ballads",
    "yampodot.gif": "Purple Pucu Potion",
    "sojuenhd.gif": "Purple Striped Worm",
    "okyhgygrdvvgbfd.gif": "Recycled Egg",
    "popoiuyuio.gif": "Sand Cake",
    "peotitehnmd.gif": "Seasonal Candycane",
    "hsgfjgcbnmc.gif": "Seasonal Vase",
    "ertgfdxcvbhuikx.gif": "Sewers Echlin Plushie ",
    "kaakjwyggf.gif": "Silver Bean",
    "lslfotoeue.gif": "Snowflake Stamp",
    "ghktukutkk.gif": "Spaghetti Pizza",
    "dsdflhldfhd.gif": "Spanner",
    "lkjlkjhghj.gif": "Starry Blueberry Pie",
    "sksoisoos.gif": "Strawberry Lolly",
    "ddppddkkij.gif": "Summer Adorab",
    "eoronbkdo.gif": "Sword of King Baspinar V",
    "uubbnnrrgh.gif": "Teen Party Hits",
    "oofjgjgjgjgjg.gif": "The Fates Scissor Book",
    "zrtypumo.gif": "Trowel",
    "riiopwttyu.gif": "Soft Scarf",
    "frftfgfvfc.gif": "Tundra Stamp",
    "uobhrdxqpkpkgyy.gif": "UFO Stamp",
    "ectofrog.gif": "Vamps",
    "nbvbvcvbnm.gif": "Staff of Blitzen",
    "yuyugbgbvfredxz.gif": "Rugelach",
    "ffjiaogfopfjgkdo.gif": "Anime Wig",
    "jjhhgghjkk.gif": "Peasant Fairy Gloves ",
    "gjepcnusdy.gif": "White Fly Trap",
    "jghkmyikyfy.gif": "Extra Pet Giftbox",
    "hgjkslroswi.gif": "Blackjack Toy",
    "gygygjgkgl.gif": "Battle Fairy Glowing Egg",
    "fgjetyujdhmvj.gif": "Starry Viotto Potion",
    "fjfjdkdksl.gif": "Strobe Pancakes",
    "ddfouybeth.gif": "Book Of Bees",
    "edcvfrtgbn.gif": "Popstar Scarf",
    "xxpwbyzvcj.gif": "Peppermint Wig",
    "zxcvbnmzxc.gif": "Staff of the Bee",
    "iihujnbhge.gif": "Alien Grapes",
    "ddaonncbrz.gif": "Feta",
    "ikjjeesydepaaenfinda.png": "Nutcracker Action Figure",
    "tykkkeeeikkjedet.png": "Green HickPlate",
    "daocriupos.gif": "Recycling",
    "maanydemadennarmankan.png": "Spooks",
    "zpxocidksl.gif": "Parpy",
    "omaeskapaaskulenaasann.png": "Candycane Pin Up Dress",
    "jentnerkommeroggar.png": "Heavy Concoction",
    "fhdgkhjgutyrswe.gif": "Snowball Bombs",
    "kslsosoos.gif": "Pumpee",
    "lkfhkkksksksks.gif": "Chocolate Strawberry Treats",
    "ikkesakteikkjefort.png": "Firefly",
    "alskwieuvn.gif": "Naga Stamp",
    "fldkdjjfjfjfjf.gif": "Mutant Squid Soup",
    "iopoiuyuio.gif": "Pork Stuffed Peppers",
    "vbvbxcxcsd.gif": "Christmas Pop Up Book",
    "etetgdbcgd.gif": "Sea Water Book",
    "jhgkukikyiyk.gif": "Beebot",
    "nkjigydrawxscfv.gif": "Radiator Cap",
    "kkgjdjslsls.gif": "Green Grint Foot",
    "vxcdgpujeqaxdrg.gif": "Soda Farl",
    "vbvnvmkioe.gif": "Snow Skin",
    "hjyukyikyyktk.gif": "Jar of Roses",
    "ggoggptyhg.gif": "Zoink Ice Sculpture",
    "ccpwebyqxk.gif": "Bell",
    "yyhmbjipwq.gif": "Sea Salt Wig",
    "wewertrtyu.gif": "Trotters Sword",
    "jjrghgmcet.gif": "Purple Flix",
    "zzsowfnutg.gif": "Corrupted Yellow Glowing Egg",
    "hervotam.gif": "Blueberry Soda",
    "qbbxoprtjm.gif": "Eye Egg",
    "sjsoisososo.gif": "Ebi Shrimp"
}
