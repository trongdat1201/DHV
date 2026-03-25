import {
  aY as $u,
  aZ as N,
  a_ as ri,
  a3 as Te,
  a1 as Hu,
  _ as ii,
} from "./entry.8aa394d7.js";
import {
  j as ni,
  Q as ai,
  R as si,
  Z as oi,
  u as ci,
} from "./swiper-vue.d5cda4d1.js";
var li = ["left", "right", "center", "justify"],
  fi = {
    delimiter: function () {
      return "<br/>";
    },
    header: function (r) {
      var e = r.data;
      return "<h" + e.level + ">" + e.text + "</h" + e.level + ">";
    },
    paragraph: function (r) {
      var e = r.data,
        t = e.alignment || e.align;
      return t !== void 0 && li.includes(t)
        ? '<p style="text-align:' + t + ';">' + e.text + "</p>"
        : "<p>" + e.text + "</p>";
    },
    list: function (r) {
      var e = r.data,
        t = e.style === "unordered" ? "ul" : "ol",
        u = function (i, n) {
          var o = i.map(function (l) {
            if (!l.content && !l.items) return "<li>" + l + "</li>";
            var s = "";
            return (
              l.items && (s = u(l.items, n)),
              l.content ? "<li> " + l.content + " </li>" + s : void 0
            );
          });
          return "<" + n + ">" + o.join("") + "</" + n + ">";
        };
      return u(e.items, t);
    },
    image: function (r) {
      var e = r.data,
        t = e.caption ? e.caption : "Image";
      return (
        '<img src="' +
        (e.file && e.file.url ? e.file.url : e.url) +
        '" alt="' +
        t +
        '" />'
      );
    },
    quote: function (r) {
      var e = r.data;
      return "<blockquote>" + e.text + "</blockquote> - " + e.caption;
    },
    code: function (r) {
      return "<pre><code>" + r.data.code + "</code></pre>";
    },
    embed: function (r) {
      var e = r.data;
      switch (e.service) {
        case "vimeo":
          return (
            '<iframe src="' +
            e.embed +
            '" height="' +
            e.height +
            '" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>'
          );
        case "youtube":
          return (
            '<iframe width="' +
            e.width +
            '" height="' +
            e.height +
            '" src="' +
            e.embed +
            '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
          );
        default:
          throw new Error(
            "Only Youtube and Vime Embeds are supported right now."
          );
      }
    },
  };
function Tt(r) {
  return new Error(
    '\x1B[31m The Parser function of type "' +
      r +
      `" is not defined. 

  Define your custom parser functions as: \x1B[34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks \x1B[0m`
  );
}
var Fu = function (r) {
    r === void 0 && (r = {});
    var e = Object.assign({}, fi, r);
    return {
      parse: function (t) {
        return t.blocks.map(function (u) {
          return e[u.type] ? e[u.type](u) : Tt(u.type);
        });
      },
      parseBlock: function (t) {
        return e[t.type] ? e[t.type](t) : Tt(t.type);
      },
      parseStrict: function (t) {
        var u = t.blocks,
          i = Fu(e).validate({ blocks: u });
        if (i.length)
          throw new Error(
            "Parser Functions missing for blocks: " + i.toString()
          );
        for (var n = [], o = 0; o < u.length; o++) {
          if (!e[u[o].type]) throw Tt(u[o].type);
          n.push(e[u[o].type](u[o]));
        }
        return n;
      },
      validate: function (t) {
        var u = t.blocks
            .map(function (n) {
              return n.type;
            })
            .filter(function (n, o, l) {
              return l.indexOf(n) === o;
            }),
          i = Object.keys(e);
        return u.filter(function (n) {
          return !i.includes(n);
        });
      },
    };
  },
  di = Fu;
const hi = $u(di);
var Vu = {},
  Ce = {},
  Xt = {},
  De = {},
  Qt = {};
Object.defineProperty(Qt, "__esModule", { value: !0 });
Qt.default = new Uint16Array(
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'
    .split("")
    .map(function (r) {
      return r.charCodeAt(0);
    })
);
var Jt = {};
Object.defineProperty(Jt, "__esModule", { value: !0 });
Jt.default = new Uint16Array(
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (r) {
    return r.charCodeAt(0);
  })
);
var Ct = {};
(function (r) {
  var e;
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.replaceCodePoint = r.fromCodePoint = void 0);
  var t = new Map([
    [0, 65533],
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376],
  ]);
  r.fromCodePoint =
    (e = String.fromCodePoint) !== null && e !== void 0
      ? e
      : function (n) {
          var o = "";
          return (
            n > 65535 &&
              ((n -= 65536),
              (o += String.fromCharCode(((n >>> 10) & 1023) | 55296)),
              (n = 56320 | (n & 1023))),
            (o += String.fromCharCode(n)),
            o
          );
        };
  function u(n) {
    var o;
    return (n >= 55296 && n <= 57343) || n > 1114111
      ? 65533
      : (o = t.get(n)) !== null && o !== void 0
      ? o
      : n;
  }
  r.replaceCodePoint = u;
  function i(n) {
    return (0, r.fromCodePoint)(u(n));
  }
  r.default = i;
})(Ct);
(function (r) {
  var e =
      (N && N.__createBinding) ||
      (Object.create
        ? function (b, v, w, _) {
            _ === void 0 && (_ = w);
            var h = Object.getOwnPropertyDescriptor(v, w);
            (!h ||
              ("get" in h ? !v.__esModule : h.writable || h.configurable)) &&
              (h = {
                enumerable: !0,
                get: function () {
                  return v[w];
                },
              }),
              Object.defineProperty(b, _, h);
          }
        : function (b, v, w, _) {
            _ === void 0 && (_ = w), (b[_] = v[w]);
          }),
    t =
      (N && N.__setModuleDefault) ||
      (Object.create
        ? function (b, v) {
            Object.defineProperty(b, "default", { enumerable: !0, value: v });
          }
        : function (b, v) {
            b.default = v;
          }),
    u =
      (N && N.__importStar) ||
      function (b) {
        if (b && b.__esModule) return b;
        var v = {};
        if (b != null)
          for (var w in b)
            w !== "default" &&
              Object.prototype.hasOwnProperty.call(b, w) &&
              e(v, b, w);
        return t(v, b), v;
      },
    i =
      (N && N.__importDefault) ||
      function (b) {
        return b && b.__esModule ? b : { default: b };
      };
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.decodeXML =
      r.decodeHTMLStrict =
      r.decodeHTMLAttribute =
      r.decodeHTML =
      r.determineBranch =
      r.EntityDecoder =
      r.DecodingMode =
      r.BinTrieFlags =
      r.fromCodePoint =
      r.replaceCodePoint =
      r.decodeCodePoint =
      r.xmlDecodeTree =
      r.htmlDecodeTree =
        void 0);
  var n = i(Qt);
  r.htmlDecodeTree = n.default;
  var o = i(Jt);
  r.xmlDecodeTree = o.default;
  var l = u(Ct);
  r.decodeCodePoint = l.default;
  var s = Ct;
  Object.defineProperty(r, "replaceCodePoint", {
    enumerable: !0,
    get: function () {
      return s.replaceCodePoint;
    },
  }),
    Object.defineProperty(r, "fromCodePoint", {
      enumerable: !0,
      get: function () {
        return s.fromCodePoint;
      },
    });
  var f;
  (function (b) {
    (b[(b.NUM = 35)] = "NUM"),
      (b[(b.SEMI = 59)] = "SEMI"),
      (b[(b.EQUALS = 61)] = "EQUALS"),
      (b[(b.ZERO = 48)] = "ZERO"),
      (b[(b.NINE = 57)] = "NINE"),
      (b[(b.LOWER_A = 97)] = "LOWER_A"),
      (b[(b.LOWER_F = 102)] = "LOWER_F"),
      (b[(b.LOWER_X = 120)] = "LOWER_X"),
      (b[(b.LOWER_Z = 122)] = "LOWER_Z"),
      (b[(b.UPPER_A = 65)] = "UPPER_A"),
      (b[(b.UPPER_F = 70)] = "UPPER_F"),
      (b[(b.UPPER_Z = 90)] = "UPPER_Z");
  })(f || (f = {}));
  var d = 32,
    p;
  (function (b) {
    (b[(b.VALUE_LENGTH = 49152)] = "VALUE_LENGTH"),
      (b[(b.BRANCH_LENGTH = 16256)] = "BRANCH_LENGTH"),
      (b[(b.JUMP_TABLE = 127)] = "JUMP_TABLE");
  })((p = r.BinTrieFlags || (r.BinTrieFlags = {})));
  function a(b) {
    return b >= f.ZERO && b <= f.NINE;
  }
  function c(b) {
    return (
      (b >= f.UPPER_A && b <= f.UPPER_F) || (b >= f.LOWER_A && b <= f.LOWER_F)
    );
  }
  function y(b) {
    return (
      (b >= f.UPPER_A && b <= f.UPPER_Z) ||
      (b >= f.LOWER_A && b <= f.LOWER_Z) ||
      a(b)
    );
  }
  function S(b) {
    return b === f.EQUALS || y(b);
  }
  var m;
  (function (b) {
    (b[(b.EntityStart = 0)] = "EntityStart"),
      (b[(b.NumericStart = 1)] = "NumericStart"),
      (b[(b.NumericDecimal = 2)] = "NumericDecimal"),
      (b[(b.NumericHex = 3)] = "NumericHex"),
      (b[(b.NamedEntity = 4)] = "NamedEntity");
  })(m || (m = {}));
  var T;
  (function (b) {
    (b[(b.Legacy = 0)] = "Legacy"),
      (b[(b.Strict = 1)] = "Strict"),
      (b[(b.Attribute = 2)] = "Attribute");
  })((T = r.DecodingMode || (r.DecodingMode = {})));
  var A = (function () {
    function b(v, w, _) {
      (this.decodeTree = v),
        (this.emitCodePoint = w),
        (this.errors = _),
        (this.state = m.EntityStart),
        (this.consumed = 1),
        (this.result = 0),
        (this.treeIndex = 0),
        (this.excess = 1),
        (this.decodeMode = T.Strict);
    }
    return (
      (b.prototype.startEntity = function (v) {
        (this.decodeMode = v),
          (this.state = m.EntityStart),
          (this.result = 0),
          (this.treeIndex = 0),
          (this.excess = 1),
          (this.consumed = 1);
      }),
      (b.prototype.write = function (v, w) {
        switch (this.state) {
          case m.EntityStart:
            return v.charCodeAt(w) === f.NUM
              ? ((this.state = m.NumericStart),
                (this.consumed += 1),
                this.stateNumericStart(v, w + 1))
              : ((this.state = m.NamedEntity), this.stateNamedEntity(v, w));
          case m.NumericStart:
            return this.stateNumericStart(v, w);
          case m.NumericDecimal:
            return this.stateNumericDecimal(v, w);
          case m.NumericHex:
            return this.stateNumericHex(v, w);
          case m.NamedEntity:
            return this.stateNamedEntity(v, w);
        }
      }),
      (b.prototype.stateNumericStart = function (v, w) {
        return w >= v.length
          ? -1
          : (v.charCodeAt(w) | d) === f.LOWER_X
          ? ((this.state = m.NumericHex),
            (this.consumed += 1),
            this.stateNumericHex(v, w + 1))
          : ((this.state = m.NumericDecimal), this.stateNumericDecimal(v, w));
      }),
      (b.prototype.addToNumericResult = function (v, w, _, h) {
        if (w !== _) {
          var x = _ - w;
          (this.result =
            this.result * Math.pow(h, x) + parseInt(v.substr(w, x), h)),
            (this.consumed += x);
        }
      }),
      (b.prototype.stateNumericHex = function (v, w) {
        for (var _ = w; w < v.length; ) {
          var h = v.charCodeAt(w);
          if (a(h) || c(h)) w += 1;
          else
            return (
              this.addToNumericResult(v, _, w, 16), this.emitNumericEntity(h, 3)
            );
        }
        return this.addToNumericResult(v, _, w, 16), -1;
      }),
      (b.prototype.stateNumericDecimal = function (v, w) {
        for (var _ = w; w < v.length; ) {
          var h = v.charCodeAt(w);
          if (a(h)) w += 1;
          else
            return (
              this.addToNumericResult(v, _, w, 10), this.emitNumericEntity(h, 2)
            );
        }
        return this.addToNumericResult(v, _, w, 10), -1;
      }),
      (b.prototype.emitNumericEntity = function (v, w) {
        var _;
        if (this.consumed <= w)
          return (
            (_ = this.errors) === null ||
              _ === void 0 ||
              _.absenceOfDigitsInNumericCharacterReference(this.consumed),
            0
          );
        if (v === f.SEMI) this.consumed += 1;
        else if (this.decodeMode === T.Strict) return 0;
        return (
          this.emitCodePoint(
            (0, l.replaceCodePoint)(this.result),
            this.consumed
          ),
          this.errors &&
            (v !== f.SEMI &&
              this.errors.missingSemicolonAfterCharacterReference(),
            this.errors.validateNumericCharacterReference(this.result)),
          this.consumed
        );
      }),
      (b.prototype.stateNamedEntity = function (v, w) {
        for (
          var _ = this.decodeTree,
            h = _[this.treeIndex],
            x = (h & p.VALUE_LENGTH) >> 14;
          w < v.length;
          w++, this.excess++
        ) {
          var g = v.charCodeAt(w);
          if (
            ((this.treeIndex = O(_, h, this.treeIndex + Math.max(1, x), g)),
            this.treeIndex < 0)
          )
            return this.result === 0 ||
              (this.decodeMode === T.Attribute && (x === 0 || S(g)))
              ? 0
              : this.emitNotTerminatedNamedEntity();
          if (
            ((h = _[this.treeIndex]), (x = (h & p.VALUE_LENGTH) >> 14), x !== 0)
          ) {
            if (g === f.SEMI)
              return this.emitNamedEntityData(
                this.treeIndex,
                x,
                this.consumed + this.excess
              );
            this.decodeMode !== T.Strict &&
              ((this.result = this.treeIndex),
              (this.consumed += this.excess),
              (this.excess = 0));
          }
        }
        return -1;
      }),
      (b.prototype.emitNotTerminatedNamedEntity = function () {
        var v,
          w = this,
          _ = w.result,
          h = w.decodeTree,
          x = (h[_] & p.VALUE_LENGTH) >> 14;
        return (
          this.emitNamedEntityData(_, x, this.consumed),
          (v = this.errors) === null ||
            v === void 0 ||
            v.missingSemicolonAfterCharacterReference(),
          this.consumed
        );
      }),
      (b.prototype.emitNamedEntityData = function (v, w, _) {
        var h = this.decodeTree;
        return (
          this.emitCodePoint(w === 1 ? h[v] & ~p.VALUE_LENGTH : h[v + 1], _),
          w === 3 && this.emitCodePoint(h[v + 2], _),
          _
        );
      }),
      (b.prototype.end = function () {
        var v;
        switch (this.state) {
          case m.NamedEntity:
            return this.result !== 0 &&
              (this.decodeMode !== T.Attribute ||
                this.result === this.treeIndex)
              ? this.emitNotTerminatedNamedEntity()
              : 0;
          case m.NumericDecimal:
            return this.emitNumericEntity(0, 2);
          case m.NumericHex:
            return this.emitNumericEntity(0, 3);
          case m.NumericStart:
            return (
              (v = this.errors) === null ||
                v === void 0 ||
                v.absenceOfDigitsInNumericCharacterReference(this.consumed),
              0
            );
          case m.EntityStart:
            return 0;
        }
      }),
      b
    );
  })();
  r.EntityDecoder = A;
  function I(b) {
    var v = "",
      w = new A(b, function (_) {
        return (v += (0, l.fromCodePoint)(_));
      });
    return function (h, x) {
      for (var g = 0, E = 0; (E = h.indexOf("&", E)) >= 0; ) {
        (v += h.slice(g, E)), w.startEntity(x);
        var U = w.write(h, E + 1);
        if (U < 0) {
          g = E + w.end();
          break;
        }
        (g = E + U), (E = U === 0 ? g + 1 : g);
      }
      var B = v + h.slice(g);
      return (v = ""), B;
    };
  }
  function O(b, v, w, _) {
    var h = (v & p.BRANCH_LENGTH) >> 7,
      x = v & p.JUMP_TABLE;
    if (h === 0) return x !== 0 && _ === x ? w : -1;
    if (x) {
      var g = _ - x;
      return g < 0 || g >= h ? -1 : b[w + g] - 1;
    }
    for (var E = w, U = E + h - 1; E <= U; ) {
      var B = (E + U) >>> 1,
        j = b[B];
      if (j < _) E = B + 1;
      else if (j > _) U = B - 1;
      else return b[B + h];
    }
    return -1;
  }
  r.determineBranch = O;
  var L = I(n.default),
    H = I(o.default);
  function Y(b, v) {
    return v === void 0 && (v = T.Legacy), L(b, v);
  }
  r.decodeHTML = Y;
  function $(b) {
    return L(b, T.Attribute);
  }
  r.decodeHTMLAttribute = $;
  function z(b) {
    return L(b, T.Strict);
  }
  r.decodeHTMLStrict = z;
  function G(b) {
    return H(b, T.Strict);
  }
  r.decodeXML = G;
})(De);
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), (r.QuoteType = void 0);
  var e = De,
    t;
  (function (a) {
    (a[(a.Tab = 9)] = "Tab"),
      (a[(a.NewLine = 10)] = "NewLine"),
      (a[(a.FormFeed = 12)] = "FormFeed"),
      (a[(a.CarriageReturn = 13)] = "CarriageReturn"),
      (a[(a.Space = 32)] = "Space"),
      (a[(a.ExclamationMark = 33)] = "ExclamationMark"),
      (a[(a.Number = 35)] = "Number"),
      (a[(a.Amp = 38)] = "Amp"),
      (a[(a.SingleQuote = 39)] = "SingleQuote"),
      (a[(a.DoubleQuote = 34)] = "DoubleQuote"),
      (a[(a.Dash = 45)] = "Dash"),
      (a[(a.Slash = 47)] = "Slash"),
      (a[(a.Zero = 48)] = "Zero"),
      (a[(a.Nine = 57)] = "Nine"),
      (a[(a.Semi = 59)] = "Semi"),
      (a[(a.Lt = 60)] = "Lt"),
      (a[(a.Eq = 61)] = "Eq"),
      (a[(a.Gt = 62)] = "Gt"),
      (a[(a.Questionmark = 63)] = "Questionmark"),
      (a[(a.UpperA = 65)] = "UpperA"),
      (a[(a.LowerA = 97)] = "LowerA"),
      (a[(a.UpperF = 70)] = "UpperF"),
      (a[(a.LowerF = 102)] = "LowerF"),
      (a[(a.UpperZ = 90)] = "UpperZ"),
      (a[(a.LowerZ = 122)] = "LowerZ"),
      (a[(a.LowerX = 120)] = "LowerX"),
      (a[(a.OpeningSquareBracket = 91)] = "OpeningSquareBracket");
  })(t || (t = {}));
  var u;
  (function (a) {
    (a[(a.Text = 1)] = "Text"),
      (a[(a.BeforeTagName = 2)] = "BeforeTagName"),
      (a[(a.InTagName = 3)] = "InTagName"),
      (a[(a.InSelfClosingTag = 4)] = "InSelfClosingTag"),
      (a[(a.BeforeClosingTagName = 5)] = "BeforeClosingTagName"),
      (a[(a.InClosingTagName = 6)] = "InClosingTagName"),
      (a[(a.AfterClosingTagName = 7)] = "AfterClosingTagName"),
      (a[(a.BeforeAttributeName = 8)] = "BeforeAttributeName"),
      (a[(a.InAttributeName = 9)] = "InAttributeName"),
      (a[(a.AfterAttributeName = 10)] = "AfterAttributeName"),
      (a[(a.BeforeAttributeValue = 11)] = "BeforeAttributeValue"),
      (a[(a.InAttributeValueDq = 12)] = "InAttributeValueDq"),
      (a[(a.InAttributeValueSq = 13)] = "InAttributeValueSq"),
      (a[(a.InAttributeValueNq = 14)] = "InAttributeValueNq"),
      (a[(a.BeforeDeclaration = 15)] = "BeforeDeclaration"),
      (a[(a.InDeclaration = 16)] = "InDeclaration"),
      (a[(a.InProcessingInstruction = 17)] = "InProcessingInstruction"),
      (a[(a.BeforeComment = 18)] = "BeforeComment"),
      (a[(a.CDATASequence = 19)] = "CDATASequence"),
      (a[(a.InSpecialComment = 20)] = "InSpecialComment"),
      (a[(a.InCommentLike = 21)] = "InCommentLike"),
      (a[(a.BeforeSpecialS = 22)] = "BeforeSpecialS"),
      (a[(a.SpecialStartSequence = 23)] = "SpecialStartSequence"),
      (a[(a.InSpecialTag = 24)] = "InSpecialTag"),
      (a[(a.BeforeEntity = 25)] = "BeforeEntity"),
      (a[(a.BeforeNumericEntity = 26)] = "BeforeNumericEntity"),
      (a[(a.InNamedEntity = 27)] = "InNamedEntity"),
      (a[(a.InNumericEntity = 28)] = "InNumericEntity"),
      (a[(a.InHexEntity = 29)] = "InHexEntity");
  })(u || (u = {}));
  function i(a) {
    return (
      a === t.Space ||
      a === t.NewLine ||
      a === t.Tab ||
      a === t.FormFeed ||
      a === t.CarriageReturn
    );
  }
  function n(a) {
    return a === t.Slash || a === t.Gt || i(a);
  }
  function o(a) {
    return a >= t.Zero && a <= t.Nine;
  }
  function l(a) {
    return (a >= t.LowerA && a <= t.LowerZ) || (a >= t.UpperA && a <= t.UpperZ);
  }
  function s(a) {
    return (a >= t.UpperA && a <= t.UpperF) || (a >= t.LowerA && a <= t.LowerF);
  }
  var f;
  (function (a) {
    (a[(a.NoValue = 0)] = "NoValue"),
      (a[(a.Unquoted = 1)] = "Unquoted"),
      (a[(a.Single = 2)] = "Single"),
      (a[(a.Double = 3)] = "Double");
  })((f = r.QuoteType || (r.QuoteType = {})));
  var d = {
      Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
      CdataEnd: new Uint8Array([93, 93, 62]),
      CommentEnd: new Uint8Array([45, 45, 62]),
      ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
      StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
      TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
    },
    p = (function () {
      function a(c, y) {
        var S = c.xmlMode,
          m = S === void 0 ? !1 : S,
          T = c.decodeEntities,
          A = T === void 0 ? !0 : T;
        (this.cbs = y),
          (this.state = u.Text),
          (this.buffer = ""),
          (this.sectionStart = 0),
          (this.index = 0),
          (this.baseState = u.Text),
          (this.isSpecial = !1),
          (this.running = !0),
          (this.offset = 0),
          (this.currentSequence = void 0),
          (this.sequenceIndex = 0),
          (this.trieIndex = 0),
          (this.trieCurrent = 0),
          (this.entityResult = 0),
          (this.entityExcess = 0),
          (this.xmlMode = m),
          (this.decodeEntities = A),
          (this.entityTrie = m ? e.xmlDecodeTree : e.htmlDecodeTree);
      }
      return (
        (a.prototype.reset = function () {
          (this.state = u.Text),
            (this.buffer = ""),
            (this.sectionStart = 0),
            (this.index = 0),
            (this.baseState = u.Text),
            (this.currentSequence = void 0),
            (this.running = !0),
            (this.offset = 0);
        }),
        (a.prototype.write = function (c) {
          (this.offset += this.buffer.length), (this.buffer = c), this.parse();
        }),
        (a.prototype.end = function () {
          this.running && this.finish();
        }),
        (a.prototype.pause = function () {
          this.running = !1;
        }),
        (a.prototype.resume = function () {
          (this.running = !0),
            this.index < this.buffer.length + this.offset && this.parse();
        }),
        (a.prototype.getIndex = function () {
          return this.index;
        }),
        (a.prototype.getSectionStart = function () {
          return this.sectionStart;
        }),
        (a.prototype.stateText = function (c) {
          c === t.Lt || (!this.decodeEntities && this.fastForwardTo(t.Lt))
            ? (this.index > this.sectionStart &&
                this.cbs.ontext(this.sectionStart, this.index),
              (this.state = u.BeforeTagName),
              (this.sectionStart = this.index))
            : this.decodeEntities &&
              c === t.Amp &&
              (this.state = u.BeforeEntity);
        }),
        (a.prototype.stateSpecialStartSequence = function (c) {
          var y = this.sequenceIndex === this.currentSequence.length,
            S = y
              ? n(c)
              : (c | 32) === this.currentSequence[this.sequenceIndex];
          if (!S) this.isSpecial = !1;
          else if (!y) {
            this.sequenceIndex++;
            return;
          }
          (this.sequenceIndex = 0),
            (this.state = u.InTagName),
            this.stateInTagName(c);
        }),
        (a.prototype.stateInSpecialTag = function (c) {
          if (this.sequenceIndex === this.currentSequence.length) {
            if (c === t.Gt || i(c)) {
              var y = this.index - this.currentSequence.length;
              if (this.sectionStart < y) {
                var S = this.index;
                (this.index = y),
                  this.cbs.ontext(this.sectionStart, y),
                  (this.index = S);
              }
              (this.isSpecial = !1),
                (this.sectionStart = y + 2),
                this.stateInClosingTagName(c);
              return;
            }
            this.sequenceIndex = 0;
          }
          (c | 32) === this.currentSequence[this.sequenceIndex]
            ? (this.sequenceIndex += 1)
            : this.sequenceIndex === 0
            ? this.currentSequence === d.TitleEnd
              ? this.decodeEntities &&
                c === t.Amp &&
                (this.state = u.BeforeEntity)
              : this.fastForwardTo(t.Lt) && (this.sequenceIndex = 1)
            : (this.sequenceIndex = +(c === t.Lt));
        }),
        (a.prototype.stateCDATASequence = function (c) {
          c === d.Cdata[this.sequenceIndex]
            ? ++this.sequenceIndex === d.Cdata.length &&
              ((this.state = u.InCommentLike),
              (this.currentSequence = d.CdataEnd),
              (this.sequenceIndex = 0),
              (this.sectionStart = this.index + 1))
            : ((this.sequenceIndex = 0),
              (this.state = u.InDeclaration),
              this.stateInDeclaration(c));
        }),
        (a.prototype.fastForwardTo = function (c) {
          for (; ++this.index < this.buffer.length + this.offset; )
            if (this.buffer.charCodeAt(this.index - this.offset) === c)
              return !0;
          return (this.index = this.buffer.length + this.offset - 1), !1;
        }),
        (a.prototype.stateInCommentLike = function (c) {
          c === this.currentSequence[this.sequenceIndex]
            ? ++this.sequenceIndex === this.currentSequence.length &&
              (this.currentSequence === d.CdataEnd
                ? this.cbs.oncdata(this.sectionStart, this.index, 2)
                : this.cbs.oncomment(this.sectionStart, this.index, 2),
              (this.sequenceIndex = 0),
              (this.sectionStart = this.index + 1),
              (this.state = u.Text))
            : this.sequenceIndex === 0
            ? this.fastForwardTo(this.currentSequence[0]) &&
              (this.sequenceIndex = 1)
            : c !== this.currentSequence[this.sequenceIndex - 1] &&
              (this.sequenceIndex = 0);
        }),
        (a.prototype.isTagStartChar = function (c) {
          return this.xmlMode ? !n(c) : l(c);
        }),
        (a.prototype.startSpecial = function (c, y) {
          (this.isSpecial = !0),
            (this.currentSequence = c),
            (this.sequenceIndex = y),
            (this.state = u.SpecialStartSequence);
        }),
        (a.prototype.stateBeforeTagName = function (c) {
          if (c === t.ExclamationMark)
            (this.state = u.BeforeDeclaration),
              (this.sectionStart = this.index + 1);
          else if (c === t.Questionmark)
            (this.state = u.InProcessingInstruction),
              (this.sectionStart = this.index + 1);
          else if (this.isTagStartChar(c)) {
            var y = c | 32;
            (this.sectionStart = this.index),
              !this.xmlMode && y === d.TitleEnd[2]
                ? this.startSpecial(d.TitleEnd, 3)
                : (this.state =
                    !this.xmlMode && y === d.ScriptEnd[2]
                      ? u.BeforeSpecialS
                      : u.InTagName);
          } else
            c === t.Slash
              ? (this.state = u.BeforeClosingTagName)
              : ((this.state = u.Text), this.stateText(c));
        }),
        (a.prototype.stateInTagName = function (c) {
          n(c) &&
            (this.cbs.onopentagname(this.sectionStart, this.index),
            (this.sectionStart = -1),
            (this.state = u.BeforeAttributeName),
            this.stateBeforeAttributeName(c));
        }),
        (a.prototype.stateBeforeClosingTagName = function (c) {
          i(c) ||
            (c === t.Gt
              ? (this.state = u.Text)
              : ((this.state = this.isTagStartChar(c)
                  ? u.InClosingTagName
                  : u.InSpecialComment),
                (this.sectionStart = this.index)));
        }),
        (a.prototype.stateInClosingTagName = function (c) {
          (c === t.Gt || i(c)) &&
            (this.cbs.onclosetag(this.sectionStart, this.index),
            (this.sectionStart = -1),
            (this.state = u.AfterClosingTagName),
            this.stateAfterClosingTagName(c));
        }),
        (a.prototype.stateAfterClosingTagName = function (c) {
          (c === t.Gt || this.fastForwardTo(t.Gt)) &&
            ((this.state = u.Text),
            (this.baseState = u.Text),
            (this.sectionStart = this.index + 1));
        }),
        (a.prototype.stateBeforeAttributeName = function (c) {
          c === t.Gt
            ? (this.cbs.onopentagend(this.index),
              this.isSpecial
                ? ((this.state = u.InSpecialTag), (this.sequenceIndex = 0))
                : (this.state = u.Text),
              (this.baseState = this.state),
              (this.sectionStart = this.index + 1))
            : c === t.Slash
            ? (this.state = u.InSelfClosingTag)
            : i(c) ||
              ((this.state = u.InAttributeName),
              (this.sectionStart = this.index));
        }),
        (a.prototype.stateInSelfClosingTag = function (c) {
          c === t.Gt
            ? (this.cbs.onselfclosingtag(this.index),
              (this.state = u.Text),
              (this.baseState = u.Text),
              (this.sectionStart = this.index + 1),
              (this.isSpecial = !1))
            : i(c) ||
              ((this.state = u.BeforeAttributeName),
              this.stateBeforeAttributeName(c));
        }),
        (a.prototype.stateInAttributeName = function (c) {
          (c === t.Eq || n(c)) &&
            (this.cbs.onattribname(this.sectionStart, this.index),
            (this.sectionStart = -1),
            (this.state = u.AfterAttributeName),
            this.stateAfterAttributeName(c));
        }),
        (a.prototype.stateAfterAttributeName = function (c) {
          c === t.Eq
            ? (this.state = u.BeforeAttributeValue)
            : c === t.Slash || c === t.Gt
            ? (this.cbs.onattribend(f.NoValue, this.index),
              (this.state = u.BeforeAttributeName),
              this.stateBeforeAttributeName(c))
            : i(c) ||
              (this.cbs.onattribend(f.NoValue, this.index),
              (this.state = u.InAttributeName),
              (this.sectionStart = this.index));
        }),
        (a.prototype.stateBeforeAttributeValue = function (c) {
          c === t.DoubleQuote
            ? ((this.state = u.InAttributeValueDq),
              (this.sectionStart = this.index + 1))
            : c === t.SingleQuote
            ? ((this.state = u.InAttributeValueSq),
              (this.sectionStart = this.index + 1))
            : i(c) ||
              ((this.sectionStart = this.index),
              (this.state = u.InAttributeValueNq),
              this.stateInAttributeValueNoQuotes(c));
        }),
        (a.prototype.handleInAttributeValue = function (c, y) {
          c === y || (!this.decodeEntities && this.fastForwardTo(y))
            ? (this.cbs.onattribdata(this.sectionStart, this.index),
              (this.sectionStart = -1),
              this.cbs.onattribend(
                y === t.DoubleQuote ? f.Double : f.Single,
                this.index
              ),
              (this.state = u.BeforeAttributeName))
            : this.decodeEntities &&
              c === t.Amp &&
              ((this.baseState = this.state), (this.state = u.BeforeEntity));
        }),
        (a.prototype.stateInAttributeValueDoubleQuotes = function (c) {
          this.handleInAttributeValue(c, t.DoubleQuote);
        }),
        (a.prototype.stateInAttributeValueSingleQuotes = function (c) {
          this.handleInAttributeValue(c, t.SingleQuote);
        }),
        (a.prototype.stateInAttributeValueNoQuotes = function (c) {
          i(c) || c === t.Gt
            ? (this.cbs.onattribdata(this.sectionStart, this.index),
              (this.sectionStart = -1),
              this.cbs.onattribend(f.Unquoted, this.index),
              (this.state = u.BeforeAttributeName),
              this.stateBeforeAttributeName(c))
            : this.decodeEntities &&
              c === t.Amp &&
              ((this.baseState = this.state), (this.state = u.BeforeEntity));
        }),
        (a.prototype.stateBeforeDeclaration = function (c) {
          c === t.OpeningSquareBracket
            ? ((this.state = u.CDATASequence), (this.sequenceIndex = 0))
            : (this.state = c === t.Dash ? u.BeforeComment : u.InDeclaration);
        }),
        (a.prototype.stateInDeclaration = function (c) {
          (c === t.Gt || this.fastForwardTo(t.Gt)) &&
            (this.cbs.ondeclaration(this.sectionStart, this.index),
            (this.state = u.Text),
            (this.sectionStart = this.index + 1));
        }),
        (a.prototype.stateInProcessingInstruction = function (c) {
          (c === t.Gt || this.fastForwardTo(t.Gt)) &&
            (this.cbs.onprocessinginstruction(this.sectionStart, this.index),
            (this.state = u.Text),
            (this.sectionStart = this.index + 1));
        }),
        (a.prototype.stateBeforeComment = function (c) {
          c === t.Dash
            ? ((this.state = u.InCommentLike),
              (this.currentSequence = d.CommentEnd),
              (this.sequenceIndex = 2),
              (this.sectionStart = this.index + 1))
            : (this.state = u.InDeclaration);
        }),
        (a.prototype.stateInSpecialComment = function (c) {
          (c === t.Gt || this.fastForwardTo(t.Gt)) &&
            (this.cbs.oncomment(this.sectionStart, this.index, 0),
            (this.state = u.Text),
            (this.sectionStart = this.index + 1));
        }),
        (a.prototype.stateBeforeSpecialS = function (c) {
          var y = c | 32;
          y === d.ScriptEnd[3]
            ? this.startSpecial(d.ScriptEnd, 4)
            : y === d.StyleEnd[3]
            ? this.startSpecial(d.StyleEnd, 4)
            : ((this.state = u.InTagName), this.stateInTagName(c));
        }),
        (a.prototype.stateBeforeEntity = function (c) {
          (this.entityExcess = 1),
            (this.entityResult = 0),
            c === t.Number
              ? (this.state = u.BeforeNumericEntity)
              : c === t.Amp ||
                ((this.trieIndex = 0),
                (this.trieCurrent = this.entityTrie[0]),
                (this.state = u.InNamedEntity),
                this.stateInNamedEntity(c));
        }),
        (a.prototype.stateInNamedEntity = function (c) {
          if (
            ((this.entityExcess += 1),
            (this.trieIndex = (0, e.determineBranch)(
              this.entityTrie,
              this.trieCurrent,
              this.trieIndex + 1,
              c
            )),
            this.trieIndex < 0)
          ) {
            this.emitNamedEntity(), this.index--;
            return;
          }
          this.trieCurrent = this.entityTrie[this.trieIndex];
          var y = this.trieCurrent & e.BinTrieFlags.VALUE_LENGTH;
          if (y) {
            var S = (y >> 14) - 1;
            if (!this.allowLegacyEntity() && c !== t.Semi) this.trieIndex += S;
            else {
              var m = this.index - this.entityExcess + 1;
              m > this.sectionStart && this.emitPartial(this.sectionStart, m),
                (this.entityResult = this.trieIndex),
                (this.trieIndex += S),
                (this.entityExcess = 0),
                (this.sectionStart = this.index + 1),
                S === 0 && this.emitNamedEntity();
            }
          }
        }),
        (a.prototype.emitNamedEntity = function () {
          if (((this.state = this.baseState), this.entityResult !== 0)) {
            var c =
              (this.entityTrie[this.entityResult] &
                e.BinTrieFlags.VALUE_LENGTH) >>
              14;
            switch (c) {
              case 1: {
                this.emitCodePoint(
                  this.entityTrie[this.entityResult] &
                    ~e.BinTrieFlags.VALUE_LENGTH
                );
                break;
              }
              case 2: {
                this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
                break;
              }
              case 3:
                this.emitCodePoint(this.entityTrie[this.entityResult + 1]),
                  this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
            }
          }
        }),
        (a.prototype.stateBeforeNumericEntity = function (c) {
          (c | 32) === t.LowerX
            ? (this.entityExcess++, (this.state = u.InHexEntity))
            : ((this.state = u.InNumericEntity), this.stateInNumericEntity(c));
        }),
        (a.prototype.emitNumericEntity = function (c) {
          var y = this.index - this.entityExcess - 1,
            S = y + 2 + +(this.state === u.InHexEntity);
          S !== this.index &&
            (y > this.sectionStart && this.emitPartial(this.sectionStart, y),
            (this.sectionStart = this.index + Number(c)),
            this.emitCodePoint((0, e.replaceCodePoint)(this.entityResult))),
            (this.state = this.baseState);
        }),
        (a.prototype.stateInNumericEntity = function (c) {
          c === t.Semi
            ? this.emitNumericEntity(!0)
            : o(c)
            ? ((this.entityResult = this.entityResult * 10 + (c - t.Zero)),
              this.entityExcess++)
            : (this.allowLegacyEntity()
                ? this.emitNumericEntity(!1)
                : (this.state = this.baseState),
              this.index--);
        }),
        (a.prototype.stateInHexEntity = function (c) {
          c === t.Semi
            ? this.emitNumericEntity(!0)
            : o(c)
            ? ((this.entityResult = this.entityResult * 16 + (c - t.Zero)),
              this.entityExcess++)
            : s(c)
            ? ((this.entityResult =
                this.entityResult * 16 + ((c | 32) - t.LowerA + 10)),
              this.entityExcess++)
            : (this.allowLegacyEntity()
                ? this.emitNumericEntity(!1)
                : (this.state = this.baseState),
              this.index--);
        }),
        (a.prototype.allowLegacyEntity = function () {
          return (
            !this.xmlMode &&
            (this.baseState === u.Text || this.baseState === u.InSpecialTag)
          );
        }),
        (a.prototype.cleanup = function () {
          this.running &&
            this.sectionStart !== this.index &&
            (this.state === u.Text ||
            (this.state === u.InSpecialTag && this.sequenceIndex === 0)
              ? (this.cbs.ontext(this.sectionStart, this.index),
                (this.sectionStart = this.index))
              : (this.state === u.InAttributeValueDq ||
                  this.state === u.InAttributeValueSq ||
                  this.state === u.InAttributeValueNq) &&
                (this.cbs.onattribdata(this.sectionStart, this.index),
                (this.sectionStart = this.index)));
        }),
        (a.prototype.shouldContinue = function () {
          return this.index < this.buffer.length + this.offset && this.running;
        }),
        (a.prototype.parse = function () {
          for (; this.shouldContinue(); ) {
            var c = this.buffer.charCodeAt(this.index - this.offset);
            switch (this.state) {
              case u.Text: {
                this.stateText(c);
                break;
              }
              case u.SpecialStartSequence: {
                this.stateSpecialStartSequence(c);
                break;
              }
              case u.InSpecialTag: {
                this.stateInSpecialTag(c);
                break;
              }
              case u.CDATASequence: {
                this.stateCDATASequence(c);
                break;
              }
              case u.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(c);
                break;
              }
              case u.InAttributeName: {
                this.stateInAttributeName(c);
                break;
              }
              case u.InCommentLike: {
                this.stateInCommentLike(c);
                break;
              }
              case u.InSpecialComment: {
                this.stateInSpecialComment(c);
                break;
              }
              case u.BeforeAttributeName: {
                this.stateBeforeAttributeName(c);
                break;
              }
              case u.InTagName: {
                this.stateInTagName(c);
                break;
              }
              case u.InClosingTagName: {
                this.stateInClosingTagName(c);
                break;
              }
              case u.BeforeTagName: {
                this.stateBeforeTagName(c);
                break;
              }
              case u.AfterAttributeName: {
                this.stateAfterAttributeName(c);
                break;
              }
              case u.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(c);
                break;
              }
              case u.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(c);
                break;
              }
              case u.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(c);
                break;
              }
              case u.AfterClosingTagName: {
                this.stateAfterClosingTagName(c);
                break;
              }
              case u.BeforeSpecialS: {
                this.stateBeforeSpecialS(c);
                break;
              }
              case u.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(c);
                break;
              }
              case u.InSelfClosingTag: {
                this.stateInSelfClosingTag(c);
                break;
              }
              case u.InDeclaration: {
                this.stateInDeclaration(c);
                break;
              }
              case u.BeforeDeclaration: {
                this.stateBeforeDeclaration(c);
                break;
              }
              case u.BeforeComment: {
                this.stateBeforeComment(c);
                break;
              }
              case u.InProcessingInstruction: {
                this.stateInProcessingInstruction(c);
                break;
              }
              case u.InNamedEntity: {
                this.stateInNamedEntity(c);
                break;
              }
              case u.BeforeEntity: {
                this.stateBeforeEntity(c);
                break;
              }
              case u.InHexEntity: {
                this.stateInHexEntity(c);
                break;
              }
              case u.InNumericEntity: {
                this.stateInNumericEntity(c);
                break;
              }
              default:
                this.stateBeforeNumericEntity(c);
            }
            this.index++;
          }
          this.cleanup();
        }),
        (a.prototype.finish = function () {
          this.state === u.InNamedEntity && this.emitNamedEntity(),
            this.sectionStart < this.index && this.handleTrailingData(),
            this.cbs.onend();
        }),
        (a.prototype.handleTrailingData = function () {
          var c = this.buffer.length + this.offset;
          this.state === u.InCommentLike
            ? this.currentSequence === d.CdataEnd
              ? this.cbs.oncdata(this.sectionStart, c, 0)
              : this.cbs.oncomment(this.sectionStart, c, 0)
            : this.state === u.InNumericEntity && this.allowLegacyEntity()
            ? this.emitNumericEntity(!1)
            : this.state === u.InHexEntity && this.allowLegacyEntity()
            ? this.emitNumericEntity(!1)
            : this.state === u.InTagName ||
              this.state === u.BeforeAttributeName ||
              this.state === u.BeforeAttributeValue ||
              this.state === u.AfterAttributeName ||
              this.state === u.InAttributeName ||
              this.state === u.InAttributeValueSq ||
              this.state === u.InAttributeValueDq ||
              this.state === u.InAttributeValueNq ||
              this.state === u.InClosingTagName ||
              this.cbs.ontext(this.sectionStart, c);
        }),
        (a.prototype.emitPartial = function (c, y) {
          this.baseState !== u.Text && this.baseState !== u.InSpecialTag
            ? this.cbs.onattribdata(c, y)
            : this.cbs.ontext(c, y);
        }),
        (a.prototype.emitCodePoint = function (c) {
          this.baseState !== u.Text && this.baseState !== u.InSpecialTag
            ? this.cbs.onattribentity(c)
            : this.cbs.ontextentity(c);
        }),
        a
      );
    })();
  r.default = p;
})(Xt);
var pi =
    (N && N.__createBinding) ||
    (Object.create
      ? function (r, e, t, u) {
          u === void 0 && (u = t);
          var i = Object.getOwnPropertyDescriptor(e, t);
          (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) &&
            (i = {
              enumerable: !0,
              get: function () {
                return e[t];
              },
            }),
            Object.defineProperty(r, u, i);
        }
      : function (r, e, t, u) {
          u === void 0 && (u = t), (r[u] = e[t]);
        }),
  bi =
    (N && N.__setModuleDefault) ||
    (Object.create
      ? function (r, e) {
          Object.defineProperty(r, "default", { enumerable: !0, value: e });
        }
      : function (r, e) {
          r.default = e;
        }),
  mi =
    (N && N.__importStar) ||
    function (r) {
      if (r && r.__esModule) return r;
      var e = {};
      if (r != null)
        for (var t in r)
          t !== "default" &&
            Object.prototype.hasOwnProperty.call(r, t) &&
            pi(e, r, t);
      return bi(e, r), e;
    };
Object.defineProperty(Ce, "__esModule", { value: !0 });
Ce.Parser = void 0;
var Fe = mi(Xt),
  hu = De,
  pe = new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea",
  ]),
  k = new Set(["p"]),
  pu = new Set(["thead", "tbody"]),
  bu = new Set(["dd", "dt"]),
  mu = new Set(["rt", "rp"]),
  gi = new Map([
    ["tr", new Set(["tr", "th", "td"])],
    ["th", new Set(["th"])],
    ["td", new Set(["thead", "th", "td"])],
    ["body", new Set(["head", "link", "script"])],
    ["li", new Set(["li"])],
    ["p", k],
    ["h1", k],
    ["h2", k],
    ["h3", k],
    ["h4", k],
    ["h5", k],
    ["h6", k],
    ["select", pe],
    ["input", pe],
    ["output", pe],
    ["button", pe],
    ["datalist", pe],
    ["textarea", pe],
    ["option", new Set(["option"])],
    ["optgroup", new Set(["optgroup", "option"])],
    ["dd", bu],
    ["dt", bu],
    ["address", k],
    ["article", k],
    ["aside", k],
    ["blockquote", k],
    ["details", k],
    ["div", k],
    ["dl", k],
    ["fieldset", k],
    ["figcaption", k],
    ["figure", k],
    ["footer", k],
    ["form", k],
    ["header", k],
    ["hr", k],
    ["main", k],
    ["nav", k],
    ["ol", k],
    ["pre", k],
    ["section", k],
    ["table", k],
    ["ul", k],
    ["rt", mu],
    ["rp", mu],
    ["tbody", pu],
    ["tfoot", pu],
  ]),
  yi = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
  ]),
  gu = new Set(["math", "svg"]),
  yu = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignobject",
    "desc",
    "title",
  ]),
  xi = /\s|\//,
  vi = (function () {
    function r(e, t) {
      t === void 0 && (t = {});
      var u, i, n, o, l;
      (this.options = t),
        (this.startIndex = 0),
        (this.endIndex = 0),
        (this.openTagStart = 0),
        (this.tagname = ""),
        (this.attribname = ""),
        (this.attribvalue = ""),
        (this.attribs = null),
        (this.stack = []),
        (this.foreignContext = []),
        (this.buffers = []),
        (this.bufferOffset = 0),
        (this.writeIndex = 0),
        (this.ended = !1),
        (this.cbs = e ?? {}),
        (this.lowerCaseTagNames =
          (u = t.lowerCaseTags) !== null && u !== void 0 ? u : !t.xmlMode),
        (this.lowerCaseAttributeNames =
          (i = t.lowerCaseAttributeNames) !== null && i !== void 0
            ? i
            : !t.xmlMode),
        (this.tokenizer = new (
          (n = t.Tokenizer) !== null && n !== void 0 ? n : Fe.default
        )(this.options, this)),
        (l = (o = this.cbs).onparserinit) === null ||
          l === void 0 ||
          l.call(o, this);
    }
    return (
      (r.prototype.ontext = function (e, t) {
        var u,
          i,
          n = this.getSlice(e, t);
        (this.endIndex = t - 1),
          (i = (u = this.cbs).ontext) === null || i === void 0 || i.call(u, n),
          (this.startIndex = t);
      }),
      (r.prototype.ontextentity = function (e) {
        var t,
          u,
          i = this.tokenizer.getSectionStart();
        (this.endIndex = i - 1),
          (u = (t = this.cbs).ontext) === null ||
            u === void 0 ||
            u.call(t, (0, hu.fromCodePoint)(e)),
          (this.startIndex = i);
      }),
      (r.prototype.isVoidElement = function (e) {
        return !this.options.xmlMode && yi.has(e);
      }),
      (r.prototype.onopentagname = function (e, t) {
        this.endIndex = t;
        var u = this.getSlice(e, t);
        this.lowerCaseTagNames && (u = u.toLowerCase()), this.emitOpenTag(u);
      }),
      (r.prototype.emitOpenTag = function (e) {
        var t, u, i, n;
        (this.openTagStart = this.startIndex), (this.tagname = e);
        var o = !this.options.xmlMode && gi.get(e);
        if (o)
          for (
            ;
            this.stack.length > 0 && o.has(this.stack[this.stack.length - 1]);

          ) {
            var l = this.stack.pop();
            (u = (t = this.cbs).onclosetag) === null ||
              u === void 0 ||
              u.call(t, l, !0);
          }
        this.isVoidElement(e) ||
          (this.stack.push(e),
          gu.has(e)
            ? this.foreignContext.push(!0)
            : yu.has(e) && this.foreignContext.push(!1)),
          (n = (i = this.cbs).onopentagname) === null ||
            n === void 0 ||
            n.call(i, e),
          this.cbs.onopentag && (this.attribs = {});
      }),
      (r.prototype.endOpenTag = function (e) {
        var t, u;
        (this.startIndex = this.openTagStart),
          this.attribs &&
            ((u = (t = this.cbs).onopentag) === null ||
              u === void 0 ||
              u.call(t, this.tagname, this.attribs, e),
            (this.attribs = null)),
          this.cbs.onclosetag &&
            this.isVoidElement(this.tagname) &&
            this.cbs.onclosetag(this.tagname, !0),
          (this.tagname = "");
      }),
      (r.prototype.onopentagend = function (e) {
        (this.endIndex = e), this.endOpenTag(!1), (this.startIndex = e + 1);
      }),
      (r.prototype.onclosetag = function (e, t) {
        var u, i, n, o, l, s;
        this.endIndex = t;
        var f = this.getSlice(e, t);
        if (
          (this.lowerCaseTagNames && (f = f.toLowerCase()),
          (gu.has(f) || yu.has(f)) && this.foreignContext.pop(),
          this.isVoidElement(f))
        )
          !this.options.xmlMode &&
            f === "br" &&
            ((i = (u = this.cbs).onopentagname) === null ||
              i === void 0 ||
              i.call(u, "br"),
            (o = (n = this.cbs).onopentag) === null ||
              o === void 0 ||
              o.call(n, "br", {}, !0),
            (s = (l = this.cbs).onclosetag) === null ||
              s === void 0 ||
              s.call(l, "br", !1));
        else {
          var d = this.stack.lastIndexOf(f);
          if (d !== -1)
            if (this.cbs.onclosetag)
              for (var p = this.stack.length - d; p--; )
                this.cbs.onclosetag(this.stack.pop(), p !== 0);
            else this.stack.length = d;
          else
            !this.options.xmlMode &&
              f === "p" &&
              (this.emitOpenTag("p"), this.closeCurrentTag(!0));
        }
        this.startIndex = t + 1;
      }),
      (r.prototype.onselfclosingtag = function (e) {
        (this.endIndex = e),
          this.options.xmlMode ||
          this.options.recognizeSelfClosing ||
          this.foreignContext[this.foreignContext.length - 1]
            ? (this.closeCurrentTag(!1), (this.startIndex = e + 1))
            : this.onopentagend(e);
      }),
      (r.prototype.closeCurrentTag = function (e) {
        var t,
          u,
          i = this.tagname;
        this.endOpenTag(e),
          this.stack[this.stack.length - 1] === i &&
            ((u = (t = this.cbs).onclosetag) === null ||
              u === void 0 ||
              u.call(t, i, !e),
            this.stack.pop());
      }),
      (r.prototype.onattribname = function (e, t) {
        this.startIndex = e;
        var u = this.getSlice(e, t);
        this.attribname = this.lowerCaseAttributeNames ? u.toLowerCase() : u;
      }),
      (r.prototype.onattribdata = function (e, t) {
        this.attribvalue += this.getSlice(e, t);
      }),
      (r.prototype.onattribentity = function (e) {
        this.attribvalue += (0, hu.fromCodePoint)(e);
      }),
      (r.prototype.onattribend = function (e, t) {
        var u, i;
        (this.endIndex = t),
          (i = (u = this.cbs).onattribute) === null ||
            i === void 0 ||
            i.call(
              u,
              this.attribname,
              this.attribvalue,
              e === Fe.QuoteType.Double
                ? '"'
                : e === Fe.QuoteType.Single
                ? "'"
                : e === Fe.QuoteType.NoValue
                ? void 0
                : null
            ),
          this.attribs &&
            !Object.prototype.hasOwnProperty.call(
              this.attribs,
              this.attribname
            ) &&
            (this.attribs[this.attribname] = this.attribvalue),
          (this.attribvalue = "");
      }),
      (r.prototype.getInstructionName = function (e) {
        var t = e.search(xi),
          u = t < 0 ? e : e.substr(0, t);
        return this.lowerCaseTagNames && (u = u.toLowerCase()), u;
      }),
      (r.prototype.ondeclaration = function (e, t) {
        this.endIndex = t;
        var u = this.getSlice(e, t);
        if (this.cbs.onprocessinginstruction) {
          var i = this.getInstructionName(u);
          this.cbs.onprocessinginstruction("!".concat(i), "!".concat(u));
        }
        this.startIndex = t + 1;
      }),
      (r.prototype.onprocessinginstruction = function (e, t) {
        this.endIndex = t;
        var u = this.getSlice(e, t);
        if (this.cbs.onprocessinginstruction) {
          var i = this.getInstructionName(u);
          this.cbs.onprocessinginstruction("?".concat(i), "?".concat(u));
        }
        this.startIndex = t + 1;
      }),
      (r.prototype.oncomment = function (e, t, u) {
        var i, n, o, l;
        (this.endIndex = t),
          (n = (i = this.cbs).oncomment) === null ||
            n === void 0 ||
            n.call(i, this.getSlice(e, t - u)),
          (l = (o = this.cbs).oncommentend) === null ||
            l === void 0 ||
            l.call(o),
          (this.startIndex = t + 1);
      }),
      (r.prototype.oncdata = function (e, t, u) {
        var i, n, o, l, s, f, d, p, a, c;
        this.endIndex = t;
        var y = this.getSlice(e, t - u);
        this.options.xmlMode || this.options.recognizeCDATA
          ? ((n = (i = this.cbs).oncdatastart) === null ||
              n === void 0 ||
              n.call(i),
            (l = (o = this.cbs).ontext) === null ||
              l === void 0 ||
              l.call(o, y),
            (f = (s = this.cbs).oncdataend) === null ||
              f === void 0 ||
              f.call(s))
          : ((p = (d = this.cbs).oncomment) === null ||
              p === void 0 ||
              p.call(d, "[CDATA[".concat(y, "]]")),
            (c = (a = this.cbs).oncommentend) === null ||
              c === void 0 ||
              c.call(a)),
          (this.startIndex = t + 1);
      }),
      (r.prototype.onend = function () {
        var e, t;
        if (this.cbs.onclosetag) {
          this.endIndex = this.startIndex;
          for (
            var u = this.stack.length;
            u > 0;
            this.cbs.onclosetag(this.stack[--u], !0)
          );
        }
        (t = (e = this.cbs).onend) === null || t === void 0 || t.call(e);
      }),
      (r.prototype.reset = function () {
        var e, t, u, i;
        (t = (e = this.cbs).onreset) === null || t === void 0 || t.call(e),
          this.tokenizer.reset(),
          (this.tagname = ""),
          (this.attribname = ""),
          (this.attribs = null),
          (this.stack.length = 0),
          (this.startIndex = 0),
          (this.endIndex = 0),
          (i = (u = this.cbs).onparserinit) === null ||
            i === void 0 ||
            i.call(u, this),
          (this.buffers.length = 0),
          (this.bufferOffset = 0),
          (this.writeIndex = 0),
          (this.ended = !1);
      }),
      (r.prototype.parseComplete = function (e) {
        this.reset(), this.end(e);
      }),
      (r.prototype.getSlice = function (e, t) {
        for (; e - this.bufferOffset >= this.buffers[0].length; )
          this.shiftBuffer();
        for (
          var u = this.buffers[0].slice(
            e - this.bufferOffset,
            t - this.bufferOffset
          );
          t - this.bufferOffset > this.buffers[0].length;

        )
          this.shiftBuffer(),
            (u += this.buffers[0].slice(0, t - this.bufferOffset));
        return u;
      }),
      (r.prototype.shiftBuffer = function () {
        (this.bufferOffset += this.buffers[0].length),
          this.writeIndex--,
          this.buffers.shift();
      }),
      (r.prototype.write = function (e) {
        var t, u;
        if (this.ended) {
          (u = (t = this.cbs).onerror) === null ||
            u === void 0 ||
            u.call(t, new Error(".write() after done!"));
          return;
        }
        this.buffers.push(e),
          this.tokenizer.running &&
            (this.tokenizer.write(e), this.writeIndex++);
      }),
      (r.prototype.end = function (e) {
        var t, u;
        if (this.ended) {
          (u = (t = this.cbs).onerror) === null ||
            u === void 0 ||
            u.call(t, new Error(".end() after done!"));
          return;
        }
        e && this.write(e), (this.ended = !0), this.tokenizer.end();
      }),
      (r.prototype.pause = function () {
        this.tokenizer.pause();
      }),
      (r.prototype.resume = function () {
        for (
          this.tokenizer.resume();
          this.tokenizer.running && this.writeIndex < this.buffers.length;

        )
          this.tokenizer.write(this.buffers[this.writeIndex++]);
        this.ended && this.tokenizer.end();
      }),
      (r.prototype.parseChunk = function (e) {
        this.write(e);
      }),
      (r.prototype.done = function (e) {
        this.end(e);
      }),
      r
    );
  })();
Ce.Parser = vi;
var ae = {},
  Se = {};
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.Doctype =
      r.CDATA =
      r.Tag =
      r.Style =
      r.Script =
      r.Comment =
      r.Directive =
      r.Text =
      r.Root =
      r.isTag =
      r.ElementType =
        void 0);
  var e;
  (function (u) {
    (u.Root = "root"),
      (u.Text = "text"),
      (u.Directive = "directive"),
      (u.Comment = "comment"),
      (u.Script = "script"),
      (u.Style = "style"),
      (u.Tag = "tag"),
      (u.CDATA = "cdata"),
      (u.Doctype = "doctype");
  })((e = r.ElementType || (r.ElementType = {})));
  function t(u) {
    return u.type === e.Tag || u.type === e.Script || u.type === e.Style;
  }
  (r.isTag = t),
    (r.Root = e.Root),
    (r.Text = e.Text),
    (r.Directive = e.Directive),
    (r.Comment = e.Comment),
    (r.Script = e.Script),
    (r.Style = e.Style),
    (r.Tag = e.Tag),
    (r.CDATA = e.CDATA),
    (r.Doctype = e.Doctype);
})(Se);
var D = {},
  ce =
    (N && N.__extends) ||
    (function () {
      var r = function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (u, i) {
                u.__proto__ = i;
              }) ||
            function (u, i) {
              for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (u[n] = i[n]);
            }),
          r(e, t)
        );
      };
      return function (e, t) {
        if (typeof t != "function" && t !== null)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        r(e, t);
        function u() {
          this.constructor = e;
        }
        e.prototype =
          t === null
            ? Object.create(t)
            : ((u.prototype = t.prototype), new u());
      };
    })(),
  Ie =
    (N && N.__assign) ||
    function () {
      return (
        (Ie =
          Object.assign ||
          function (r) {
            for (var e, t = 1, u = arguments.length; t < u; t++) {
              e = arguments[t];
              for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
            }
            return r;
          }),
        Ie.apply(this, arguments)
      );
    };
Object.defineProperty(D, "__esModule", { value: !0 });
D.cloneNode =
  D.hasChildren =
  D.isDocument =
  D.isDirective =
  D.isComment =
  D.isText =
  D.isCDATA =
  D.isTag =
  D.Element =
  D.Document =
  D.CDATA =
  D.NodeWithChildren =
  D.ProcessingInstruction =
  D.Comment =
  D.Text =
  D.DataNode =
  D.Node =
    void 0;
var Q = Se,
  Zt = (function () {
    function r() {
      (this.parent = null),
        (this.prev = null),
        (this.next = null),
        (this.startIndex = null),
        (this.endIndex = null);
    }
    return (
      Object.defineProperty(r.prototype, "parentNode", {
        get: function () {
          return this.parent;
        },
        set: function (e) {
          this.parent = e;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(r.prototype, "previousSibling", {
        get: function () {
          return this.prev;
        },
        set: function (e) {
          this.prev = e;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(r.prototype, "nextSibling", {
        get: function () {
          return this.next;
        },
        set: function (e) {
          this.next = e;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (r.prototype.cloneNode = function (e) {
        return e === void 0 && (e = !1), Yt(this, e);
      }),
      r
    );
  })();
D.Node = Zt;
var ft = (function (r) {
  ce(e, r);
  function e(t) {
    var u = r.call(this) || this;
    return (u.data = t), u;
  }
  return (
    Object.defineProperty(e.prototype, "nodeValue", {
      get: function () {
        return this.data;
      },
      set: function (t) {
        this.data = t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    e
  );
})(Zt);
D.DataNode = ft;
var zu = (function (r) {
  ce(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = Q.ElementType.Text), t;
  }
  return (
    Object.defineProperty(e.prototype, "nodeType", {
      get: function () {
        return 3;
      },
      enumerable: !1,
      configurable: !0,
    }),
    e
  );
})(ft);
D.Text = zu;
var Gu = (function (r) {
  ce(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = Q.ElementType.Comment), t;
  }
  return (
    Object.defineProperty(e.prototype, "nodeType", {
      get: function () {
        return 8;
      },
      enumerable: !1,
      configurable: !0,
    }),
    e
  );
})(ft);
D.Comment = Gu;
var Wu = (function (r) {
  ce(e, r);
  function e(t, u) {
    var i = r.call(this, u) || this;
    return (i.name = t), (i.type = Q.ElementType.Directive), i;
  }
  return (
    Object.defineProperty(e.prototype, "nodeType", {
      get: function () {
        return 1;
      },
      enumerable: !1,
      configurable: !0,
    }),
    e
  );
})(ft);
D.ProcessingInstruction = Wu;
var dt = (function (r) {
  ce(e, r);
  function e(t) {
    var u = r.call(this) || this;
    return (u.children = t), u;
  }
  return (
    Object.defineProperty(e.prototype, "firstChild", {
      get: function () {
        var t;
        return (t = this.children[0]) !== null && t !== void 0 ? t : null;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, "lastChild", {
      get: function () {
        return this.children.length > 0
          ? this.children[this.children.length - 1]
          : null;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, "childNodes", {
      get: function () {
        return this.children;
      },
      set: function (t) {
        this.children = t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    e
  );
})(Zt);
D.NodeWithChildren = dt;
var Xu = (function (r) {
  ce(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = Q.ElementType.CDATA), t;
  }
  return (
    Object.defineProperty(e.prototype, "nodeType", {
      get: function () {
        return 4;
      },
      enumerable: !1,
      configurable: !0,
    }),
    e
  );
})(dt);
D.CDATA = Xu;
var Qu = (function (r) {
  ce(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = Q.ElementType.Root), t;
  }
  return (
    Object.defineProperty(e.prototype, "nodeType", {
      get: function () {
        return 9;
      },
      enumerable: !1,
      configurable: !0,
    }),
    e
  );
})(dt);
D.Document = Qu;
var Ju = (function (r) {
  ce(e, r);
  function e(t, u, i, n) {
    i === void 0 && (i = []),
      n === void 0 &&
        (n =
          t === "script"
            ? Q.ElementType.Script
            : t === "style"
            ? Q.ElementType.Style
            : Q.ElementType.Tag);
    var o = r.call(this, i) || this;
    return (o.name = t), (o.attribs = u), (o.type = n), o;
  }
  return (
    Object.defineProperty(e.prototype, "nodeType", {
      get: function () {
        return 1;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, "tagName", {
      get: function () {
        return this.name;
      },
      set: function (t) {
        this.name = t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, "attributes", {
      get: function () {
        var t = this;
        return Object.keys(this.attribs).map(function (u) {
          var i, n;
          return {
            name: u,
            value: t.attribs[u],
            namespace:
              (i = t["x-attribsNamespace"]) === null || i === void 0
                ? void 0
                : i[u],
            prefix:
              (n = t["x-attribsPrefix"]) === null || n === void 0
                ? void 0
                : n[u],
          };
        });
      },
      enumerable: !1,
      configurable: !0,
    }),
    e
  );
})(dt);
D.Element = Ju;
function Zu(r) {
  return (0, Q.isTag)(r);
}
D.isTag = Zu;
function Yu(r) {
  return r.type === Q.ElementType.CDATA;
}
D.isCDATA = Yu;
function Ku(r) {
  return r.type === Q.ElementType.Text;
}
D.isText = Ku;
function er(r) {
  return r.type === Q.ElementType.Comment;
}
D.isComment = er;
function tr(r) {
  return r.type === Q.ElementType.Directive;
}
D.isDirective = tr;
function ur(r) {
  return r.type === Q.ElementType.Root;
}
D.isDocument = ur;
function wi(r) {
  return Object.prototype.hasOwnProperty.call(r, "children");
}
D.hasChildren = wi;
function Yt(r, e) {
  e === void 0 && (e = !1);
  var t;
  if (Ku(r)) t = new zu(r.data);
  else if (er(r)) t = new Gu(r.data);
  else if (Zu(r)) {
    var u = e ? Et(r.children) : [],
      i = new Ju(r.name, Ie({}, r.attribs), u);
    u.forEach(function (s) {
      return (s.parent = i);
    }),
      r.namespace != null && (i.namespace = r.namespace),
      r["x-attribsNamespace"] &&
        (i["x-attribsNamespace"] = Ie({}, r["x-attribsNamespace"])),
      r["x-attribsPrefix"] &&
        (i["x-attribsPrefix"] = Ie({}, r["x-attribsPrefix"])),
      (t = i);
  } else if (Yu(r)) {
    var u = e ? Et(r.children) : [],
      n = new Xu(u);
    u.forEach(function (f) {
      return (f.parent = n);
    }),
      (t = n);
  } else if (ur(r)) {
    var u = e ? Et(r.children) : [],
      o = new Qu(u);
    u.forEach(function (f) {
      return (f.parent = o);
    }),
      r["x-mode"] && (o["x-mode"] = r["x-mode"]),
      (t = o);
  } else if (tr(r)) {
    var l = new Wu(r.name, r.data);
    r["x-name"] != null &&
      ((l["x-name"] = r["x-name"]),
      (l["x-publicId"] = r["x-publicId"]),
      (l["x-systemId"] = r["x-systemId"])),
      (t = l);
  } else throw new Error("Not implemented yet: ".concat(r.type));
  return (
    (t.startIndex = r.startIndex),
    (t.endIndex = r.endIndex),
    r.sourceCodeLocation != null &&
      (t.sourceCodeLocation = r.sourceCodeLocation),
    t
  );
}
D.cloneNode = Yt;
function Et(r) {
  for (
    var e = r.map(function (u) {
        return Yt(u, !0);
      }),
      t = 1;
    t < e.length;
    t++
  )
    (e[t].prev = e[t - 1]), (e[t - 1].next = e[t]);
  return e;
}
(function (r) {
  var e =
      (N && N.__createBinding) ||
      (Object.create
        ? function (l, s, f, d) {
            d === void 0 && (d = f);
            var p = Object.getOwnPropertyDescriptor(s, f);
            (!p ||
              ("get" in p ? !s.__esModule : p.writable || p.configurable)) &&
              (p = {
                enumerable: !0,
                get: function () {
                  return s[f];
                },
              }),
              Object.defineProperty(l, d, p);
          }
        : function (l, s, f, d) {
            d === void 0 && (d = f), (l[d] = s[f]);
          }),
    t =
      (N && N.__exportStar) ||
      function (l, s) {
        for (var f in l)
          f !== "default" &&
            !Object.prototype.hasOwnProperty.call(s, f) &&
            e(s, l, f);
      };
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.DomHandler = void 0);
  var u = Se,
    i = D;
  t(D, r);
  var n = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 },
    o = (function () {
      function l(s, f, d) {
        (this.dom = []),
          (this.root = new i.Document(this.dom)),
          (this.done = !1),
          (this.tagStack = [this.root]),
          (this.lastNode = null),
          (this.parser = null),
          typeof f == "function" && ((d = f), (f = n)),
          typeof s == "object" && ((f = s), (s = void 0)),
          (this.callback = s ?? null),
          (this.options = f ?? n),
          (this.elementCB = d ?? null);
      }
      return (
        (l.prototype.onparserinit = function (s) {
          this.parser = s;
        }),
        (l.prototype.onreset = function () {
          (this.dom = []),
            (this.root = new i.Document(this.dom)),
            (this.done = !1),
            (this.tagStack = [this.root]),
            (this.lastNode = null),
            (this.parser = null);
        }),
        (l.prototype.onend = function () {
          this.done ||
            ((this.done = !0), (this.parser = null), this.handleCallback(null));
        }),
        (l.prototype.onerror = function (s) {
          this.handleCallback(s);
        }),
        (l.prototype.onclosetag = function () {
          this.lastNode = null;
          var s = this.tagStack.pop();
          this.options.withEndIndices && (s.endIndex = this.parser.endIndex),
            this.elementCB && this.elementCB(s);
        }),
        (l.prototype.onopentag = function (s, f) {
          var d = this.options.xmlMode ? u.ElementType.Tag : void 0,
            p = new i.Element(s, f, void 0, d);
          this.addNode(p), this.tagStack.push(p);
        }),
        (l.prototype.ontext = function (s) {
          var f = this.lastNode;
          if (f && f.type === u.ElementType.Text)
            (f.data += s),
              this.options.withEndIndices &&
                (f.endIndex = this.parser.endIndex);
          else {
            var d = new i.Text(s);
            this.addNode(d), (this.lastNode = d);
          }
        }),
        (l.prototype.oncomment = function (s) {
          if (this.lastNode && this.lastNode.type === u.ElementType.Comment) {
            this.lastNode.data += s;
            return;
          }
          var f = new i.Comment(s);
          this.addNode(f), (this.lastNode = f);
        }),
        (l.prototype.oncommentend = function () {
          this.lastNode = null;
        }),
        (l.prototype.oncdatastart = function () {
          var s = new i.Text(""),
            f = new i.CDATA([s]);
          this.addNode(f), (s.parent = f), (this.lastNode = s);
        }),
        (l.prototype.oncdataend = function () {
          this.lastNode = null;
        }),
        (l.prototype.onprocessinginstruction = function (s, f) {
          var d = new i.ProcessingInstruction(s, f);
          this.addNode(d);
        }),
        (l.prototype.handleCallback = function (s) {
          if (typeof this.callback == "function") this.callback(s, this.dom);
          else if (s) throw s;
        }),
        (l.prototype.addNode = function (s) {
          var f = this.tagStack[this.tagStack.length - 1],
            d = f.children[f.children.length - 1];
          this.options.withStartIndices &&
            (s.startIndex = this.parser.startIndex),
            this.options.withEndIndices && (s.endIndex = this.parser.endIndex),
            f.children.push(s),
            d && ((s.prev = d), (d.next = s)),
            (s.parent = f),
            (this.lastNode = null);
        }),
        l
      );
    })();
  (r.DomHandler = o), (r.default = o);
})(ae);
var Ke = {},
  J = {},
  je = {},
  rr = {},
  de = {},
  Kt = {};
Object.defineProperty(Kt, "__esModule", { value: !0 });
function Ve(r) {
  for (var e = 1; e < r.length; e++) r[e][0] += r[e - 1][0] + 1;
  return r;
}
Kt.default = new Map(
  Ve([
    [9, "&Tab;"],
    [0, "&NewLine;"],
    [22, "&excl;"],
    [0, "&quot;"],
    [0, "&num;"],
    [0, "&dollar;"],
    [0, "&percnt;"],
    [0, "&amp;"],
    [0, "&apos;"],
    [0, "&lpar;"],
    [0, "&rpar;"],
    [0, "&ast;"],
    [0, "&plus;"],
    [0, "&comma;"],
    [1, "&period;"],
    [0, "&sol;"],
    [10, "&colon;"],
    [0, "&semi;"],
    [0, { v: "&lt;", n: 8402, o: "&nvlt;" }],
    [0, { v: "&equals;", n: 8421, o: "&bne;" }],
    [0, { v: "&gt;", n: 8402, o: "&nvgt;" }],
    [0, "&quest;"],
    [0, "&commat;"],
    [26, "&lbrack;"],
    [0, "&bsol;"],
    [0, "&rbrack;"],
    [0, "&Hat;"],
    [0, "&lowbar;"],
    [0, "&DiacriticalGrave;"],
    [5, { n: 106, o: "&fjlig;" }],
    [20, "&lbrace;"],
    [0, "&verbar;"],
    [0, "&rbrace;"],
    [34, "&nbsp;"],
    [0, "&iexcl;"],
    [0, "&cent;"],
    [0, "&pound;"],
    [0, "&curren;"],
    [0, "&yen;"],
    [0, "&brvbar;"],
    [0, "&sect;"],
    [0, "&die;"],
    [0, "&copy;"],
    [0, "&ordf;"],
    [0, "&laquo;"],
    [0, "&not;"],
    [0, "&shy;"],
    [0, "&circledR;"],
    [0, "&macr;"],
    [0, "&deg;"],
    [0, "&PlusMinus;"],
    [0, "&sup2;"],
    [0, "&sup3;"],
    [0, "&acute;"],
    [0, "&micro;"],
    [0, "&para;"],
    [0, "&centerdot;"],
    [0, "&cedil;"],
    [0, "&sup1;"],
    [0, "&ordm;"],
    [0, "&raquo;"],
    [0, "&frac14;"],
    [0, "&frac12;"],
    [0, "&frac34;"],
    [0, "&iquest;"],
    [0, "&Agrave;"],
    [0, "&Aacute;"],
    [0, "&Acirc;"],
    [0, "&Atilde;"],
    [0, "&Auml;"],
    [0, "&angst;"],
    [0, "&AElig;"],
    [0, "&Ccedil;"],
    [0, "&Egrave;"],
    [0, "&Eacute;"],
    [0, "&Ecirc;"],
    [0, "&Euml;"],
    [0, "&Igrave;"],
    [0, "&Iacute;"],
    [0, "&Icirc;"],
    [0, "&Iuml;"],
    [0, "&ETH;"],
    [0, "&Ntilde;"],
    [0, "&Ograve;"],
    [0, "&Oacute;"],
    [0, "&Ocirc;"],
    [0, "&Otilde;"],
    [0, "&Ouml;"],
    [0, "&times;"],
    [0, "&Oslash;"],
    [0, "&Ugrave;"],
    [0, "&Uacute;"],
    [0, "&Ucirc;"],
    [0, "&Uuml;"],
    [0, "&Yacute;"],
    [0, "&THORN;"],
    [0, "&szlig;"],
    [0, "&agrave;"],
    [0, "&aacute;"],
    [0, "&acirc;"],
    [0, "&atilde;"],
    [0, "&auml;"],
    [0, "&aring;"],
    [0, "&aelig;"],
    [0, "&ccedil;"],
    [0, "&egrave;"],
    [0, "&eacute;"],
    [0, "&ecirc;"],
    [0, "&euml;"],
    [0, "&igrave;"],
    [0, "&iacute;"],
    [0, "&icirc;"],
    [0, "&iuml;"],
    [0, "&eth;"],
    [0, "&ntilde;"],
    [0, "&ograve;"],
    [0, "&oacute;"],
    [0, "&ocirc;"],
    [0, "&otilde;"],
    [0, "&ouml;"],
    [0, "&div;"],
    [0, "&oslash;"],
    [0, "&ugrave;"],
    [0, "&uacute;"],
    [0, "&ucirc;"],
    [0, "&uuml;"],
    [0, "&yacute;"],
    [0, "&thorn;"],
    [0, "&yuml;"],
    [0, "&Amacr;"],
    [0, "&amacr;"],
    [0, "&Abreve;"],
    [0, "&abreve;"],
    [0, "&Aogon;"],
    [0, "&aogon;"],
    [0, "&Cacute;"],
    [0, "&cacute;"],
    [0, "&Ccirc;"],
    [0, "&ccirc;"],
    [0, "&Cdot;"],
    [0, "&cdot;"],
    [0, "&Ccaron;"],
    [0, "&ccaron;"],
    [0, "&Dcaron;"],
    [0, "&dcaron;"],
    [0, "&Dstrok;"],
    [0, "&dstrok;"],
    [0, "&Emacr;"],
    [0, "&emacr;"],
    [2, "&Edot;"],
    [0, "&edot;"],
    [0, "&Eogon;"],
    [0, "&eogon;"],
    [0, "&Ecaron;"],
    [0, "&ecaron;"],
    [0, "&Gcirc;"],
    [0, "&gcirc;"],
    [0, "&Gbreve;"],
    [0, "&gbreve;"],
    [0, "&Gdot;"],
    [0, "&gdot;"],
    [0, "&Gcedil;"],
    [1, "&Hcirc;"],
    [0, "&hcirc;"],
    [0, "&Hstrok;"],
    [0, "&hstrok;"],
    [0, "&Itilde;"],
    [0, "&itilde;"],
    [0, "&Imacr;"],
    [0, "&imacr;"],
    [2, "&Iogon;"],
    [0, "&iogon;"],
    [0, "&Idot;"],
    [0, "&imath;"],
    [0, "&IJlig;"],
    [0, "&ijlig;"],
    [0, "&Jcirc;"],
    [0, "&jcirc;"],
    [0, "&Kcedil;"],
    [0, "&kcedil;"],
    [0, "&kgreen;"],
    [0, "&Lacute;"],
    [0, "&lacute;"],
    [0, "&Lcedil;"],
    [0, "&lcedil;"],
    [0, "&Lcaron;"],
    [0, "&lcaron;"],
    [0, "&Lmidot;"],
    [0, "&lmidot;"],
    [0, "&Lstrok;"],
    [0, "&lstrok;"],
    [0, "&Nacute;"],
    [0, "&nacute;"],
    [0, "&Ncedil;"],
    [0, "&ncedil;"],
    [0, "&Ncaron;"],
    [0, "&ncaron;"],
    [0, "&napos;"],
    [0, "&ENG;"],
    [0, "&eng;"],
    [0, "&Omacr;"],
    [0, "&omacr;"],
    [2, "&Odblac;"],
    [0, "&odblac;"],
    [0, "&OElig;"],
    [0, "&oelig;"],
    [0, "&Racute;"],
    [0, "&racute;"],
    [0, "&Rcedil;"],
    [0, "&rcedil;"],
    [0, "&Rcaron;"],
    [0, "&rcaron;"],
    [0, "&Sacute;"],
    [0, "&sacute;"],
    [0, "&Scirc;"],
    [0, "&scirc;"],
    [0, "&Scedil;"],
    [0, "&scedil;"],
    [0, "&Scaron;"],
    [0, "&scaron;"],
    [0, "&Tcedil;"],
    [0, "&tcedil;"],
    [0, "&Tcaron;"],
    [0, "&tcaron;"],
    [0, "&Tstrok;"],
    [0, "&tstrok;"],
    [0, "&Utilde;"],
    [0, "&utilde;"],
    [0, "&Umacr;"],
    [0, "&umacr;"],
    [0, "&Ubreve;"],
    [0, "&ubreve;"],
    [0, "&Uring;"],
    [0, "&uring;"],
    [0, "&Udblac;"],
    [0, "&udblac;"],
    [0, "&Uogon;"],
    [0, "&uogon;"],
    [0, "&Wcirc;"],
    [0, "&wcirc;"],
    [0, "&Ycirc;"],
    [0, "&ycirc;"],
    [0, "&Yuml;"],
    [0, "&Zacute;"],
    [0, "&zacute;"],
    [0, "&Zdot;"],
    [0, "&zdot;"],
    [0, "&Zcaron;"],
    [0, "&zcaron;"],
    [19, "&fnof;"],
    [34, "&imped;"],
    [63, "&gacute;"],
    [65, "&jmath;"],
    [142, "&circ;"],
    [0, "&caron;"],
    [16, "&breve;"],
    [0, "&DiacriticalDot;"],
    [0, "&ring;"],
    [0, "&ogon;"],
    [0, "&DiacriticalTilde;"],
    [0, "&dblac;"],
    [51, "&DownBreve;"],
    [127, "&Alpha;"],
    [0, "&Beta;"],
    [0, "&Gamma;"],
    [0, "&Delta;"],
    [0, "&Epsilon;"],
    [0, "&Zeta;"],
    [0, "&Eta;"],
    [0, "&Theta;"],
    [0, "&Iota;"],
    [0, "&Kappa;"],
    [0, "&Lambda;"],
    [0, "&Mu;"],
    [0, "&Nu;"],
    [0, "&Xi;"],
    [0, "&Omicron;"],
    [0, "&Pi;"],
    [0, "&Rho;"],
    [1, "&Sigma;"],
    [0, "&Tau;"],
    [0, "&Upsilon;"],
    [0, "&Phi;"],
    [0, "&Chi;"],
    [0, "&Psi;"],
    [0, "&ohm;"],
    [7, "&alpha;"],
    [0, "&beta;"],
    [0, "&gamma;"],
    [0, "&delta;"],
    [0, "&epsi;"],
    [0, "&zeta;"],
    [0, "&eta;"],
    [0, "&theta;"],
    [0, "&iota;"],
    [0, "&kappa;"],
    [0, "&lambda;"],
    [0, "&mu;"],
    [0, "&nu;"],
    [0, "&xi;"],
    [0, "&omicron;"],
    [0, "&pi;"],
    [0, "&rho;"],
    [0, "&sigmaf;"],
    [0, "&sigma;"],
    [0, "&tau;"],
    [0, "&upsi;"],
    [0, "&phi;"],
    [0, "&chi;"],
    [0, "&psi;"],
    [0, "&omega;"],
    [7, "&thetasym;"],
    [0, "&Upsi;"],
    [2, "&phiv;"],
    [0, "&piv;"],
    [5, "&Gammad;"],
    [0, "&digamma;"],
    [18, "&kappav;"],
    [0, "&rhov;"],
    [3, "&epsiv;"],
    [0, "&backepsilon;"],
    [10, "&IOcy;"],
    [0, "&DJcy;"],
    [0, "&GJcy;"],
    [0, "&Jukcy;"],
    [0, "&DScy;"],
    [0, "&Iukcy;"],
    [0, "&YIcy;"],
    [0, "&Jsercy;"],
    [0, "&LJcy;"],
    [0, "&NJcy;"],
    [0, "&TSHcy;"],
    [0, "&KJcy;"],
    [1, "&Ubrcy;"],
    [0, "&DZcy;"],
    [0, "&Acy;"],
    [0, "&Bcy;"],
    [0, "&Vcy;"],
    [0, "&Gcy;"],
    [0, "&Dcy;"],
    [0, "&IEcy;"],
    [0, "&ZHcy;"],
    [0, "&Zcy;"],
    [0, "&Icy;"],
    [0, "&Jcy;"],
    [0, "&Kcy;"],
    [0, "&Lcy;"],
    [0, "&Mcy;"],
    [0, "&Ncy;"],
    [0, "&Ocy;"],
    [0, "&Pcy;"],
    [0, "&Rcy;"],
    [0, "&Scy;"],
    [0, "&Tcy;"],
    [0, "&Ucy;"],
    [0, "&Fcy;"],
    [0, "&KHcy;"],
    [0, "&TScy;"],
    [0, "&CHcy;"],
    [0, "&SHcy;"],
    [0, "&SHCHcy;"],
    [0, "&HARDcy;"],
    [0, "&Ycy;"],
    [0, "&SOFTcy;"],
    [0, "&Ecy;"],
    [0, "&YUcy;"],
    [0, "&YAcy;"],
    [0, "&acy;"],
    [0, "&bcy;"],
    [0, "&vcy;"],
    [0, "&gcy;"],
    [0, "&dcy;"],
    [0, "&iecy;"],
    [0, "&zhcy;"],
    [0, "&zcy;"],
    [0, "&icy;"],
    [0, "&jcy;"],
    [0, "&kcy;"],
    [0, "&lcy;"],
    [0, "&mcy;"],
    [0, "&ncy;"],
    [0, "&ocy;"],
    [0, "&pcy;"],
    [0, "&rcy;"],
    [0, "&scy;"],
    [0, "&tcy;"],
    [0, "&ucy;"],
    [0, "&fcy;"],
    [0, "&khcy;"],
    [0, "&tscy;"],
    [0, "&chcy;"],
    [0, "&shcy;"],
    [0, "&shchcy;"],
    [0, "&hardcy;"],
    [0, "&ycy;"],
    [0, "&softcy;"],
    [0, "&ecy;"],
    [0, "&yucy;"],
    [0, "&yacy;"],
    [1, "&iocy;"],
    [0, "&djcy;"],
    [0, "&gjcy;"],
    [0, "&jukcy;"],
    [0, "&dscy;"],
    [0, "&iukcy;"],
    [0, "&yicy;"],
    [0, "&jsercy;"],
    [0, "&ljcy;"],
    [0, "&njcy;"],
    [0, "&tshcy;"],
    [0, "&kjcy;"],
    [1, "&ubrcy;"],
    [0, "&dzcy;"],
    [7074, "&ensp;"],
    [0, "&emsp;"],
    [0, "&emsp13;"],
    [0, "&emsp14;"],
    [1, "&numsp;"],
    [0, "&puncsp;"],
    [0, "&ThinSpace;"],
    [0, "&hairsp;"],
    [0, "&NegativeMediumSpace;"],
    [0, "&zwnj;"],
    [0, "&zwj;"],
    [0, "&lrm;"],
    [0, "&rlm;"],
    [0, "&dash;"],
    [2, "&ndash;"],
    [0, "&mdash;"],
    [0, "&horbar;"],
    [0, "&Verbar;"],
    [1, "&lsquo;"],
    [0, "&CloseCurlyQuote;"],
    [0, "&lsquor;"],
    [1, "&ldquo;"],
    [0, "&CloseCurlyDoubleQuote;"],
    [0, "&bdquo;"],
    [1, "&dagger;"],
    [0, "&Dagger;"],
    [0, "&bull;"],
    [2, "&nldr;"],
    [0, "&hellip;"],
    [9, "&permil;"],
    [0, "&pertenk;"],
    [0, "&prime;"],
    [0, "&Prime;"],
    [0, "&tprime;"],
    [0, "&backprime;"],
    [3, "&lsaquo;"],
    [0, "&rsaquo;"],
    [3, "&oline;"],
    [2, "&caret;"],
    [1, "&hybull;"],
    [0, "&frasl;"],
    [10, "&bsemi;"],
    [7, "&qprime;"],
    [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }],
    [0, "&NoBreak;"],
    [0, "&af;"],
    [0, "&InvisibleTimes;"],
    [0, "&ic;"],
    [72, "&euro;"],
    [46, "&tdot;"],
    [0, "&DotDot;"],
    [37, "&complexes;"],
    [2, "&incare;"],
    [4, "&gscr;"],
    [0, "&hamilt;"],
    [0, "&Hfr;"],
    [0, "&Hopf;"],
    [0, "&planckh;"],
    [0, "&hbar;"],
    [0, "&imagline;"],
    [0, "&Ifr;"],
    [0, "&lagran;"],
    [0, "&ell;"],
    [1, "&naturals;"],
    [0, "&numero;"],
    [0, "&copysr;"],
    [0, "&weierp;"],
    [0, "&Popf;"],
    [0, "&Qopf;"],
    [0, "&realine;"],
    [0, "&real;"],
    [0, "&reals;"],
    [0, "&rx;"],
    [3, "&trade;"],
    [1, "&integers;"],
    [2, "&mho;"],
    [0, "&zeetrf;"],
    [0, "&iiota;"],
    [2, "&bernou;"],
    [0, "&Cayleys;"],
    [1, "&escr;"],
    [0, "&Escr;"],
    [0, "&Fouriertrf;"],
    [1, "&Mellintrf;"],
    [0, "&order;"],
    [0, "&alefsym;"],
    [0, "&beth;"],
    [0, "&gimel;"],
    [0, "&daleth;"],
    [12, "&CapitalDifferentialD;"],
    [0, "&dd;"],
    [0, "&ee;"],
    [0, "&ii;"],
    [10, "&frac13;"],
    [0, "&frac23;"],
    [0, "&frac15;"],
    [0, "&frac25;"],
    [0, "&frac35;"],
    [0, "&frac45;"],
    [0, "&frac16;"],
    [0, "&frac56;"],
    [0, "&frac18;"],
    [0, "&frac38;"],
    [0, "&frac58;"],
    [0, "&frac78;"],
    [49, "&larr;"],
    [0, "&ShortUpArrow;"],
    [0, "&rarr;"],
    [0, "&darr;"],
    [0, "&harr;"],
    [0, "&updownarrow;"],
    [0, "&nwarr;"],
    [0, "&nearr;"],
    [0, "&LowerRightArrow;"],
    [0, "&LowerLeftArrow;"],
    [0, "&nlarr;"],
    [0, "&nrarr;"],
    [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }],
    [0, "&Larr;"],
    [0, "&Uarr;"],
    [0, "&Rarr;"],
    [0, "&Darr;"],
    [0, "&larrtl;"],
    [0, "&rarrtl;"],
    [0, "&LeftTeeArrow;"],
    [0, "&mapstoup;"],
    [0, "&map;"],
    [0, "&DownTeeArrow;"],
    [1, "&hookleftarrow;"],
    [0, "&hookrightarrow;"],
    [0, "&larrlp;"],
    [0, "&looparrowright;"],
    [0, "&harrw;"],
    [0, "&nharr;"],
    [1, "&lsh;"],
    [0, "&rsh;"],
    [0, "&ldsh;"],
    [0, "&rdsh;"],
    [1, "&crarr;"],
    [0, "&cularr;"],
    [0, "&curarr;"],
    [2, "&circlearrowleft;"],
    [0, "&circlearrowright;"],
    [0, "&leftharpoonup;"],
    [0, "&DownLeftVector;"],
    [0, "&RightUpVector;"],
    [0, "&LeftUpVector;"],
    [0, "&rharu;"],
    [0, "&DownRightVector;"],
    [0, "&dharr;"],
    [0, "&dharl;"],
    [0, "&RightArrowLeftArrow;"],
    [0, "&udarr;"],
    [0, "&LeftArrowRightArrow;"],
    [0, "&leftleftarrows;"],
    [0, "&upuparrows;"],
    [0, "&rightrightarrows;"],
    [0, "&ddarr;"],
    [0, "&leftrightharpoons;"],
    [0, "&Equilibrium;"],
    [0, "&nlArr;"],
    [0, "&nhArr;"],
    [0, "&nrArr;"],
    [0, "&DoubleLeftArrow;"],
    [0, "&DoubleUpArrow;"],
    [0, "&DoubleRightArrow;"],
    [0, "&dArr;"],
    [0, "&DoubleLeftRightArrow;"],
    [0, "&DoubleUpDownArrow;"],
    [0, "&nwArr;"],
    [0, "&neArr;"],
    [0, "&seArr;"],
    [0, "&swArr;"],
    [0, "&lAarr;"],
    [0, "&rAarr;"],
    [1, "&zigrarr;"],
    [6, "&larrb;"],
    [0, "&rarrb;"],
    [15, "&DownArrowUpArrow;"],
    [7, "&loarr;"],
    [0, "&roarr;"],
    [0, "&hoarr;"],
    [0, "&forall;"],
    [0, "&comp;"],
    [0, { v: "&part;", n: 824, o: "&npart;" }],
    [0, "&exist;"],
    [0, "&nexist;"],
    [0, "&empty;"],
    [1, "&Del;"],
    [0, "&Element;"],
    [0, "&NotElement;"],
    [1, "&ni;"],
    [0, "&notni;"],
    [2, "&prod;"],
    [0, "&coprod;"],
    [0, "&sum;"],
    [0, "&minus;"],
    [0, "&MinusPlus;"],
    [0, "&dotplus;"],
    [1, "&Backslash;"],
    [0, "&lowast;"],
    [0, "&compfn;"],
    [1, "&radic;"],
    [2, "&prop;"],
    [0, "&infin;"],
    [0, "&angrt;"],
    [0, { v: "&ang;", n: 8402, o: "&nang;" }],
    [0, "&angmsd;"],
    [0, "&angsph;"],
    [0, "&mid;"],
    [0, "&nmid;"],
    [0, "&DoubleVerticalBar;"],
    [0, "&NotDoubleVerticalBar;"],
    [0, "&and;"],
    [0, "&or;"],
    [0, { v: "&cap;", n: 65024, o: "&caps;" }],
    [0, { v: "&cup;", n: 65024, o: "&cups;" }],
    [0, "&int;"],
    [0, "&Int;"],
    [0, "&iiint;"],
    [0, "&conint;"],
    [0, "&Conint;"],
    [0, "&Cconint;"],
    [0, "&cwint;"],
    [0, "&ClockwiseContourIntegral;"],
    [0, "&awconint;"],
    [0, "&there4;"],
    [0, "&becaus;"],
    [0, "&ratio;"],
    [0, "&Colon;"],
    [0, "&dotminus;"],
    [1, "&mDDot;"],
    [0, "&homtht;"],
    [0, { v: "&sim;", n: 8402, o: "&nvsim;" }],
    [0, { v: "&backsim;", n: 817, o: "&race;" }],
    [0, { v: "&ac;", n: 819, o: "&acE;" }],
    [0, "&acd;"],
    [0, "&VerticalTilde;"],
    [0, "&NotTilde;"],
    [0, { v: "&eqsim;", n: 824, o: "&nesim;" }],
    [0, "&sime;"],
    [0, "&NotTildeEqual;"],
    [0, "&cong;"],
    [0, "&simne;"],
    [0, "&ncong;"],
    [0, "&ap;"],
    [0, "&nap;"],
    [0, "&ape;"],
    [0, { v: "&apid;", n: 824, o: "&napid;" }],
    [0, "&backcong;"],
    [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }],
    [0, { v: "&bump;", n: 824, o: "&nbump;" }],
    [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }],
    [0, { v: "&doteq;", n: 824, o: "&nedot;" }],
    [0, "&doteqdot;"],
    [0, "&efDot;"],
    [0, "&erDot;"],
    [0, "&Assign;"],
    [0, "&ecolon;"],
    [0, "&ecir;"],
    [0, "&circeq;"],
    [1, "&wedgeq;"],
    [0, "&veeeq;"],
    [1, "&triangleq;"],
    [2, "&equest;"],
    [0, "&ne;"],
    [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }],
    [0, "&nequiv;"],
    [1, { v: "&le;", n: 8402, o: "&nvle;" }],
    [0, { v: "&ge;", n: 8402, o: "&nvge;" }],
    [0, { v: "&lE;", n: 824, o: "&nlE;" }],
    [0, { v: "&gE;", n: 824, o: "&ngE;" }],
    [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }],
    [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }],
    [
      0,
      {
        v: "&ll;",
        n: new Map(
          Ve([
            [824, "&nLtv;"],
            [7577, "&nLt;"],
          ])
        ),
      },
    ],
    [
      0,
      {
        v: "&gg;",
        n: new Map(
          Ve([
            [824, "&nGtv;"],
            [7577, "&nGt;"],
          ])
        ),
      },
    ],
    [0, "&between;"],
    [0, "&NotCupCap;"],
    [0, "&nless;"],
    [0, "&ngt;"],
    [0, "&nle;"],
    [0, "&nge;"],
    [0, "&lesssim;"],
    [0, "&GreaterTilde;"],
    [0, "&nlsim;"],
    [0, "&ngsim;"],
    [0, "&LessGreater;"],
    [0, "&gl;"],
    [0, "&NotLessGreater;"],
    [0, "&NotGreaterLess;"],
    [0, "&pr;"],
    [0, "&sc;"],
    [0, "&prcue;"],
    [0, "&sccue;"],
    [0, "&PrecedesTilde;"],
    [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }],
    [0, "&NotPrecedes;"],
    [0, "&NotSucceeds;"],
    [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }],
    [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }],
    [0, "&nsub;"],
    [0, "&nsup;"],
    [0, "&sube;"],
    [0, "&supe;"],
    [0, "&NotSubsetEqual;"],
    [0, "&NotSupersetEqual;"],
    [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }],
    [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }],
    [1, "&cupdot;"],
    [0, "&UnionPlus;"],
    [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }],
    [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }],
    [0, "&sqsube;"],
    [0, "&sqsupe;"],
    [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }],
    [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }],
    [0, "&CirclePlus;"],
    [0, "&CircleMinus;"],
    [0, "&CircleTimes;"],
    [0, "&osol;"],
    [0, "&CircleDot;"],
    [0, "&circledcirc;"],
    [0, "&circledast;"],
    [1, "&circleddash;"],
    [0, "&boxplus;"],
    [0, "&boxminus;"],
    [0, "&boxtimes;"],
    [0, "&dotsquare;"],
    [0, "&RightTee;"],
    [0, "&dashv;"],
    [0, "&DownTee;"],
    [0, "&bot;"],
    [1, "&models;"],
    [0, "&DoubleRightTee;"],
    [0, "&Vdash;"],
    [0, "&Vvdash;"],
    [0, "&VDash;"],
    [0, "&nvdash;"],
    [0, "&nvDash;"],
    [0, "&nVdash;"],
    [0, "&nVDash;"],
    [0, "&prurel;"],
    [1, "&LeftTriangle;"],
    [0, "&RightTriangle;"],
    [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }],
    [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }],
    [0, "&origof;"],
    [0, "&imof;"],
    [0, "&multimap;"],
    [0, "&hercon;"],
    [0, "&intcal;"],
    [0, "&veebar;"],
    [1, "&barvee;"],
    [0, "&angrtvb;"],
    [0, "&lrtri;"],
    [0, "&bigwedge;"],
    [0, "&bigvee;"],
    [0, "&bigcap;"],
    [0, "&bigcup;"],
    [0, "&diam;"],
    [0, "&sdot;"],
    [0, "&sstarf;"],
    [0, "&divideontimes;"],
    [0, "&bowtie;"],
    [0, "&ltimes;"],
    [0, "&rtimes;"],
    [0, "&leftthreetimes;"],
    [0, "&rightthreetimes;"],
    [0, "&backsimeq;"],
    [0, "&curlyvee;"],
    [0, "&curlywedge;"],
    [0, "&Sub;"],
    [0, "&Sup;"],
    [0, "&Cap;"],
    [0, "&Cup;"],
    [0, "&fork;"],
    [0, "&epar;"],
    [0, "&lessdot;"],
    [0, "&gtdot;"],
    [0, { v: "&Ll;", n: 824, o: "&nLl;" }],
    [0, { v: "&Gg;", n: 824, o: "&nGg;" }],
    [0, { v: "&leg;", n: 65024, o: "&lesg;" }],
    [0, { v: "&gel;", n: 65024, o: "&gesl;" }],
    [2, "&cuepr;"],
    [0, "&cuesc;"],
    [0, "&NotPrecedesSlantEqual;"],
    [0, "&NotSucceedsSlantEqual;"],
    [0, "&NotSquareSubsetEqual;"],
    [0, "&NotSquareSupersetEqual;"],
    [2, "&lnsim;"],
    [0, "&gnsim;"],
    [0, "&precnsim;"],
    [0, "&scnsim;"],
    [0, "&nltri;"],
    [0, "&NotRightTriangle;"],
    [0, "&nltrie;"],
    [0, "&NotRightTriangleEqual;"],
    [0, "&vellip;"],
    [0, "&ctdot;"],
    [0, "&utdot;"],
    [0, "&dtdot;"],
    [0, "&disin;"],
    [0, "&isinsv;"],
    [0, "&isins;"],
    [0, { v: "&isindot;", n: 824, o: "&notindot;" }],
    [0, "&notinvc;"],
    [0, "&notinvb;"],
    [1, { v: "&isinE;", n: 824, o: "&notinE;" }],
    [0, "&nisd;"],
    [0, "&xnis;"],
    [0, "&nis;"],
    [0, "&notnivc;"],
    [0, "&notnivb;"],
    [6, "&barwed;"],
    [0, "&Barwed;"],
    [1, "&lceil;"],
    [0, "&rceil;"],
    [0, "&LeftFloor;"],
    [0, "&rfloor;"],
    [0, "&drcrop;"],
    [0, "&dlcrop;"],
    [0, "&urcrop;"],
    [0, "&ulcrop;"],
    [0, "&bnot;"],
    [1, "&profline;"],
    [0, "&profsurf;"],
    [1, "&telrec;"],
    [0, "&target;"],
    [5, "&ulcorn;"],
    [0, "&urcorn;"],
    [0, "&dlcorn;"],
    [0, "&drcorn;"],
    [2, "&frown;"],
    [0, "&smile;"],
    [9, "&cylcty;"],
    [0, "&profalar;"],
    [7, "&topbot;"],
    [6, "&ovbar;"],
    [1, "&solbar;"],
    [60, "&angzarr;"],
    [51, "&lmoustache;"],
    [0, "&rmoustache;"],
    [2, "&OverBracket;"],
    [0, "&bbrk;"],
    [0, "&bbrktbrk;"],
    [37, "&OverParenthesis;"],
    [0, "&UnderParenthesis;"],
    [0, "&OverBrace;"],
    [0, "&UnderBrace;"],
    [2, "&trpezium;"],
    [4, "&elinters;"],
    [59, "&blank;"],
    [164, "&circledS;"],
    [55, "&boxh;"],
    [1, "&boxv;"],
    [9, "&boxdr;"],
    [3, "&boxdl;"],
    [3, "&boxur;"],
    [3, "&boxul;"],
    [3, "&boxvr;"],
    [7, "&boxvl;"],
    [7, "&boxhd;"],
    [7, "&boxhu;"],
    [7, "&boxvh;"],
    [19, "&boxH;"],
    [0, "&boxV;"],
    [0, "&boxdR;"],
    [0, "&boxDr;"],
    [0, "&boxDR;"],
    [0, "&boxdL;"],
    [0, "&boxDl;"],
    [0, "&boxDL;"],
    [0, "&boxuR;"],
    [0, "&boxUr;"],
    [0, "&boxUR;"],
    [0, "&boxuL;"],
    [0, "&boxUl;"],
    [0, "&boxUL;"],
    [0, "&boxvR;"],
    [0, "&boxVr;"],
    [0, "&boxVR;"],
    [0, "&boxvL;"],
    [0, "&boxVl;"],
    [0, "&boxVL;"],
    [0, "&boxHd;"],
    [0, "&boxhD;"],
    [0, "&boxHD;"],
    [0, "&boxHu;"],
    [0, "&boxhU;"],
    [0, "&boxHU;"],
    [0, "&boxvH;"],
    [0, "&boxVh;"],
    [0, "&boxVH;"],
    [19, "&uhblk;"],
    [3, "&lhblk;"],
    [3, "&block;"],
    [8, "&blk14;"],
    [0, "&blk12;"],
    [0, "&blk34;"],
    [13, "&square;"],
    [8, "&blacksquare;"],
    [0, "&EmptyVerySmallSquare;"],
    [1, "&rect;"],
    [0, "&marker;"],
    [2, "&fltns;"],
    [1, "&bigtriangleup;"],
    [0, "&blacktriangle;"],
    [0, "&triangle;"],
    [2, "&blacktriangleright;"],
    [0, "&rtri;"],
    [3, "&bigtriangledown;"],
    [0, "&blacktriangledown;"],
    [0, "&dtri;"],
    [2, "&blacktriangleleft;"],
    [0, "&ltri;"],
    [6, "&loz;"],
    [0, "&cir;"],
    [32, "&tridot;"],
    [2, "&bigcirc;"],
    [8, "&ultri;"],
    [0, "&urtri;"],
    [0, "&lltri;"],
    [0, "&EmptySmallSquare;"],
    [0, "&FilledSmallSquare;"],
    [8, "&bigstar;"],
    [0, "&star;"],
    [7, "&phone;"],
    [49, "&female;"],
    [1, "&male;"],
    [29, "&spades;"],
    [2, "&clubs;"],
    [1, "&hearts;"],
    [0, "&diamondsuit;"],
    [3, "&sung;"],
    [2, "&flat;"],
    [0, "&natural;"],
    [0, "&sharp;"],
    [163, "&check;"],
    [3, "&cross;"],
    [8, "&malt;"],
    [21, "&sext;"],
    [33, "&VerticalSeparator;"],
    [25, "&lbbrk;"],
    [0, "&rbbrk;"],
    [84, "&bsolhsub;"],
    [0, "&suphsol;"],
    [28, "&LeftDoubleBracket;"],
    [0, "&RightDoubleBracket;"],
    [0, "&lang;"],
    [0, "&rang;"],
    [0, "&Lang;"],
    [0, "&Rang;"],
    [0, "&loang;"],
    [0, "&roang;"],
    [7, "&longleftarrow;"],
    [0, "&longrightarrow;"],
    [0, "&longleftrightarrow;"],
    [0, "&DoubleLongLeftArrow;"],
    [0, "&DoubleLongRightArrow;"],
    [0, "&DoubleLongLeftRightArrow;"],
    [1, "&longmapsto;"],
    [2, "&dzigrarr;"],
    [258, "&nvlArr;"],
    [0, "&nvrArr;"],
    [0, "&nvHarr;"],
    [0, "&Map;"],
    [6, "&lbarr;"],
    [0, "&bkarow;"],
    [0, "&lBarr;"],
    [0, "&dbkarow;"],
    [0, "&drbkarow;"],
    [0, "&DDotrahd;"],
    [0, "&UpArrowBar;"],
    [0, "&DownArrowBar;"],
    [2, "&Rarrtl;"],
    [2, "&latail;"],
    [0, "&ratail;"],
    [0, "&lAtail;"],
    [0, "&rAtail;"],
    [0, "&larrfs;"],
    [0, "&rarrfs;"],
    [0, "&larrbfs;"],
    [0, "&rarrbfs;"],
    [2, "&nwarhk;"],
    [0, "&nearhk;"],
    [0, "&hksearow;"],
    [0, "&hkswarow;"],
    [0, "&nwnear;"],
    [0, "&nesear;"],
    [0, "&seswar;"],
    [0, "&swnwar;"],
    [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }],
    [1, "&cudarrr;"],
    [0, "&ldca;"],
    [0, "&rdca;"],
    [0, "&cudarrl;"],
    [0, "&larrpl;"],
    [2, "&curarrm;"],
    [0, "&cularrp;"],
    [7, "&rarrpl;"],
    [2, "&harrcir;"],
    [0, "&Uarrocir;"],
    [0, "&lurdshar;"],
    [0, "&ldrushar;"],
    [2, "&LeftRightVector;"],
    [0, "&RightUpDownVector;"],
    [0, "&DownLeftRightVector;"],
    [0, "&LeftUpDownVector;"],
    [0, "&LeftVectorBar;"],
    [0, "&RightVectorBar;"],
    [0, "&RightUpVectorBar;"],
    [0, "&RightDownVectorBar;"],
    [0, "&DownLeftVectorBar;"],
    [0, "&DownRightVectorBar;"],
    [0, "&LeftUpVectorBar;"],
    [0, "&LeftDownVectorBar;"],
    [0, "&LeftTeeVector;"],
    [0, "&RightTeeVector;"],
    [0, "&RightUpTeeVector;"],
    [0, "&RightDownTeeVector;"],
    [0, "&DownLeftTeeVector;"],
    [0, "&DownRightTeeVector;"],
    [0, "&LeftUpTeeVector;"],
    [0, "&LeftDownTeeVector;"],
    [0, "&lHar;"],
    [0, "&uHar;"],
    [0, "&rHar;"],
    [0, "&dHar;"],
    [0, "&luruhar;"],
    [0, "&ldrdhar;"],
    [0, "&ruluhar;"],
    [0, "&rdldhar;"],
    [0, "&lharul;"],
    [0, "&llhard;"],
    [0, "&rharul;"],
    [0, "&lrhard;"],
    [0, "&udhar;"],
    [0, "&duhar;"],
    [0, "&RoundImplies;"],
    [0, "&erarr;"],
    [0, "&simrarr;"],
    [0, "&larrsim;"],
    [0, "&rarrsim;"],
    [0, "&rarrap;"],
    [0, "&ltlarr;"],
    [1, "&gtrarr;"],
    [0, "&subrarr;"],
    [1, "&suplarr;"],
    [0, "&lfisht;"],
    [0, "&rfisht;"],
    [0, "&ufisht;"],
    [0, "&dfisht;"],
    [5, "&lopar;"],
    [0, "&ropar;"],
    [4, "&lbrke;"],
    [0, "&rbrke;"],
    [0, "&lbrkslu;"],
    [0, "&rbrksld;"],
    [0, "&lbrksld;"],
    [0, "&rbrkslu;"],
    [0, "&langd;"],
    [0, "&rangd;"],
    [0, "&lparlt;"],
    [0, "&rpargt;"],
    [0, "&gtlPar;"],
    [0, "&ltrPar;"],
    [3, "&vzigzag;"],
    [1, "&vangrt;"],
    [0, "&angrtvbd;"],
    [6, "&ange;"],
    [0, "&range;"],
    [0, "&dwangle;"],
    [0, "&uwangle;"],
    [0, "&angmsdaa;"],
    [0, "&angmsdab;"],
    [0, "&angmsdac;"],
    [0, "&angmsdad;"],
    [0, "&angmsdae;"],
    [0, "&angmsdaf;"],
    [0, "&angmsdag;"],
    [0, "&angmsdah;"],
    [0, "&bemptyv;"],
    [0, "&demptyv;"],
    [0, "&cemptyv;"],
    [0, "&raemptyv;"],
    [0, "&laemptyv;"],
    [0, "&ohbar;"],
    [0, "&omid;"],
    [0, "&opar;"],
    [1, "&operp;"],
    [1, "&olcross;"],
    [0, "&odsold;"],
    [1, "&olcir;"],
    [0, "&ofcir;"],
    [0, "&olt;"],
    [0, "&ogt;"],
    [0, "&cirscir;"],
    [0, "&cirE;"],
    [0, "&solb;"],
    [0, "&bsolb;"],
    [3, "&boxbox;"],
    [3, "&trisb;"],
    [0, "&rtriltri;"],
    [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }],
    [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }],
    [11, "&iinfin;"],
    [0, "&infintie;"],
    [0, "&nvinfin;"],
    [4, "&eparsl;"],
    [0, "&smeparsl;"],
    [0, "&eqvparsl;"],
    [5, "&blacklozenge;"],
    [8, "&RuleDelayed;"],
    [1, "&dsol;"],
    [9, "&bigodot;"],
    [0, "&bigoplus;"],
    [0, "&bigotimes;"],
    [1, "&biguplus;"],
    [1, "&bigsqcup;"],
    [5, "&iiiint;"],
    [0, "&fpartint;"],
    [2, "&cirfnint;"],
    [0, "&awint;"],
    [0, "&rppolint;"],
    [0, "&scpolint;"],
    [0, "&npolint;"],
    [0, "&pointint;"],
    [0, "&quatint;"],
    [0, "&intlarhk;"],
    [10, "&pluscir;"],
    [0, "&plusacir;"],
    [0, "&simplus;"],
    [0, "&plusdu;"],
    [0, "&plussim;"],
    [0, "&plustwo;"],
    [1, "&mcomma;"],
    [0, "&minusdu;"],
    [2, "&loplus;"],
    [0, "&roplus;"],
    [0, "&Cross;"],
    [0, "&timesd;"],
    [0, "&timesbar;"],
    [1, "&smashp;"],
    [0, "&lotimes;"],
    [0, "&rotimes;"],
    [0, "&otimesas;"],
    [0, "&Otimes;"],
    [0, "&odiv;"],
    [0, "&triplus;"],
    [0, "&triminus;"],
    [0, "&tritime;"],
    [0, "&intprod;"],
    [2, "&amalg;"],
    [0, "&capdot;"],
    [1, "&ncup;"],
    [0, "&ncap;"],
    [0, "&capand;"],
    [0, "&cupor;"],
    [0, "&cupcap;"],
    [0, "&capcup;"],
    [0, "&cupbrcap;"],
    [0, "&capbrcup;"],
    [0, "&cupcup;"],
    [0, "&capcap;"],
    [0, "&ccups;"],
    [0, "&ccaps;"],
    [2, "&ccupssm;"],
    [2, "&And;"],
    [0, "&Or;"],
    [0, "&andand;"],
    [0, "&oror;"],
    [0, "&orslope;"],
    [0, "&andslope;"],
    [1, "&andv;"],
    [0, "&orv;"],
    [0, "&andd;"],
    [0, "&ord;"],
    [1, "&wedbar;"],
    [6, "&sdote;"],
    [3, "&simdot;"],
    [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }],
    [0, "&easter;"],
    [0, "&apacir;"],
    [0, { v: "&apE;", n: 824, o: "&napE;" }],
    [0, "&eplus;"],
    [0, "&pluse;"],
    [0, "&Esim;"],
    [0, "&Colone;"],
    [0, "&Equal;"],
    [1, "&ddotseq;"],
    [0, "&equivDD;"],
    [0, "&ltcir;"],
    [0, "&gtcir;"],
    [0, "&ltquest;"],
    [0, "&gtquest;"],
    [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }],
    [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }],
    [0, "&lesdot;"],
    [0, "&gesdot;"],
    [0, "&lesdoto;"],
    [0, "&gesdoto;"],
    [0, "&lesdotor;"],
    [0, "&gesdotol;"],
    [0, "&lap;"],
    [0, "&gap;"],
    [0, "&lne;"],
    [0, "&gne;"],
    [0, "&lnap;"],
    [0, "&gnap;"],
    [0, "&lEg;"],
    [0, "&gEl;"],
    [0, "&lsime;"],
    [0, "&gsime;"],
    [0, "&lsimg;"],
    [0, "&gsiml;"],
    [0, "&lgE;"],
    [0, "&glE;"],
    [0, "&lesges;"],
    [0, "&gesles;"],
    [0, "&els;"],
    [0, "&egs;"],
    [0, "&elsdot;"],
    [0, "&egsdot;"],
    [0, "&el;"],
    [0, "&eg;"],
    [2, "&siml;"],
    [0, "&simg;"],
    [0, "&simlE;"],
    [0, "&simgE;"],
    [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }],
    [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }],
    [1, "&glj;"],
    [0, "&gla;"],
    [0, "&ltcc;"],
    [0, "&gtcc;"],
    [0, "&lescc;"],
    [0, "&gescc;"],
    [0, "&smt;"],
    [0, "&lat;"],
    [0, { v: "&smte;", n: 65024, o: "&smtes;" }],
    [0, { v: "&late;", n: 65024, o: "&lates;" }],
    [0, "&bumpE;"],
    [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }],
    [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }],
    [2, "&prE;"],
    [0, "&scE;"],
    [0, "&precneqq;"],
    [0, "&scnE;"],
    [0, "&prap;"],
    [0, "&scap;"],
    [0, "&precnapprox;"],
    [0, "&scnap;"],
    [0, "&Pr;"],
    [0, "&Sc;"],
    [0, "&subdot;"],
    [0, "&supdot;"],
    [0, "&subplus;"],
    [0, "&supplus;"],
    [0, "&submult;"],
    [0, "&supmult;"],
    [0, "&subedot;"],
    [0, "&supedot;"],
    [0, { v: "&subE;", n: 824, o: "&nsubE;" }],
    [0, { v: "&supE;", n: 824, o: "&nsupE;" }],
    [0, "&subsim;"],
    [0, "&supsim;"],
    [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }],
    [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }],
    [2, "&csub;"],
    [0, "&csup;"],
    [0, "&csube;"],
    [0, "&csupe;"],
    [0, "&subsup;"],
    [0, "&supsub;"],
    [0, "&subsub;"],
    [0, "&supsup;"],
    [0, "&suphsub;"],
    [0, "&supdsub;"],
    [0, "&forkv;"],
    [0, "&topfork;"],
    [0, "&mlcp;"],
    [8, "&Dashv;"],
    [1, "&Vdashl;"],
    [0, "&Barv;"],
    [0, "&vBar;"],
    [0, "&vBarv;"],
    [1, "&Vbar;"],
    [0, "&Not;"],
    [0, "&bNot;"],
    [0, "&rnmid;"],
    [0, "&cirmid;"],
    [0, "&midcir;"],
    [0, "&topcir;"],
    [0, "&nhpar;"],
    [0, "&parsim;"],
    [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }],
    [
      44343,
      {
        n: new Map(
          Ve([
            [56476, "&Ascr;"],
            [1, "&Cscr;"],
            [0, "&Dscr;"],
            [2, "&Gscr;"],
            [2, "&Jscr;"],
            [0, "&Kscr;"],
            [2, "&Nscr;"],
            [0, "&Oscr;"],
            [0, "&Pscr;"],
            [0, "&Qscr;"],
            [1, "&Sscr;"],
            [0, "&Tscr;"],
            [0, "&Uscr;"],
            [0, "&Vscr;"],
            [0, "&Wscr;"],
            [0, "&Xscr;"],
            [0, "&Yscr;"],
            [0, "&Zscr;"],
            [0, "&ascr;"],
            [0, "&bscr;"],
            [0, "&cscr;"],
            [0, "&dscr;"],
            [1, "&fscr;"],
            [1, "&hscr;"],
            [0, "&iscr;"],
            [0, "&jscr;"],
            [0, "&kscr;"],
            [0, "&lscr;"],
            [0, "&mscr;"],
            [0, "&nscr;"],
            [1, "&pscr;"],
            [0, "&qscr;"],
            [0, "&rscr;"],
            [0, "&sscr;"],
            [0, "&tscr;"],
            [0, "&uscr;"],
            [0, "&vscr;"],
            [0, "&wscr;"],
            [0, "&xscr;"],
            [0, "&yscr;"],
            [0, "&zscr;"],
            [52, "&Afr;"],
            [0, "&Bfr;"],
            [1, "&Dfr;"],
            [0, "&Efr;"],
            [0, "&Ffr;"],
            [0, "&Gfr;"],
            [2, "&Jfr;"],
            [0, "&Kfr;"],
            [0, "&Lfr;"],
            [0, "&Mfr;"],
            [0, "&Nfr;"],
            [0, "&Ofr;"],
            [0, "&Pfr;"],
            [0, "&Qfr;"],
            [1, "&Sfr;"],
            [0, "&Tfr;"],
            [0, "&Ufr;"],
            [0, "&Vfr;"],
            [0, "&Wfr;"],
            [0, "&Xfr;"],
            [0, "&Yfr;"],
            [1, "&afr;"],
            [0, "&bfr;"],
            [0, "&cfr;"],
            [0, "&dfr;"],
            [0, "&efr;"],
            [0, "&ffr;"],
            [0, "&gfr;"],
            [0, "&hfr;"],
            [0, "&ifr;"],
            [0, "&jfr;"],
            [0, "&kfr;"],
            [0, "&lfr;"],
            [0, "&mfr;"],
            [0, "&nfr;"],
            [0, "&ofr;"],
            [0, "&pfr;"],
            [0, "&qfr;"],
            [0, "&rfr;"],
            [0, "&sfr;"],
            [0, "&tfr;"],
            [0, "&ufr;"],
            [0, "&vfr;"],
            [0, "&wfr;"],
            [0, "&xfr;"],
            [0, "&yfr;"],
            [0, "&zfr;"],
            [0, "&Aopf;"],
            [0, "&Bopf;"],
            [1, "&Dopf;"],
            [0, "&Eopf;"],
            [0, "&Fopf;"],
            [0, "&Gopf;"],
            [1, "&Iopf;"],
            [0, "&Jopf;"],
            [0, "&Kopf;"],
            [0, "&Lopf;"],
            [0, "&Mopf;"],
            [1, "&Oopf;"],
            [3, "&Sopf;"],
            [0, "&Topf;"],
            [0, "&Uopf;"],
            [0, "&Vopf;"],
            [0, "&Wopf;"],
            [0, "&Xopf;"],
            [0, "&Yopf;"],
            [1, "&aopf;"],
            [0, "&bopf;"],
            [0, "&copf;"],
            [0, "&dopf;"],
            [0, "&eopf;"],
            [0, "&fopf;"],
            [0, "&gopf;"],
            [0, "&hopf;"],
            [0, "&iopf;"],
            [0, "&jopf;"],
            [0, "&kopf;"],
            [0, "&lopf;"],
            [0, "&mopf;"],
            [0, "&nopf;"],
            [0, "&oopf;"],
            [0, "&popf;"],
            [0, "&qopf;"],
            [0, "&ropf;"],
            [0, "&sopf;"],
            [0, "&topf;"],
            [0, "&uopf;"],
            [0, "&vopf;"],
            [0, "&wopf;"],
            [0, "&xopf;"],
            [0, "&yopf;"],
            [0, "&zopf;"],
          ])
        ),
      },
    ],
    [8906, "&fflig;"],
    [0, "&filig;"],
    [0, "&fllig;"],
    [0, "&ffilig;"],
    [0, "&ffllig;"],
  ])
);
var rt = {};
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.escapeText =
      r.escapeAttribute =
      r.escapeUTF8 =
      r.escape =
      r.encodeXML =
      r.getCodePoint =
      r.xmlReplacer =
        void 0),
    (r.xmlReplacer = /["&'<>$\x80-\uFFFF]/g);
  var e = new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"],
  ]);
  r.getCodePoint =
    String.prototype.codePointAt != null
      ? function (i, n) {
          return i.codePointAt(n);
        }
      : function (i, n) {
          return (i.charCodeAt(n) & 64512) === 55296
            ? (i.charCodeAt(n) - 55296) * 1024 +
                i.charCodeAt(n + 1) -
                56320 +
                65536
            : i.charCodeAt(n);
        };
  function t(i) {
    for (var n = "", o = 0, l; (l = r.xmlReplacer.exec(i)) !== null; ) {
      var s = l.index,
        f = i.charCodeAt(s),
        d = e.get(f);
      d !== void 0
        ? ((n += i.substring(o, s) + d), (o = s + 1))
        : ((n += ""
            .concat(i.substring(o, s), "&#x")
            .concat((0, r.getCodePoint)(i, s).toString(16), ";")),
          (o = r.xmlReplacer.lastIndex += +((f & 64512) === 55296)));
    }
    return n + i.substr(o);
  }
  (r.encodeXML = t), (r.escape = t);
  function u(i, n) {
    return function (l) {
      for (var s, f = 0, d = ""; (s = i.exec(l)); )
        f !== s.index && (d += l.substring(f, s.index)),
          (d += n.get(s[0].charCodeAt(0))),
          (f = s.index + 1);
      return d + l.substring(f);
    };
  }
  (r.escapeUTF8 = u(/[&<>'"]/g, e)),
    (r.escapeAttribute = u(
      /["&\u00A0]/g,
      new Map([
        [34, "&quot;"],
        [38, "&amp;"],
        [160, "&nbsp;"],
      ])
    )),
    (r.escapeText = u(
      /[&<>\u00A0]/g,
      new Map([
        [38, "&amp;"],
        [60, "&lt;"],
        [62, "&gt;"],
        [160, "&nbsp;"],
      ])
    ));
})(rt);
var Si =
  (N && N.__importDefault) ||
  function (r) {
    return r && r.__esModule ? r : { default: r };
  };
Object.defineProperty(de, "__esModule", { value: !0 });
de.encodeNonAsciiHTML = de.encodeHTML = void 0;
var Ti = Si(Kt),
  ir = rt,
  Ei = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
function Ai(r) {
  return nr(Ei, r);
}
de.encodeHTML = Ai;
function Oi(r) {
  return nr(ir.xmlReplacer, r);
}
de.encodeNonAsciiHTML = Oi;
function nr(r, e) {
  for (var t = "", u = 0, i; (i = r.exec(e)) !== null; ) {
    var n = i.index;
    t += e.substring(u, n);
    var o = e.charCodeAt(n),
      l = Ti.default.get(o);
    if (typeof l == "object") {
      if (n + 1 < e.length) {
        var s = e.charCodeAt(n + 1),
          f = typeof l.n == "number" ? (l.n === s ? l.o : void 0) : l.n.get(s);
        if (f !== void 0) {
          (t += f), (u = r.lastIndex += 1);
          continue;
        }
      }
      l = l.v;
    }
    if (l !== void 0) (t += l), (u = n + 1);
    else {
      var d = (0, ir.getCodePoint)(e, n);
      (t += "&#x".concat(d.toString(16), ";")), (u = r.lastIndex += +(d !== o));
    }
  }
  return t + e.substr(u);
}
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.decodeXMLStrict =
      r.decodeHTML5Strict =
      r.decodeHTML4Strict =
      r.decodeHTML5 =
      r.decodeHTML4 =
      r.decodeHTMLAttribute =
      r.decodeHTMLStrict =
      r.decodeHTML =
      r.decodeXML =
      r.DecodingMode =
      r.EntityDecoder =
      r.encodeHTML5 =
      r.encodeHTML4 =
      r.encodeNonAsciiHTML =
      r.encodeHTML =
      r.escapeText =
      r.escapeAttribute =
      r.escapeUTF8 =
      r.escape =
      r.encodeXML =
      r.encode =
      r.decodeStrict =
      r.decode =
      r.EncodingMode =
      r.EntityLevel =
        void 0);
  var e = De,
    t = de,
    u = rt,
    i;
  (function (a) {
    (a[(a.XML = 0)] = "XML"), (a[(a.HTML = 1)] = "HTML");
  })((i = r.EntityLevel || (r.EntityLevel = {})));
  var n;
  (function (a) {
    (a[(a.UTF8 = 0)] = "UTF8"),
      (a[(a.ASCII = 1)] = "ASCII"),
      (a[(a.Extensive = 2)] = "Extensive"),
      (a[(a.Attribute = 3)] = "Attribute"),
      (a[(a.Text = 4)] = "Text");
  })((n = r.EncodingMode || (r.EncodingMode = {})));
  function o(a, c) {
    c === void 0 && (c = i.XML);
    var y = typeof c == "number" ? c : c.level;
    if (y === i.HTML) {
      var S = typeof c == "object" ? c.mode : void 0;
      return (0, e.decodeHTML)(a, S);
    }
    return (0, e.decodeXML)(a);
  }
  r.decode = o;
  function l(a, c) {
    var y;
    c === void 0 && (c = i.XML);
    var S = typeof c == "number" ? { level: c } : c;
    return (
      ((y = S.mode) !== null && y !== void 0) ||
        (S.mode = e.DecodingMode.Strict),
      o(a, S)
    );
  }
  r.decodeStrict = l;
  function s(a, c) {
    c === void 0 && (c = i.XML);
    var y = typeof c == "number" ? { level: c } : c;
    return y.mode === n.UTF8
      ? (0, u.escapeUTF8)(a)
      : y.mode === n.Attribute
      ? (0, u.escapeAttribute)(a)
      : y.mode === n.Text
      ? (0, u.escapeText)(a)
      : y.level === i.HTML
      ? y.mode === n.ASCII
        ? (0, t.encodeNonAsciiHTML)(a)
        : (0, t.encodeHTML)(a)
      : (0, u.encodeXML)(a);
  }
  r.encode = s;
  var f = rt;
  Object.defineProperty(r, "encodeXML", {
    enumerable: !0,
    get: function () {
      return f.encodeXML;
    },
  }),
    Object.defineProperty(r, "escape", {
      enumerable: !0,
      get: function () {
        return f.escape;
      },
    }),
    Object.defineProperty(r, "escapeUTF8", {
      enumerable: !0,
      get: function () {
        return f.escapeUTF8;
      },
    }),
    Object.defineProperty(r, "escapeAttribute", {
      enumerable: !0,
      get: function () {
        return f.escapeAttribute;
      },
    }),
    Object.defineProperty(r, "escapeText", {
      enumerable: !0,
      get: function () {
        return f.escapeText;
      },
    });
  var d = de;
  Object.defineProperty(r, "encodeHTML", {
    enumerable: !0,
    get: function () {
      return d.encodeHTML;
    },
  }),
    Object.defineProperty(r, "encodeNonAsciiHTML", {
      enumerable: !0,
      get: function () {
        return d.encodeNonAsciiHTML;
      },
    }),
    Object.defineProperty(r, "encodeHTML4", {
      enumerable: !0,
      get: function () {
        return d.encodeHTML;
      },
    }),
    Object.defineProperty(r, "encodeHTML5", {
      enumerable: !0,
      get: function () {
        return d.encodeHTML;
      },
    });
  var p = De;
  Object.defineProperty(r, "EntityDecoder", {
    enumerable: !0,
    get: function () {
      return p.EntityDecoder;
    },
  }),
    Object.defineProperty(r, "DecodingMode", {
      enumerable: !0,
      get: function () {
        return p.DecodingMode;
      },
    }),
    Object.defineProperty(r, "decodeXML", {
      enumerable: !0,
      get: function () {
        return p.decodeXML;
      },
    }),
    Object.defineProperty(r, "decodeHTML", {
      enumerable: !0,
      get: function () {
        return p.decodeHTML;
      },
    }),
    Object.defineProperty(r, "decodeHTMLStrict", {
      enumerable: !0,
      get: function () {
        return p.decodeHTMLStrict;
      },
    }),
    Object.defineProperty(r, "decodeHTMLAttribute", {
      enumerable: !0,
      get: function () {
        return p.decodeHTMLAttribute;
      },
    }),
    Object.defineProperty(r, "decodeHTML4", {
      enumerable: !0,
      get: function () {
        return p.decodeHTML;
      },
    }),
    Object.defineProperty(r, "decodeHTML5", {
      enumerable: !0,
      get: function () {
        return p.decodeHTML;
      },
    }),
    Object.defineProperty(r, "decodeHTML4Strict", {
      enumerable: !0,
      get: function () {
        return p.decodeHTMLStrict;
      },
    }),
    Object.defineProperty(r, "decodeHTML5Strict", {
      enumerable: !0,
      get: function () {
        return p.decodeHTMLStrict;
      },
    }),
    Object.defineProperty(r, "decodeXMLStrict", {
      enumerable: !0,
      get: function () {
        return p.decodeXML;
      },
    });
})(rr);
var ge = {};
Object.defineProperty(ge, "__esModule", { value: !0 });
ge.attributeNames = ge.elementNames = void 0;
ge.elementNames = new Map(
  [
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath",
  ].map(function (r) {
    return [r.toLowerCase(), r];
  })
);
ge.attributeNames = new Map(
  [
    "definitionURL",
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan",
  ].map(function (r) {
    return [r.toLowerCase(), r];
  })
);
var me =
    (N && N.__assign) ||
    function () {
      return (
        (me =
          Object.assign ||
          function (r) {
            for (var e, t = 1, u = arguments.length; t < u; t++) {
              e = arguments[t];
              for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
            }
            return r;
          }),
        me.apply(this, arguments)
      );
    },
  _i =
    (N && N.__createBinding) ||
    (Object.create
      ? function (r, e, t, u) {
          u === void 0 && (u = t);
          var i = Object.getOwnPropertyDescriptor(e, t);
          (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) &&
            (i = {
              enumerable: !0,
              get: function () {
                return e[t];
              },
            }),
            Object.defineProperty(r, u, i);
        }
      : function (r, e, t, u) {
          u === void 0 && (u = t), (r[u] = e[t]);
        }),
  Ni =
    (N && N.__setModuleDefault) ||
    (Object.create
      ? function (r, e) {
          Object.defineProperty(r, "default", { enumerable: !0, value: e });
        }
      : function (r, e) {
          r.default = e;
        }),
  Ii =
    (N && N.__importStar) ||
    function (r) {
      if (r && r.__esModule) return r;
      var e = {};
      if (r != null)
        for (var t in r)
          t !== "default" &&
            Object.prototype.hasOwnProperty.call(r, t) &&
            _i(e, r, t);
      return Ni(e, r), e;
    };
Object.defineProperty(je, "__esModule", { value: !0 });
je.render = void 0;
var ie = Ii(Se),
  it = rr,
  ar = ge,
  Ci = new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript",
  ]);
function Di(r) {
  return r.replace(/"/g, "&quot;");
}
function Li(r, e) {
  var t;
  if (r) {
    var u =
      ((t = e.encodeEntities) !== null && t !== void 0
        ? t
        : e.decodeEntities) === !1
        ? Di
        : e.xmlMode || e.encodeEntities !== "utf8"
        ? it.encodeXML
        : it.escapeAttribute;
    return Object.keys(r)
      .map(function (i) {
        var n,
          o,
          l = (n = r[i]) !== null && n !== void 0 ? n : "";
        return (
          e.xmlMode === "foreign" &&
            (i =
              (o = ar.attributeNames.get(i)) !== null && o !== void 0 ? o : i),
          !e.emptyAttrs && !e.xmlMode && l === ""
            ? i
            : "".concat(i, '="').concat(u(l), '"')
        );
      })
      .join(" ");
  }
}
var xu = new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);
function ht(r, e) {
  e === void 0 && (e = {});
  for (var t = ("length" in r) ? r : [r], u = "", i = 0; i < t.length; i++)
    u += Pi(t[i], e);
  return u;
}
je.render = ht;
je.default = ht;
function Pi(r, e) {
  switch (r.type) {
    case ie.Root:
      return ht(r.children, e);
    case ie.Doctype:
    case ie.Directive:
      return ki(r);
    case ie.Comment:
      return Ui(r);
    case ie.CDATA:
      return Bi(r);
    case ie.Script:
    case ie.Style:
    case ie.Tag:
      return qi(r, e);
    case ie.Text:
      return ji(r, e);
  }
}
var Mi = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title",
  ]),
  Ri = new Set(["svg", "math"]);
function qi(r, e) {
  var t;
  e.xmlMode === "foreign" &&
    ((r.name =
      (t = ar.elementNames.get(r.name)) !== null && t !== void 0 ? t : r.name),
    r.parent && Mi.has(r.parent.name) && (e = me(me({}, e), { xmlMode: !1 }))),
    !e.xmlMode && Ri.has(r.name) && (e = me(me({}, e), { xmlMode: "foreign" }));
  var u = "<".concat(r.name),
    i = Li(r.attribs, e);
  return (
    i && (u += " ".concat(i)),
    r.children.length === 0 &&
    (e.xmlMode ? e.selfClosingTags !== !1 : e.selfClosingTags && xu.has(r.name))
      ? (e.xmlMode || (u += " "), (u += "/>"))
      : ((u += ">"),
        r.children.length > 0 && (u += ht(r.children, e)),
        (e.xmlMode || !xu.has(r.name)) && (u += "</".concat(r.name, ">"))),
    u
  );
}
function ki(r) {
  return "<".concat(r.data, ">");
}
function ji(r, e) {
  var t,
    u = r.data || "";
  return (
    ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) !==
      !1 &&
      !(!e.xmlMode && r.parent && Ci.has(r.parent.name)) &&
      (u =
        e.xmlMode || e.encodeEntities !== "utf8"
          ? (0, it.encodeXML)(u)
          : (0, it.escapeText)(u)),
    u
  );
}
function Bi(r) {
  return "<![CDATA[".concat(r.children[0].data, "]]>");
}
function Ui(r) {
  return "<!--".concat(r.data, "-->");
}
var $i =
  (N && N.__importDefault) ||
  function (r) {
    return r && r.__esModule ? r : { default: r };
  };
Object.defineProperty(J, "__esModule", { value: !0 });
J.innerText =
  J.textContent =
  J.getText =
  J.getInnerHTML =
  J.getOuterHTML =
    void 0;
var ue = ae,
  Hi = $i(je),
  Fi = Se;
function sr(r, e) {
  return (0, Hi.default)(r, e);
}
J.getOuterHTML = sr;
function Vi(r, e) {
  return (0, ue.hasChildren)(r)
    ? r.children
        .map(function (t) {
          return sr(t, e);
        })
        .join("")
    : "";
}
J.getInnerHTML = Vi;
function et(r) {
  return Array.isArray(r)
    ? r.map(et).join("")
    : (0, ue.isTag)(r)
    ? r.name === "br"
      ? `
`
      : et(r.children)
    : (0, ue.isCDATA)(r)
    ? et(r.children)
    : (0, ue.isText)(r)
    ? r.data
    : "";
}
J.getText = et;
function Dt(r) {
  return Array.isArray(r)
    ? r.map(Dt).join("")
    : (0, ue.hasChildren)(r) && !(0, ue.isComment)(r)
    ? Dt(r.children)
    : (0, ue.isText)(r)
    ? r.data
    : "";
}
J.textContent = Dt;
function Lt(r) {
  return Array.isArray(r)
    ? r.map(Lt).join("")
    : (0, ue.hasChildren)(r) &&
      (r.type === Fi.ElementType.Tag || (0, ue.isCDATA)(r))
    ? Lt(r.children)
    : (0, ue.isText)(r)
    ? r.data
    : "";
}
J.innerText = Lt;
var F = {};
Object.defineProperty(F, "__esModule", { value: !0 });
F.prevElementSibling =
  F.nextElementSibling =
  F.getName =
  F.hasAttrib =
  F.getAttributeValue =
  F.getSiblings =
  F.getParent =
  F.getChildren =
    void 0;
var eu = ae;
function or(r) {
  return (0, eu.hasChildren)(r) ? r.children : [];
}
F.getChildren = or;
function cr(r) {
  return r.parent || null;
}
F.getParent = cr;
function zi(r) {
  var e,
    t,
    u = cr(r);
  if (u != null) return or(u);
  for (var i = [r], n = r.prev, o = r.next; n != null; )
    i.unshift(n), (e = n), (n = e.prev);
  for (; o != null; ) i.push(o), (t = o), (o = t.next);
  return i;
}
F.getSiblings = zi;
function Gi(r, e) {
  var t;
  return (t = r.attribs) === null || t === void 0 ? void 0 : t[e];
}
F.getAttributeValue = Gi;
function Wi(r, e) {
  return (
    r.attribs != null &&
    Object.prototype.hasOwnProperty.call(r.attribs, e) &&
    r.attribs[e] != null
  );
}
F.hasAttrib = Wi;
function Xi(r) {
  return r.name;
}
F.getName = Xi;
function Qi(r) {
  for (var e, t = r.next; t !== null && !(0, eu.isTag)(t); )
    (e = t), (t = e.next);
  return t;
}
F.nextElementSibling = Qi;
function Ji(r) {
  for (var e, t = r.prev; t !== null && !(0, eu.isTag)(t); )
    (e = t), (t = e.prev);
  return t;
}
F.prevElementSibling = Ji;
var X = {};
Object.defineProperty(X, "__esModule", { value: !0 });
X.prepend =
  X.prependChild =
  X.append =
  X.appendChild =
  X.replaceElement =
  X.removeElement =
    void 0;
function Be(r) {
  if (
    (r.prev && (r.prev.next = r.next),
    r.next && (r.next.prev = r.prev),
    r.parent)
  ) {
    var e = r.parent.children,
      t = e.lastIndexOf(r);
    t >= 0 && e.splice(t, 1);
  }
  (r.next = null), (r.prev = null), (r.parent = null);
}
X.removeElement = Be;
function Zi(r, e) {
  var t = (e.prev = r.prev);
  t && (t.next = e);
  var u = (e.next = r.next);
  u && (u.prev = e);
  var i = (e.parent = r.parent);
  if (i) {
    var n = i.children;
    (n[n.lastIndexOf(r)] = e), (r.parent = null);
  }
}
X.replaceElement = Zi;
function Yi(r, e) {
  if ((Be(e), (e.next = null), (e.parent = r), r.children.push(e) > 1)) {
    var t = r.children[r.children.length - 2];
    (t.next = e), (e.prev = t);
  } else e.prev = null;
}
X.appendChild = Yi;
function Ki(r, e) {
  Be(e);
  var t = r.parent,
    u = r.next;
  if (((e.next = u), (e.prev = r), (r.next = e), (e.parent = t), u)) {
    if (((u.prev = e), t)) {
      var i = t.children;
      i.splice(i.lastIndexOf(u), 0, e);
    }
  } else t && t.children.push(e);
}
X.append = Ki;
function en(r, e) {
  if ((Be(e), (e.parent = r), (e.prev = null), r.children.unshift(e) !== 1)) {
    var t = r.children[1];
    (t.prev = e), (e.next = t);
  } else e.next = null;
}
X.prependChild = en;
function tn(r, e) {
  Be(e);
  var t = r.parent;
  if (t) {
    var u = t.children;
    u.splice(u.indexOf(r), 0, e);
  }
  r.prev && (r.prev.next = e),
    (e.parent = t),
    (e.prev = r.prev),
    (e.next = r),
    (r.prev = e);
}
X.prepend = tn;
var V = {};
Object.defineProperty(V, "__esModule", { value: !0 });
V.findAll =
  V.existsOne =
  V.findOne =
  V.findOneChild =
  V.find =
  V.filter =
    void 0;
var pt = ae;
function un(r, e, t, u) {
  return (
    t === void 0 && (t = !0),
    u === void 0 && (u = 1 / 0),
    lr(r, Array.isArray(e) ? e : [e], t, u)
  );
}
V.filter = un;
function lr(r, e, t, u) {
  for (var i = [], n = [e], o = [0]; ; ) {
    if (o[0] >= n[0].length) {
      if (o.length === 1) return i;
      n.shift(), o.shift();
      continue;
    }
    var l = n[0][o[0]++];
    if (r(l) && (i.push(l), --u <= 0)) return i;
    t &&
      (0, pt.hasChildren)(l) &&
      l.children.length > 0 &&
      (o.unshift(0), n.unshift(l.children));
  }
}
V.find = lr;
function rn(r, e) {
  return e.find(r);
}
V.findOneChild = rn;
function fr(r, e, t) {
  t === void 0 && (t = !0);
  for (var u = null, i = 0; i < e.length && !u; i++) {
    var n = e[i];
    if ((0, pt.isTag)(n))
      r(n)
        ? (u = n)
        : t && n.children.length > 0 && (u = fr(r, n.children, !0));
    else continue;
  }
  return u;
}
V.findOne = fr;
function dr(r, e) {
  return e.some(function (t) {
    return (0, pt.isTag)(t) && (r(t) || dr(r, t.children));
  });
}
V.existsOne = dr;
function nn(r, e) {
  for (var t = [], u = [e], i = [0]; ; ) {
    if (i[0] >= u[0].length) {
      if (u.length === 1) return t;
      u.shift(), i.shift();
      continue;
    }
    var n = u[0][i[0]++];
    (0, pt.isTag)(n) &&
      (r(n) && t.push(n),
      n.children.length > 0 && (i.unshift(0), u.unshift(n.children)));
  }
}
V.findAll = nn;
var Z = {};
Object.defineProperty(Z, "__esModule", { value: !0 });
Z.getElementsByTagType =
  Z.getElementsByTagName =
  Z.getElementById =
  Z.getElements =
  Z.testElement =
    void 0;
var fe = ae,
  bt = V,
  nt = {
    tag_name: function (r) {
      return typeof r == "function"
        ? function (e) {
            return (0, fe.isTag)(e) && r(e.name);
          }
        : r === "*"
        ? fe.isTag
        : function (e) {
            return (0, fe.isTag)(e) && e.name === r;
          };
    },
    tag_type: function (r) {
      return typeof r == "function"
        ? function (e) {
            return r(e.type);
          }
        : function (e) {
            return e.type === r;
          };
    },
    tag_contains: function (r) {
      return typeof r == "function"
        ? function (e) {
            return (0, fe.isText)(e) && r(e.data);
          }
        : function (e) {
            return (0, fe.isText)(e) && e.data === r;
          };
    },
  };
function hr(r, e) {
  return typeof e == "function"
    ? function (t) {
        return (0, fe.isTag)(t) && e(t.attribs[r]);
      }
    : function (t) {
        return (0, fe.isTag)(t) && t.attribs[r] === e;
      };
}
function an(r, e) {
  return function (t) {
    return r(t) || e(t);
  };
}
function pr(r) {
  var e = Object.keys(r).map(function (t) {
    var u = r[t];
    return Object.prototype.hasOwnProperty.call(nt, t) ? nt[t](u) : hr(t, u);
  });
  return e.length === 0 ? null : e.reduce(an);
}
function sn(r, e) {
  var t = pr(r);
  return t ? t(e) : !0;
}
Z.testElement = sn;
function on(r, e, t, u) {
  u === void 0 && (u = 1 / 0);
  var i = pr(r);
  return i ? (0, bt.filter)(i, e, t, u) : [];
}
Z.getElements = on;
function cn(r, e, t) {
  return (
    t === void 0 && (t = !0),
    Array.isArray(e) || (e = [e]),
    (0, bt.findOne)(hr("id", r), e, t)
  );
}
Z.getElementById = cn;
function ln(r, e, t, u) {
  return (
    t === void 0 && (t = !0),
    u === void 0 && (u = 1 / 0),
    (0, bt.filter)(nt.tag_name(r), e, t, u)
  );
}
Z.getElementsByTagName = ln;
function fn(r, e, t, u) {
  return (
    t === void 0 && (t = !0),
    u === void 0 && (u = 1 / 0),
    (0, bt.filter)(nt.tag_type(r), e, t, u)
  );
}
Z.getElementsByTagType = fn;
var br = {};
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.uniqueSort =
      r.compareDocumentPosition =
      r.DocumentPosition =
      r.removeSubsets =
        void 0);
  var e = ae;
  function t(o) {
    for (var l = o.length; --l >= 0; ) {
      var s = o[l];
      if (l > 0 && o.lastIndexOf(s, l - 1) >= 0) {
        o.splice(l, 1);
        continue;
      }
      for (var f = s.parent; f; f = f.parent)
        if (o.includes(f)) {
          o.splice(l, 1);
          break;
        }
    }
    return o;
  }
  r.removeSubsets = t;
  var u;
  (function (o) {
    (o[(o.DISCONNECTED = 1)] = "DISCONNECTED"),
      (o[(o.PRECEDING = 2)] = "PRECEDING"),
      (o[(o.FOLLOWING = 4)] = "FOLLOWING"),
      (o[(o.CONTAINS = 8)] = "CONTAINS"),
      (o[(o.CONTAINED_BY = 16)] = "CONTAINED_BY");
  })((u = r.DocumentPosition || (r.DocumentPosition = {})));
  function i(o, l) {
    var s = [],
      f = [];
    if (o === l) return 0;
    for (var d = (0, e.hasChildren)(o) ? o : o.parent; d; )
      s.unshift(d), (d = d.parent);
    for (d = (0, e.hasChildren)(l) ? l : l.parent; d; )
      f.unshift(d), (d = d.parent);
    for (var p = Math.min(s.length, f.length), a = 0; a < p && s[a] === f[a]; )
      a++;
    if (a === 0) return u.DISCONNECTED;
    var c = s[a - 1],
      y = c.children,
      S = s[a],
      m = f[a];
    return y.indexOf(S) > y.indexOf(m)
      ? c === l
        ? u.FOLLOWING | u.CONTAINED_BY
        : u.FOLLOWING
      : c === o
      ? u.PRECEDING | u.CONTAINS
      : u.PRECEDING;
  }
  r.compareDocumentPosition = i;
  function n(o) {
    return (
      (o = o.filter(function (l, s, f) {
        return !f.includes(l, s + 1);
      })),
      o.sort(function (l, s) {
        var f = i(l, s);
        return f & u.PRECEDING ? -1 : f & u.FOLLOWING ? 1 : 0;
      }),
      o
    );
  }
  r.uniqueSort = n;
})(br);
var mt = {};
Object.defineProperty(mt, "__esModule", { value: !0 });
mt.getFeed = void 0;
var dn = J,
  Ue = Z;
function hn(r) {
  var e = at(yn, r);
  return e ? (e.name === "feed" ? pn(e) : bn(e)) : null;
}
mt.getFeed = hn;
function pn(r) {
  var e,
    t = r.children,
    u = {
      type: "atom",
      items: (0, Ue.getElementsByTagName)("entry", t).map(function (o) {
        var l,
          s = o.children,
          f = { media: mr(s) };
        W(f, "id", "id", s), W(f, "title", "title", s);
        var d =
          (l = at("link", s)) === null || l === void 0
            ? void 0
            : l.attribs.href;
        d && (f.link = d);
        var p = oe("summary", s) || oe("content", s);
        p && (f.description = p);
        var a = oe("updated", s);
        return a && (f.pubDate = new Date(a)), f;
      }),
    };
  W(u, "id", "id", t), W(u, "title", "title", t);
  var i =
    (e = at("link", t)) === null || e === void 0 ? void 0 : e.attribs.href;
  i && (u.link = i), W(u, "description", "subtitle", t);
  var n = oe("updated", t);
  return n && (u.updated = new Date(n)), W(u, "author", "email", t, !0), u;
}
function bn(r) {
  var e,
    t,
    u =
      (t =
        (e = at("channel", r.children)) === null || e === void 0
          ? void 0
          : e.children) !== null && t !== void 0
        ? t
        : [],
    i = {
      type: r.name.substr(0, 3),
      id: "",
      items: (0, Ue.getElementsByTagName)("item", r.children).map(function (o) {
        var l = o.children,
          s = { media: mr(l) };
        W(s, "id", "guid", l),
          W(s, "title", "title", l),
          W(s, "link", "link", l),
          W(s, "description", "description", l);
        var f = oe("pubDate", l) || oe("dc:date", l);
        return f && (s.pubDate = new Date(f)), s;
      }),
    };
  W(i, "title", "title", u),
    W(i, "link", "link", u),
    W(i, "description", "description", u);
  var n = oe("lastBuildDate", u);
  return (
    n && (i.updated = new Date(n)), W(i, "author", "managingEditor", u, !0), i
  );
}
var mn = ["url", "type", "lang"],
  gn = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width",
  ];
function mr(r) {
  return (0, Ue.getElementsByTagName)("media:content", r).map(function (e) {
    for (
      var t = e.attribs,
        u = { medium: t.medium, isDefault: !!t.isDefault },
        i = 0,
        n = mn;
      i < n.length;
      i++
    ) {
      var o = n[i];
      t[o] && (u[o] = t[o]);
    }
    for (var l = 0, s = gn; l < s.length; l++) {
      var o = s[l];
      t[o] && (u[o] = parseInt(t[o], 10));
    }
    return t.expression && (u.expression = t.expression), u;
  });
}
function at(r, e) {
  return (0, Ue.getElementsByTagName)(r, e, !0, 1)[0];
}
function oe(r, e, t) {
  return (
    t === void 0 && (t = !1),
    (0, dn.textContent)((0, Ue.getElementsByTagName)(r, e, t, 1)).trim()
  );
}
function W(r, e, t, u, i) {
  i === void 0 && (i = !1);
  var n = oe(t, u, i);
  n && (r[e] = n);
}
function yn(r) {
  return r === "rss" || r === "feed" || r === "rdf:RDF";
}
(function (r) {
  var e =
      (N && N.__createBinding) ||
      (Object.create
        ? function (i, n, o, l) {
            l === void 0 && (l = o);
            var s = Object.getOwnPropertyDescriptor(n, o);
            (!s ||
              ("get" in s ? !n.__esModule : s.writable || s.configurable)) &&
              (s = {
                enumerable: !0,
                get: function () {
                  return n[o];
                },
              }),
              Object.defineProperty(i, l, s);
          }
        : function (i, n, o, l) {
            l === void 0 && (l = o), (i[l] = n[o]);
          }),
    t =
      (N && N.__exportStar) ||
      function (i, n) {
        for (var o in i)
          o !== "default" &&
            !Object.prototype.hasOwnProperty.call(n, o) &&
            e(n, i, o);
      };
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.hasChildren =
      r.isDocument =
      r.isComment =
      r.isText =
      r.isCDATA =
      r.isTag =
        void 0),
    t(J, r),
    t(F, r),
    t(X, r),
    t(V, r),
    t(Z, r),
    t(br, r),
    t(mt, r);
  var u = ae;
  Object.defineProperty(r, "isTag", {
    enumerable: !0,
    get: function () {
      return u.isTag;
    },
  }),
    Object.defineProperty(r, "isCDATA", {
      enumerable: !0,
      get: function () {
        return u.isCDATA;
      },
    }),
    Object.defineProperty(r, "isText", {
      enumerable: !0,
      get: function () {
        return u.isText;
      },
    }),
    Object.defineProperty(r, "isComment", {
      enumerable: !0,
      get: function () {
        return u.isComment;
      },
    }),
    Object.defineProperty(r, "isDocument", {
      enumerable: !0,
      get: function () {
        return u.isDocument;
      },
    }),
    Object.defineProperty(r, "hasChildren", {
      enumerable: !0,
      get: function () {
        return u.hasChildren;
      },
    });
})(Ke);
(function (r) {
  var e =
      (N && N.__createBinding) ||
      (Object.create
        ? function (T, A, I, O) {
            O === void 0 && (O = I);
            var L = Object.getOwnPropertyDescriptor(A, I);
            (!L ||
              ("get" in L ? !A.__esModule : L.writable || L.configurable)) &&
              (L = {
                enumerable: !0,
                get: function () {
                  return A[I];
                },
              }),
              Object.defineProperty(T, O, L);
          }
        : function (T, A, I, O) {
            O === void 0 && (O = I), (T[O] = A[I]);
          }),
    t =
      (N && N.__setModuleDefault) ||
      (Object.create
        ? function (T, A) {
            Object.defineProperty(T, "default", { enumerable: !0, value: A });
          }
        : function (T, A) {
            T.default = A;
          }),
    u =
      (N && N.__importStar) ||
      function (T) {
        if (T && T.__esModule) return T;
        var A = {};
        if (T != null)
          for (var I in T)
            I !== "default" &&
              Object.prototype.hasOwnProperty.call(T, I) &&
              e(A, T, I);
        return t(A, T), A;
      },
    i =
      (N && N.__importDefault) ||
      function (T) {
        return T && T.__esModule ? T : { default: T };
      };
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.DomUtils =
      r.parseFeed =
      r.getFeed =
      r.ElementType =
      r.Tokenizer =
      r.createDomStream =
      r.parseDOM =
      r.parseDocument =
      r.DefaultHandler =
      r.DomHandler =
      r.Parser =
        void 0);
  var n = Ce,
    o = Ce;
  Object.defineProperty(r, "Parser", {
    enumerable: !0,
    get: function () {
      return o.Parser;
    },
  });
  var l = ae,
    s = ae;
  Object.defineProperty(r, "DomHandler", {
    enumerable: !0,
    get: function () {
      return s.DomHandler;
    },
  }),
    Object.defineProperty(r, "DefaultHandler", {
      enumerable: !0,
      get: function () {
        return s.DomHandler;
      },
    });
  function f(T, A) {
    var I = new l.DomHandler(void 0, A);
    return new n.Parser(I, A).end(T), I.root;
  }
  r.parseDocument = f;
  function d(T, A) {
    return f(T, A).children;
  }
  r.parseDOM = d;
  function p(T, A, I) {
    var O = new l.DomHandler(T, A, I);
    return new n.Parser(O, A);
  }
  r.createDomStream = p;
  var a = Xt;
  Object.defineProperty(r, "Tokenizer", {
    enumerable: !0,
    get: function () {
      return i(a).default;
    },
  }),
    (r.ElementType = u(Se));
  var c = Ke,
    y = Ke;
  Object.defineProperty(r, "getFeed", {
    enumerable: !0,
    get: function () {
      return y.getFeed;
    },
  });
  var S = { xmlMode: !0 };
  function m(T, A) {
    return A === void 0 && (A = S), (0, c.getFeed)(d(T, A));
  }
  (r.parseFeed = m), (r.DomUtils = u(Ke));
})(Vu);
var xn = (r) => {
    if (typeof r != "string") throw new TypeError("Expected a string");
    return r.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  },
  tu = {};
Object.defineProperty(tu, "__esModule", { value: !0 });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function vu(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function vn(r) {
  var e, t;
  return vu(r) === !1
    ? !1
    : ((e = r.constructor),
      e === void 0
        ? !0
        : ((t = e.prototype),
          !(vu(t) === !1 || t.hasOwnProperty("isPrototypeOf") === !1)));
}
tu.isPlainObject = vn;
var wn = function (e) {
  return Sn(e) && !Tn(e);
};
function Sn(r) {
  return !!r && typeof r == "object";
}
function Tn(r) {
  var e = Object.prototype.toString.call(r);
  return e === "[object RegExp]" || e === "[object Date]" || On(r);
}
var En = typeof Symbol == "function" && Symbol.for,
  An = En ? Symbol.for("react.element") : 60103;
function On(r) {
  return r.$$typeof === An;
}
function _n(r) {
  return Array.isArray(r) ? [] : {};
}
function Le(r, e) {
  return e.clone !== !1 && e.isMergeableObject(r) ? ye(_n(r), r, e) : r;
}
function Nn(r, e, t) {
  return r.concat(e).map(function (u) {
    return Le(u, t);
  });
}
function In(r, e) {
  if (!e.customMerge) return ye;
  var t = e.customMerge(r);
  return typeof t == "function" ? t : ye;
}
function Cn(r) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(r).filter(function (e) {
        return Object.propertyIsEnumerable.call(r, e);
      })
    : [];
}
function wu(r) {
  return Object.keys(r).concat(Cn(r));
}
function gr(r, e) {
  try {
    return e in r;
  } catch {
    return !1;
  }
}
function Dn(r, e) {
  return (
    gr(r, e) &&
    !(
      Object.hasOwnProperty.call(r, e) && Object.propertyIsEnumerable.call(r, e)
    )
  );
}
function Ln(r, e, t) {
  var u = {};
  return (
    t.isMergeableObject(r) &&
      wu(r).forEach(function (i) {
        u[i] = Le(r[i], t);
      }),
    wu(e).forEach(function (i) {
      Dn(r, i) ||
        (gr(r, i) && t.isMergeableObject(e[i])
          ? (u[i] = In(i, t)(r[i], e[i], t))
          : (u[i] = Le(e[i], t)));
    }),
    u
  );
}
function ye(r, e, t) {
  (t = t || {}),
    (t.arrayMerge = t.arrayMerge || Nn),
    (t.isMergeableObject = t.isMergeableObject || wn),
    (t.cloneUnlessOtherwiseSpecified = Le);
  var u = Array.isArray(e),
    i = Array.isArray(r),
    n = u === i;
  return n ? (u ? t.arrayMerge(r, e, t) : Ln(r, e, t)) : Le(e, t);
}
ye.all = function (e, t) {
  if (!Array.isArray(e)) throw new Error("first argument should be an array");
  return e.reduce(function (u, i) {
    return ye(u, i, t);
  }, {});
};
var Pn = ye,
  Mn = Pn,
  yr = { exports: {} };
(function (r) {
  (function (e, t) {
    r.exports ? (r.exports = t()) : (e.parseSrcset = t());
  })(N, function () {
    return function (e) {
      function t(O) {
        return (
          O === " " ||
          O === "	" ||
          O ===
            `
` ||
          O === "\f" ||
          O === "\r"
        );
      }
      function u(O) {
        var L,
          H = O.exec(e.substring(m));
        if (H) return (L = H[0]), (m += L.length), L;
      }
      for (
        var i = e.length,
          n = /^[ \t\n\r\u000c]+/,
          o = /^[, \t\n\r\u000c]+/,
          l = /^[^ \t\n\r\u000c]+/,
          s = /[,]+$/,
          f = /^\d+$/,
          d = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
          p,
          a,
          c,
          y,
          S,
          m = 0,
          T = [];
        ;

      ) {
        if ((u(o), m >= i)) return T;
        (p = u(l)),
          (a = []),
          p.slice(-1) === "," ? ((p = p.replace(s, "")), I()) : A();
      }
      function A() {
        for (u(n), c = "", y = "in descriptor"; ; ) {
          if (((S = e.charAt(m)), y === "in descriptor"))
            if (t(S)) c && (a.push(c), (c = ""), (y = "after descriptor"));
            else if (S === ",") {
              (m += 1), c && a.push(c), I();
              return;
            } else if (S === "(") (c = c + S), (y = "in parens");
            else if (S === "") {
              c && a.push(c), I();
              return;
            } else c = c + S;
          else if (y === "in parens")
            if (S === ")") (c = c + S), (y = "in descriptor");
            else if (S === "") {
              a.push(c), I();
              return;
            } else c = c + S;
          else if (y === "after descriptor" && !t(S))
            if (S === "") {
              I();
              return;
            } else (y = "in descriptor"), (m -= 1);
          m += 1;
        }
      }
      function I() {
        var O = !1,
          L,
          H,
          Y,
          $,
          z = {},
          G,
          b,
          v,
          w,
          _;
        for ($ = 0; $ < a.length; $++)
          (G = a[$]),
            (b = G[G.length - 1]),
            (v = G.substring(0, G.length - 1)),
            (w = parseInt(v, 10)),
            (_ = parseFloat(v)),
            f.test(v) && b === "w"
              ? ((L || H) && (O = !0), w === 0 ? (O = !0) : (L = w))
              : d.test(v) && b === "x"
              ? ((L || H || Y) && (O = !0), _ < 0 ? (O = !0) : (H = _))
              : f.test(v) && b === "h"
              ? ((Y || H) && (O = !0), w === 0 ? (O = !0) : (Y = w))
              : (O = !0);
        O
          ? console &&
            console.log &&
            console.log(
              "Invalid srcset descriptor found in '" + e + "' at '" + G + "'."
            )
          : ((z.url = p),
            L && (z.w = L),
            H && (z.d = H),
            Y && (z.h = Y),
            T.push(z));
      }
    };
  });
})(yr);
var Rn = yr.exports,
  uu = { exports: {} },
  C = String,
  xr = function () {
    return {
      isColorSupported: !1,
      reset: C,
      bold: C,
      dim: C,
      italic: C,
      underline: C,
      inverse: C,
      hidden: C,
      strikethrough: C,
      black: C,
      red: C,
      green: C,
      yellow: C,
      blue: C,
      magenta: C,
      cyan: C,
      white: C,
      gray: C,
      bgBlack: C,
      bgRed: C,
      bgGreen: C,
      bgYellow: C,
      bgBlue: C,
      bgMagenta: C,
      bgCyan: C,
      bgWhite: C,
      blackBright: C,
      redBright: C,
      greenBright: C,
      yellowBright: C,
      blueBright: C,
      magentaBright: C,
      cyanBright: C,
      whiteBright: C,
      bgBlackBright: C,
      bgRedBright: C,
      bgGreenBright: C,
      bgYellowBright: C,
      bgBlueBright: C,
      bgMagentaBright: C,
      bgCyanBright: C,
      bgWhiteBright: C,
    };
  };
uu.exports = xr();
uu.exports.createColors = xr;
var qn = uu.exports;
const kn = {},
  jn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: kn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ee = ri(jn);
let Su = qn,
  Tu = ee,
  Pt = class vr extends Error {
    constructor(e, t, u, i, n, o) {
      super(e),
        (this.name = "CssSyntaxError"),
        (this.reason = e),
        n && (this.file = n),
        i && (this.source = i),
        o && (this.plugin = o),
        typeof t < "u" &&
          typeof u < "u" &&
          (typeof t == "number"
            ? ((this.line = t), (this.column = u))
            : ((this.line = t.line),
              (this.column = t.column),
              (this.endLine = u.line),
              (this.endColumn = u.column))),
        this.setMessage(),
        Error.captureStackTrace && Error.captureStackTrace(this, vr);
    }
    setMessage() {
      (this.message = this.plugin ? this.plugin + ": " : ""),
        (this.message += this.file ? this.file : "<css input>"),
        typeof this.line < "u" &&
          (this.message += ":" + this.line + ":" + this.column),
        (this.message += ": " + this.reason);
    }
    showSourceCode(e) {
      if (!this.source) return "";
      let t = this.source;
      e == null && (e = Su.isColorSupported);
      let u = (d) => d,
        i = (d) => d,
        n = (d) => d;
      if (e) {
        let { bold: d, gray: p, red: a } = Su.createColors(!0);
        (i = (c) => d(a(c))), (u = (c) => p(c)), Tu && (n = (c) => Tu(c));
      }
      let o = t.split(/\r?\n/),
        l = Math.max(this.line - 3, 0),
        s = Math.min(this.line + 2, o.length),
        f = String(s).length;
      return o.slice(l, s).map((d, p) => {
        let a = l + 1 + p,
          c = " " + (" " + a).slice(-f) + " | ";
        if (a === this.line) {
          if (d.length > 160) {
            let S = 20,
              m = Math.max(0, this.column - S),
              T = Math.max(this.column + S, this.endColumn + S),
              A = d.slice(m, T),
              I =
                u(c.replace(/\d/g, " ")) +
                d
                  .slice(0, Math.min(this.column - 1, S - 1))
                  .replace(/[^\t]/g, " ");
            return (
              i(">") +
              u(c) +
              n(A) +
              `
 ` +
              I +
              i("^")
            );
          }
          let y =
            u(c.replace(/\d/g, " ")) +
            d.slice(0, this.column - 1).replace(/[^\t]/g, " ");
          return (
            i(">") +
            u(c) +
            n(d) +
            `
 ` +
            y +
            i("^")
          );
        }
        return " " + u(c) + n(d);
      }).join(`
`);
    }
    toString() {
      let e = this.showSourceCode();
      return (
        e &&
          (e =
            `

` +
            e +
            `
`),
        this.name + ": " + this.message + e
      );
    }
  };
var ru = Pt;
Pt.default = Pt;
const Eu = {
  after: `
`,
  beforeClose: `
`,
  beforeComment: `
`,
  beforeDecl: `
`,
  beforeOpen: " ",
  beforeRule: `
`,
  colon: ": ",
  commentLeft: " ",
  commentRight: " ",
  emptyBody: "",
  indent: "    ",
  semicolon: !1,
};
function Bn(r) {
  return r[0].toUpperCase() + r.slice(1);
}
let Mt = class {
  constructor(e) {
    this.builder = e;
  }
  atrule(e, t) {
    let u = "@" + e.name,
      i = e.params ? this.rawValue(e, "params") : "";
    if (
      (typeof e.raws.afterName < "u"
        ? (u += e.raws.afterName)
        : i && (u += " "),
      e.nodes)
    )
      this.block(e, u + i);
    else {
      let n = (e.raws.between || "") + (t ? ";" : "");
      this.builder(u + i + n, e);
    }
  }
  beforeAfter(e, t) {
    let u;
    e.type === "decl"
      ? (u = this.raw(e, null, "beforeDecl"))
      : e.type === "comment"
      ? (u = this.raw(e, null, "beforeComment"))
      : t === "before"
      ? (u = this.raw(e, null, "beforeRule"))
      : (u = this.raw(e, null, "beforeClose"));
    let i = e.parent,
      n = 0;
    for (; i && i.type !== "root"; ) (n += 1), (i = i.parent);
    if (
      u.includes(`
`)
    ) {
      let o = this.raw(e, null, "indent");
      if (o.length) for (let l = 0; l < n; l++) u += o;
    }
    return u;
  }
  block(e, t) {
    let u = this.raw(e, "between", "beforeOpen");
    this.builder(t + u + "{", e, "start");
    let i;
    e.nodes && e.nodes.length
      ? (this.body(e), (i = this.raw(e, "after")))
      : (i = this.raw(e, "after", "emptyBody")),
      i && this.builder(i),
      this.builder("}", e, "end");
  }
  body(e) {
    let t = e.nodes.length - 1;
    for (; t > 0 && e.nodes[t].type === "comment"; ) t -= 1;
    let u = this.raw(e, "semicolon");
    for (let i = 0; i < e.nodes.length; i++) {
      let n = e.nodes[i],
        o = this.raw(n, "before");
      o && this.builder(o), this.stringify(n, t !== i || u);
    }
  }
  comment(e) {
    let t = this.raw(e, "left", "commentLeft"),
      u = this.raw(e, "right", "commentRight");
    this.builder("/*" + t + e.text + u + "*/", e);
  }
  decl(e, t) {
    let u = this.raw(e, "between", "colon"),
      i = e.prop + u + this.rawValue(e, "value");
    e.important && (i += e.raws.important || " !important"),
      t && (i += ";"),
      this.builder(i, e);
  }
  document(e) {
    this.body(e);
  }
  raw(e, t, u) {
    let i;
    if ((u || (u = t), t && ((i = e.raws[t]), typeof i < "u"))) return i;
    let n = e.parent;
    if (
      u === "before" &&
      (!n ||
        (n.type === "root" && n.first === e) ||
        (n && n.type === "document"))
    )
      return "";
    if (!n) return Eu[u];
    let o = e.root();
    if ((o.rawCache || (o.rawCache = {}), typeof o.rawCache[u] < "u"))
      return o.rawCache[u];
    if (u === "before" || u === "after") return this.beforeAfter(e, u);
    {
      let l = "raw" + Bn(u);
      this[l]
        ? (i = this[l](o, e))
        : o.walk((s) => {
            if (((i = s.raws[t]), typeof i < "u")) return !1;
          });
    }
    return typeof i > "u" && (i = Eu[u]), (o.rawCache[u] = i), i;
  }
  rawBeforeClose(e) {
    let t;
    return (
      e.walk((u) => {
        if (u.nodes && u.nodes.length > 0 && typeof u.raws.after < "u")
          return (
            (t = u.raws.after),
            t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")),
            !1
          );
      }),
      t && (t = t.replace(/\S/g, "")),
      t
    );
  }
  rawBeforeComment(e, t) {
    let u;
    return (
      e.walkComments((i) => {
        if (typeof i.raws.before < "u")
          return (
            (u = i.raws.before),
            u.includes(`
`) && (u = u.replace(/[^\n]+$/, "")),
            !1
          );
      }),
      typeof u > "u"
        ? (u = this.raw(t, null, "beforeDecl"))
        : u && (u = u.replace(/\S/g, "")),
      u
    );
  }
  rawBeforeDecl(e, t) {
    let u;
    return (
      e.walkDecls((i) => {
        if (typeof i.raws.before < "u")
          return (
            (u = i.raws.before),
            u.includes(`
`) && (u = u.replace(/[^\n]+$/, "")),
            !1
          );
      }),
      typeof u > "u"
        ? (u = this.raw(t, null, "beforeRule"))
        : u && (u = u.replace(/\S/g, "")),
      u
    );
  }
  rawBeforeOpen(e) {
    let t;
    return (
      e.walk((u) => {
        if (u.type !== "decl" && ((t = u.raws.between), typeof t < "u"))
          return !1;
      }),
      t
    );
  }
  rawBeforeRule(e) {
    let t;
    return (
      e.walk((u) => {
        if (
          u.nodes &&
          (u.parent !== e || e.first !== u) &&
          typeof u.raws.before < "u"
        )
          return (
            (t = u.raws.before),
            t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")),
            !1
          );
      }),
      t && (t = t.replace(/\S/g, "")),
      t
    );
  }
  rawColon(e) {
    let t;
    return (
      e.walkDecls((u) => {
        if (typeof u.raws.between < "u")
          return (t = u.raws.between.replace(/[^\s:]/g, "")), !1;
      }),
      t
    );
  }
  rawEmptyBody(e) {
    let t;
    return (
      e.walk((u) => {
        if (
          u.nodes &&
          u.nodes.length === 0 &&
          ((t = u.raws.after), typeof t < "u")
        )
          return !1;
      }),
      t
    );
  }
  rawIndent(e) {
    if (e.raws.indent) return e.raws.indent;
    let t;
    return (
      e.walk((u) => {
        let i = u.parent;
        if (
          i &&
          i !== e &&
          i.parent &&
          i.parent === e &&
          typeof u.raws.before < "u"
        ) {
          let n = u.raws.before.split(`
`);
          return (t = n[n.length - 1]), (t = t.replace(/\S/g, "")), !1;
        }
      }),
      t
    );
  }
  rawSemicolon(e) {
    let t;
    return (
      e.walk((u) => {
        if (
          u.nodes &&
          u.nodes.length &&
          u.last.type === "decl" &&
          ((t = u.raws.semicolon), typeof t < "u")
        )
          return !1;
      }),
      t
    );
  }
  rawValue(e, t) {
    let u = e[t],
      i = e.raws[t];
    return i && i.value === u ? i.raw : u;
  }
  root(e) {
    this.body(e), e.raws.after && this.builder(e.raws.after);
  }
  rule(e) {
    this.block(e, this.rawValue(e, "selector")),
      e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
  }
  stringify(e, t) {
    if (!this[e.type])
      throw new Error(
        "Unknown AST node type " +
          e.type +
          ". Maybe you need to change PostCSS stringifier."
      );
    this[e.type](e, t);
  }
};
var wr = Mt;
Mt.default = Mt;
let Un = wr;
function Rt(r, e) {
  new Un(e).stringify(r);
}
var gt = Rt;
Rt.default = Rt;
var $e = {};
$e.isClean = Symbol("isClean");
$e.my = Symbol("my");
let $n = ru,
  Hn = wr,
  Fn = gt,
  { isClean: Ee, my: Vn } = $e;
function qt(r, e) {
  let t = new r.constructor();
  for (let u in r) {
    if (!Object.prototype.hasOwnProperty.call(r, u) || u === "proxyCache")
      continue;
    let i = r[u],
      n = typeof i;
    u === "parent" && n === "object"
      ? e && (t[u] = e)
      : u === "source"
      ? (t[u] = i)
      : Array.isArray(i)
      ? (t[u] = i.map((o) => qt(o, t)))
      : (n === "object" && i !== null && (i = qt(i)), (t[u] = i));
  }
  return t;
}
function Ae(r, e) {
  if (e && typeof e.offset < "u") return e.offset;
  let t = 1,
    u = 1,
    i = 0;
  for (let n = 0; n < r.length; n++) {
    if (u === e.line && t === e.column) {
      i = n;
      break;
    }
    r[n] ===
    `
`
      ? ((t = 1), (u += 1))
      : (t += 1);
  }
  return i;
}
let kt = class {
  constructor(e = {}) {
    (this.raws = {}), (this[Ee] = !1), (this[Vn] = !0);
    for (let t in e)
      if (t === "nodes") {
        this.nodes = [];
        for (let u of e[t])
          typeof u.clone == "function"
            ? this.append(u.clone())
            : this.append(u);
      } else this[t] = e[t];
  }
  addToError(e) {
    if (
      ((e.postcssNode = this),
      e.stack && this.source && /\n\s{4}at /.test(e.stack))
    ) {
      let t = this.source;
      e.stack = e.stack.replace(
        /\n\s{4}at /,
        `$&${t.input.from}:${t.start.line}:${t.start.column}$&`
      );
    }
    return e;
  }
  after(e) {
    return this.parent.insertAfter(this, e), this;
  }
  assign(e = {}) {
    for (let t in e) this[t] = e[t];
    return this;
  }
  before(e) {
    return this.parent.insertBefore(this, e), this;
  }
  cleanRaws(e) {
    delete this.raws.before,
      delete this.raws.after,
      e || delete this.raws.between;
  }
  clone(e = {}) {
    let t = qt(this);
    for (let u in e) t[u] = e[u];
    return t;
  }
  cloneAfter(e = {}) {
    let t = this.clone(e);
    return this.parent.insertAfter(this, t), t;
  }
  cloneBefore(e = {}) {
    let t = this.clone(e);
    return this.parent.insertBefore(this, t), t;
  }
  error(e, t = {}) {
    if (this.source) {
      let { end: u, start: i } = this.rangeBy(t);
      return this.source.input.error(
        e,
        { column: i.column, line: i.line },
        { column: u.column, line: u.line },
        t
      );
    }
    return new $n(e);
  }
  getProxyProcessor() {
    return {
      get(e, t) {
        return t === "proxyOf"
          ? e
          : t === "root"
          ? () => e.root().toProxy()
          : e[t];
      },
      set(e, t, u) {
        return (
          e[t] === u ||
            ((e[t] = u),
            (t === "prop" ||
              t === "value" ||
              t === "name" ||
              t === "params" ||
              t === "important" ||
              t === "text") &&
              e.markDirty()),
          !0
        );
      },
    };
  }
  markClean() {
    this[Ee] = !0;
  }
  markDirty() {
    if (this[Ee]) {
      this[Ee] = !1;
      let e = this;
      for (; (e = e.parent); ) e[Ee] = !1;
    }
  }
  next() {
    if (!this.parent) return;
    let e = this.parent.index(this);
    return this.parent.nodes[e + 1];
  }
  positionBy(e) {
    let t = this.source.start;
    if (e.index) t = this.positionInside(e.index);
    else if (e.word) {
      let i = this.source.input.css
        .slice(
          Ae(this.source.input.css, this.source.start),
          Ae(this.source.input.css, this.source.end)
        )
        .indexOf(e.word);
      i !== -1 && (t = this.positionInside(i));
    }
    return t;
  }
  positionInside(e) {
    let t = this.source.start.column,
      u = this.source.start.line,
      i = Ae(this.source.input.css, this.source.start),
      n = i + e;
    for (let o = i; o < n; o++)
      this.source.input.css[o] ===
      `
`
        ? ((t = 1), (u += 1))
        : (t += 1);
    return { column: t, line: u };
  }
  prev() {
    if (!this.parent) return;
    let e = this.parent.index(this);
    return this.parent.nodes[e - 1];
  }
  rangeBy(e) {
    let t = { column: this.source.start.column, line: this.source.start.line },
      u = this.source.end
        ? { column: this.source.end.column + 1, line: this.source.end.line }
        : { column: t.column + 1, line: t.line };
    if (e.word) {
      let n = this.source.input.css
        .slice(
          Ae(this.source.input.css, this.source.start),
          Ae(this.source.input.css, this.source.end)
        )
        .indexOf(e.word);
      n !== -1 &&
        ((t = this.positionInside(n)),
        (u = this.positionInside(n + e.word.length)));
    } else
      e.start
        ? (t = { column: e.start.column, line: e.start.line })
        : e.index && (t = this.positionInside(e.index)),
        e.end
          ? (u = { column: e.end.column, line: e.end.line })
          : typeof e.endIndex == "number"
          ? (u = this.positionInside(e.endIndex))
          : e.index && (u = this.positionInside(e.index + 1));
    return (
      (u.line < t.line || (u.line === t.line && u.column <= t.column)) &&
        (u = { column: t.column + 1, line: t.line }),
      { end: u, start: t }
    );
  }
  raw(e, t) {
    return new Hn().raw(this, e, t);
  }
  remove() {
    return (
      this.parent && this.parent.removeChild(this), (this.parent = void 0), this
    );
  }
  replaceWith(...e) {
    if (this.parent) {
      let t = this,
        u = !1;
      for (let i of e)
        i === this
          ? (u = !0)
          : u
          ? (this.parent.insertAfter(t, i), (t = i))
          : this.parent.insertBefore(t, i);
      u || this.remove();
    }
    return this;
  }
  root() {
    let e = this;
    for (; e.parent && e.parent.type !== "document"; ) e = e.parent;
    return e;
  }
  toJSON(e, t) {
    let u = {},
      i = t == null;
    t = t || new Map();
    let n = 0;
    for (let o in this) {
      if (
        !Object.prototype.hasOwnProperty.call(this, o) ||
        o === "parent" ||
        o === "proxyCache"
      )
        continue;
      let l = this[o];
      if (Array.isArray(l))
        u[o] = l.map((s) =>
          typeof s == "object" && s.toJSON ? s.toJSON(null, t) : s
        );
      else if (typeof l == "object" && l.toJSON) u[o] = l.toJSON(null, t);
      else if (o === "source") {
        let s = t.get(l.input);
        s == null && ((s = n), t.set(l.input, n), n++),
          (u[o] = { end: l.end, inputId: s, start: l.start });
      } else u[o] = l;
    }
    return i && (u.inputs = [...t.keys()].map((o) => o.toJSON())), u;
  }
  toProxy() {
    return (
      this.proxyCache ||
        (this.proxyCache = new Proxy(this, this.getProxyProcessor())),
      this.proxyCache
    );
  }
  toString(e = Fn) {
    e.stringify && (e = e.stringify);
    let t = "";
    return (
      e(this, (u) => {
        t += u;
      }),
      t
    );
  }
  warn(e, t, u) {
    let i = { node: this };
    for (let n in u) i[n] = u[n];
    return e.warn(t, i);
  }
  get proxyOf() {
    return this;
  }
};
var yt = kt;
kt.default = kt;
let zn = yt,
  jt = class extends zn {
    constructor(e) {
      super(e), (this.type = "comment");
    }
  };
var xt = jt;
jt.default = jt;
let Gn = yt,
  Bt = class extends Gn {
    constructor(e) {
      e &&
        typeof e.value < "u" &&
        typeof e.value != "string" &&
        (e = { ...e, value: String(e.value) }),
        super(e),
        (this.type = "decl");
    }
    get variable() {
      return this.prop.startsWith("--") || this.prop[0] === "$";
    }
  };
var vt = Bt;
Bt.default = Bt;
let Sr = xt,
  Tr = vt,
  Wn = yt,
  { isClean: Er, my: Ar } = $e,
  iu,
  Or,
  _r,
  nu;
function Nr(r) {
  return r.map((e) => (e.nodes && (e.nodes = Nr(e.nodes)), delete e.source, e));
}
function Ir(r) {
  if (((r[Er] = !1), r.proxyOf.nodes)) for (let e of r.proxyOf.nodes) Ir(e);
}
let se = class Cr extends Wn {
  append(...e) {
    for (let t of e) {
      let u = this.normalize(t, this.last);
      for (let i of u) this.proxyOf.nodes.push(i);
    }
    return this.markDirty(), this;
  }
  cleanRaws(e) {
    if ((super.cleanRaws(e), this.nodes))
      for (let t of this.nodes) t.cleanRaws(e);
  }
  each(e) {
    if (!this.proxyOf.nodes) return;
    let t = this.getIterator(),
      u,
      i;
    for (
      ;
      this.indexes[t] < this.proxyOf.nodes.length &&
      ((u = this.indexes[t]), (i = e(this.proxyOf.nodes[u], u)), i !== !1);

    )
      this.indexes[t] += 1;
    return delete this.indexes[t], i;
  }
  every(e) {
    return this.nodes.every(e);
  }
  getIterator() {
    this.lastEach || (this.lastEach = 0),
      this.indexes || (this.indexes = {}),
      (this.lastEach += 1);
    let e = this.lastEach;
    return (this.indexes[e] = 0), e;
  }
  getProxyProcessor() {
    return {
      get(e, t) {
        return t === "proxyOf"
          ? e
          : e[t]
          ? t === "each" || (typeof t == "string" && t.startsWith("walk"))
            ? (...u) =>
                e[t](
                  ...u.map((i) =>
                    typeof i == "function" ? (n, o) => i(n.toProxy(), o) : i
                  )
                )
            : t === "every" || t === "some"
            ? (u) => e[t]((i, ...n) => u(i.toProxy(), ...n))
            : t === "root"
            ? () => e.root().toProxy()
            : t === "nodes"
            ? e.nodes.map((u) => u.toProxy())
            : t === "first" || t === "last"
            ? e[t].toProxy()
            : e[t]
          : e[t];
      },
      set(e, t, u) {
        return (
          e[t] === u ||
            ((e[t] = u),
            (t === "name" || t === "params" || t === "selector") &&
              e.markDirty()),
          !0
        );
      },
    };
  }
  index(e) {
    return typeof e == "number"
      ? e
      : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
  }
  insertAfter(e, t) {
    let u = this.index(e),
      i = this.normalize(t, this.proxyOf.nodes[u]).reverse();
    u = this.index(e);
    for (let o of i) this.proxyOf.nodes.splice(u + 1, 0, o);
    let n;
    for (let o in this.indexes)
      (n = this.indexes[o]), u < n && (this.indexes[o] = n + i.length);
    return this.markDirty(), this;
  }
  insertBefore(e, t) {
    let u = this.index(e),
      i = u === 0 ? "prepend" : !1,
      n = this.normalize(t, this.proxyOf.nodes[u], i).reverse();
    u = this.index(e);
    for (let l of n) this.proxyOf.nodes.splice(u, 0, l);
    let o;
    for (let l in this.indexes)
      (o = this.indexes[l]), u <= o && (this.indexes[l] = o + n.length);
    return this.markDirty(), this;
  }
  normalize(e, t) {
    if (typeof e == "string") e = Nr(Or(e).nodes);
    else if (typeof e > "u") e = [];
    else if (Array.isArray(e)) {
      e = e.slice(0);
      for (let i of e) i.parent && i.parent.removeChild(i, "ignore");
    } else if (e.type === "root" && this.type !== "document") {
      e = e.nodes.slice(0);
      for (let i of e) i.parent && i.parent.removeChild(i, "ignore");
    } else if (e.type) e = [e];
    else if (e.prop) {
      if (typeof e.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof e.value != "string" && (e.value = String(e.value)),
        (e = [new Tr(e)]);
    } else if (e.selector || e.selectors) e = [new nu(e)];
    else if (e.name) e = [new iu(e)];
    else if (e.text) e = [new Sr(e)];
    else throw new Error("Unknown node type in node creation");
    return e.map(
      (i) => (
        i[Ar] || Cr.rebuild(i),
        (i = i.proxyOf),
        i.parent && i.parent.removeChild(i),
        i[Er] && Ir(i),
        i.raws || (i.raws = {}),
        typeof i.raws.before > "u" &&
          t &&
          typeof t.raws.before < "u" &&
          (i.raws.before = t.raws.before.replace(/\S/g, "")),
        (i.parent = this.proxyOf),
        i
      )
    );
  }
  prepend(...e) {
    e = e.reverse();
    for (let t of e) {
      let u = this.normalize(t, this.first, "prepend").reverse();
      for (let i of u) this.proxyOf.nodes.unshift(i);
      for (let i in this.indexes) this.indexes[i] = this.indexes[i] + u.length;
    }
    return this.markDirty(), this;
  }
  push(e) {
    return (e.parent = this), this.proxyOf.nodes.push(e), this;
  }
  removeAll() {
    for (let e of this.proxyOf.nodes) e.parent = void 0;
    return (this.proxyOf.nodes = []), this.markDirty(), this;
  }
  removeChild(e) {
    (e = this.index(e)),
      (this.proxyOf.nodes[e].parent = void 0),
      this.proxyOf.nodes.splice(e, 1);
    let t;
    for (let u in this.indexes)
      (t = this.indexes[u]), t >= e && (this.indexes[u] = t - 1);
    return this.markDirty(), this;
  }
  replaceValues(e, t, u) {
    return (
      u || ((u = t), (t = {})),
      this.walkDecls((i) => {
        (t.props && !t.props.includes(i.prop)) ||
          (t.fast && !i.value.includes(t.fast)) ||
          (i.value = i.value.replace(e, u));
      }),
      this.markDirty(),
      this
    );
  }
  some(e) {
    return this.nodes.some(e);
  }
  walk(e) {
    return this.each((t, u) => {
      let i;
      try {
        i = e(t, u);
      } catch (n) {
        throw t.addToError(n);
      }
      return i !== !1 && t.walk && (i = t.walk(e)), i;
    });
  }
  walkAtRules(e, t) {
    return t
      ? e instanceof RegExp
        ? this.walk((u, i) => {
            if (u.type === "atrule" && e.test(u.name)) return t(u, i);
          })
        : this.walk((u, i) => {
            if (u.type === "atrule" && u.name === e) return t(u, i);
          })
      : ((t = e),
        this.walk((u, i) => {
          if (u.type === "atrule") return t(u, i);
        }));
  }
  walkComments(e) {
    return this.walk((t, u) => {
      if (t.type === "comment") return e(t, u);
    });
  }
  walkDecls(e, t) {
    return t
      ? e instanceof RegExp
        ? this.walk((u, i) => {
            if (u.type === "decl" && e.test(u.prop)) return t(u, i);
          })
        : this.walk((u, i) => {
            if (u.type === "decl" && u.prop === e) return t(u, i);
          })
      : ((t = e),
        this.walk((u, i) => {
          if (u.type === "decl") return t(u, i);
        }));
  }
  walkRules(e, t) {
    return t
      ? e instanceof RegExp
        ? this.walk((u, i) => {
            if (u.type === "rule" && e.test(u.selector)) return t(u, i);
          })
        : this.walk((u, i) => {
            if (u.type === "rule" && u.selector === e) return t(u, i);
          })
      : ((t = e),
        this.walk((u, i) => {
          if (u.type === "rule") return t(u, i);
        }));
  }
  get first() {
    if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
  }
  get last() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
};
se.registerParse = (r) => {
  Or = r;
};
se.registerRule = (r) => {
  nu = r;
};
se.registerAtRule = (r) => {
  iu = r;
};
se.registerRoot = (r) => {
  _r = r;
};
var he = se;
se.default = se;
se.rebuild = (r) => {
  r.type === "atrule"
    ? Object.setPrototypeOf(r, iu.prototype)
    : r.type === "rule"
    ? Object.setPrototypeOf(r, nu.prototype)
    : r.type === "decl"
    ? Object.setPrototypeOf(r, Tr.prototype)
    : r.type === "comment"
    ? Object.setPrototypeOf(r, Sr.prototype)
    : r.type === "root" && Object.setPrototypeOf(r, _r.prototype),
    (r[Ar] = !0),
    r.nodes &&
      r.nodes.forEach((e) => {
        se.rebuild(e);
      });
};
let Dr = he,
  st = class extends Dr {
    constructor(e) {
      super(e), (this.type = "atrule");
    }
    append(...e) {
      return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
    }
    prepend(...e) {
      return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
    }
  };
var au = st;
st.default = st;
Dr.registerAtRule(st);
let Xn = he,
  Lr,
  Pr,
  Pe = class extends Xn {
    constructor(e) {
      super({ type: "document", ...e }), this.nodes || (this.nodes = []);
    }
    toResult(e = {}) {
      return new Lr(new Pr(), this, e).stringify();
    }
  };
Pe.registerLazyResult = (r) => {
  Lr = r;
};
Pe.registerProcessor = (r) => {
  Pr = r;
};
var su = Pe;
Pe.default = Pe;
let Qn = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",
  Jn =
    (r, e = 21) =>
    (t = e) => {
      let u = "",
        i = t | 0;
      for (; i--; ) u += r[(Math.random() * r.length) | 0];
      return u;
    },
  Zn = (r = 21) => {
    let e = "",
      t = r | 0;
    for (; t--; ) e += Qn[(Math.random() * 64) | 0];
    return e;
  };
var Yn = { nanoid: Zn, customAlphabet: Jn };
let { existsSync: Kn, readFileSync: e0 } = ee,
  { dirname: At, join: t0 } = ee,
  { SourceMapConsumer: Au, SourceMapGenerator: Ou } = ee;
function u0(r) {
  return Buffer ? Buffer.from(r, "base64").toString() : window.atob(r);
}
let Ut = class {
  constructor(e, t) {
    if (t.map === !1) return;
    this.loadAnnotation(e),
      (this.inline = this.startWith(this.annotation, "data:"));
    let u = t.map ? t.map.prev : void 0,
      i = this.loadMap(t.from, u);
    !this.mapFile && t.from && (this.mapFile = t.from),
      this.mapFile && (this.root = At(this.mapFile)),
      i && (this.text = i);
  }
  consumer() {
    return (
      this.consumerCache || (this.consumerCache = new Au(this.text)),
      this.consumerCache
    );
  }
  decodeInline(e) {
    let t = /^data:application\/json;charset=utf-?8;base64,/,
      u = /^data:application\/json;base64,/,
      i = /^data:application\/json;charset=utf-?8,/,
      n = /^data:application\/json,/,
      o = e.match(i) || e.match(n);
    if (o) return decodeURIComponent(e.substr(o[0].length));
    let l = e.match(t) || e.match(u);
    if (l) return u0(e.substr(l[0].length));
    let s = e.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + s);
  }
  getAnnotationURL(e) {
    return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  isMap(e) {
    return typeof e != "object"
      ? !1
      : typeof e.mappings == "string" ||
          typeof e._mappings == "string" ||
          Array.isArray(e.sections);
  }
  loadAnnotation(e) {
    let t = e.match(/\/\*\s*# sourceMappingURL=/g);
    if (!t) return;
    let u = e.lastIndexOf(t.pop()),
      i = e.indexOf("*/", u);
    u > -1 &&
      i > -1 &&
      (this.annotation = this.getAnnotationURL(e.substring(u, i)));
  }
  loadFile(e) {
    if (((this.root = At(e)), Kn(e)))
      return (this.mapFile = e), e0(e, "utf-8").toString().trim();
  }
  loadMap(e, t) {
    if (t === !1) return !1;
    if (t) {
      if (typeof t == "string") return t;
      if (typeof t == "function") {
        let u = t(e);
        if (u) {
          let i = this.loadFile(u);
          if (!i)
            throw new Error(
              "Unable to load previous source map: " + u.toString()
            );
          return i;
        }
      } else {
        if (t instanceof Au) return Ou.fromSourceMap(t).toString();
        if (t instanceof Ou) return t.toString();
        if (this.isMap(t)) return JSON.stringify(t);
        throw new Error(
          "Unsupported previous source map format: " + t.toString()
        );
      }
    } else {
      if (this.inline) return this.decodeInline(this.annotation);
      if (this.annotation) {
        let u = this.annotation;
        return e && (u = t0(At(e), u)), this.loadFile(u);
      }
    }
  }
  startWith(e, t) {
    return e ? e.substr(0, t.length) === t : !1;
  }
  withContent() {
    return !!(
      this.consumer().sourcesContent &&
      this.consumer().sourcesContent.length > 0
    );
  }
};
var Mr = Ut;
Ut.default = Ut;
let { nanoid: r0 } = Yn,
  { isAbsolute: $t, resolve: Ht } = ee,
  { SourceMapConsumer: i0, SourceMapGenerator: n0 } = ee,
  { fileURLToPath: _u, pathToFileURL: ze } = ee,
  Nu = ru,
  a0 = Mr,
  Ot = ee,
  _t = Symbol("fromOffsetCache"),
  s0 = !!(i0 && n0),
  Iu = !!(Ht && $t),
  ot = class {
    constructor(e, t = {}) {
      if (e === null || typeof e > "u" || (typeof e == "object" && !e.toString))
        throw new Error(`PostCSS received ${e} instead of CSS string`);
      if (
        ((this.css = e.toString()),
        this.css[0] === "\uFEFF" || this.css[0] === "￾"
          ? ((this.hasBOM = !0), (this.css = this.css.slice(1)))
          : (this.hasBOM = !1),
        t.from &&
          (!Iu || /^\w+:\/\//.test(t.from) || $t(t.from)
            ? (this.file = t.from)
            : (this.file = Ht(t.from))),
        Iu && s0)
      ) {
        let u = new a0(this.css, t);
        if (u.text) {
          this.map = u;
          let i = u.consumer().file;
          !this.file && i && (this.file = this.mapResolve(i));
        }
      }
      this.file || (this.id = "<input css " + r0(6) + ">"),
        this.map && (this.map.file = this.from);
    }
    error(e, t, u, i = {}) {
      let n, o, l;
      if (t && typeof t == "object") {
        let f = t,
          d = u;
        if (typeof f.offset == "number") {
          let p = this.fromOffset(f.offset);
          (t = p.line), (u = p.col);
        } else (t = f.line), (u = f.column);
        if (typeof d.offset == "number") {
          let p = this.fromOffset(d.offset);
          (o = p.line), (n = p.col);
        } else (o = d.line), (n = d.column);
      } else if (!u) {
        let f = this.fromOffset(t);
        (t = f.line), (u = f.col);
      }
      let s = this.origin(t, u, o, n);
      return (
        s
          ? (l = new Nu(
              e,
              s.endLine === void 0
                ? s.line
                : { column: s.column, line: s.line },
              s.endLine === void 0
                ? s.column
                : { column: s.endColumn, line: s.endLine },
              s.source,
              s.file,
              i.plugin
            ))
          : (l = new Nu(
              e,
              o === void 0 ? t : { column: u, line: t },
              o === void 0 ? u : { column: n, line: o },
              this.css,
              this.file,
              i.plugin
            )),
        (l.input = {
          column: u,
          endColumn: n,
          endLine: o,
          line: t,
          source: this.css,
        }),
        this.file &&
          (ze && (l.input.url = ze(this.file).toString()),
          (l.input.file = this.file)),
        l
      );
    }
    fromOffset(e) {
      let t, u;
      if (this[_t]) u = this[_t];
      else {
        let n = this.css.split(`
`);
        u = new Array(n.length);
        let o = 0;
        for (let l = 0, s = n.length; l < s; l++)
          (u[l] = o), (o += n[l].length + 1);
        this[_t] = u;
      }
      t = u[u.length - 1];
      let i = 0;
      if (e >= t) i = u.length - 1;
      else {
        let n = u.length - 2,
          o;
        for (; i < n; )
          if (((o = i + ((n - i) >> 1)), e < u[o])) n = o - 1;
          else if (e >= u[o + 1]) i = o + 1;
          else {
            i = o;
            break;
          }
      }
      return { col: e - u[i] + 1, line: i + 1 };
    }
    mapResolve(e) {
      return /^\w+:\/\//.test(e)
        ? e
        : Ht(this.map.consumer().sourceRoot || this.map.root || ".", e);
    }
    origin(e, t, u, i) {
      if (!this.map) return !1;
      let n = this.map.consumer(),
        o = n.originalPositionFor({ column: t, line: e });
      if (!o.source) return !1;
      let l;
      typeof u == "number" &&
        (l = n.originalPositionFor({ column: i, line: u }));
      let s;
      $t(o.source)
        ? (s = ze(o.source))
        : (s = new URL(
            o.source,
            this.map.consumer().sourceRoot || ze(this.map.mapFile)
          ));
      let f = {
        column: o.column,
        endColumn: l && l.column,
        endLine: l && l.line,
        line: o.line,
        url: s.toString(),
      };
      if (s.protocol === "file:")
        if (_u) f.file = _u(s);
        else
          throw new Error(
            "file: protocol is not available in this PostCSS build"
          );
      let d = n.sourceContentFor(o.source);
      return d && (f.source = d), f;
    }
    toJSON() {
      let e = {};
      for (let t of ["hasBOM", "css", "file", "id"])
        this[t] != null && (e[t] = this[t]);
      return (
        this.map &&
          ((e.map = { ...this.map }),
          e.map.consumerCache && (e.map.consumerCache = void 0)),
        e
      );
    }
    get from() {
      return this.file || this.id;
    }
  };
var wt = ot;
ot.default = ot;
Ot && Ot.registerInput && Ot.registerInput(ot);
let Rr = he,
  qr,
  kr,
  xe = class extends Rr {
    constructor(e) {
      super(e), (this.type = "root"), this.nodes || (this.nodes = []);
    }
    normalize(e, t, u) {
      let i = super.normalize(e);
      if (t) {
        if (u === "prepend")
          this.nodes.length > 1
            ? (t.raws.before = this.nodes[1].raws.before)
            : delete t.raws.before;
        else if (this.first !== t)
          for (let n of i) n.raws.before = t.raws.before;
      }
      return i;
    }
    removeChild(e, t) {
      let u = this.index(e);
      return (
        !t &&
          u === 0 &&
          this.nodes.length > 1 &&
          (this.nodes[1].raws.before = this.nodes[u].raws.before),
        super.removeChild(e)
      );
    }
    toResult(e = {}) {
      return new qr(new kr(), this, e).stringify();
    }
  };
xe.registerLazyResult = (r) => {
  qr = r;
};
xe.registerProcessor = (r) => {
  kr = r;
};
var He = xe;
xe.default = xe;
Rr.registerRoot(xe);
let Me = {
  comma(r) {
    return Me.split(r, [","], !0);
  },
  space(r) {
    let e = [
      " ",
      `
`,
      "	",
    ];
    return Me.split(r, e);
  },
  split(r, e, t) {
    let u = [],
      i = "",
      n = !1,
      o = 0,
      l = !1,
      s = "",
      f = !1;
    for (let d of r)
      f
        ? (f = !1)
        : d === "\\"
        ? (f = !0)
        : l
        ? d === s && (l = !1)
        : d === '"' || d === "'"
        ? ((l = !0), (s = d))
        : d === "("
        ? (o += 1)
        : d === ")"
        ? o > 0 && (o -= 1)
        : o === 0 && e.includes(d) && (n = !0),
        n ? (i !== "" && u.push(i.trim()), (i = ""), (n = !1)) : (i += d);
    return (t || i !== "") && u.push(i.trim()), u;
  },
};
var jr = Me;
Me.default = Me;
let Br = he,
  o0 = jr,
  ct = class extends Br {
    constructor(e) {
      super(e), (this.type = "rule"), this.nodes || (this.nodes = []);
    }
    get selectors() {
      return o0.comma(this.selector);
    }
    set selectors(e) {
      let t = this.selector ? this.selector.match(/,\s*/) : null,
        u = t ? t[0] : "," + this.raw("between", "beforeOpen");
      this.selector = e.join(u);
    }
  };
var ou = ct;
ct.default = ct;
Br.registerRule(ct);
let c0 = au,
  l0 = xt,
  f0 = vt,
  d0 = wt,
  h0 = Mr,
  p0 = He,
  b0 = ou;
function Re(r, e) {
  if (Array.isArray(r)) return r.map((i) => Re(i));
  let { inputs: t, ...u } = r;
  if (t) {
    e = [];
    for (let i of t) {
      let n = { ...i, __proto__: d0.prototype };
      n.map && (n.map = { ...n.map, __proto__: h0.prototype }), e.push(n);
    }
  }
  if ((u.nodes && (u.nodes = r.nodes.map((i) => Re(i, e))), u.source)) {
    let { inputId: i, ...n } = u.source;
    (u.source = n), i != null && (u.source.input = e[i]);
  }
  if (u.type === "root") return new p0(u);
  if (u.type === "decl") return new f0(u);
  if (u.type === "rule") return new b0(u);
  if (u.type === "comment") return new l0(u);
  if (u.type === "atrule") return new c0(u);
  throw new Error("Unknown node type: " + r.type);
}
var m0 = Re;
Re.default = Re;
let { dirname: tt, relative: Ur, resolve: $r, sep: Hr } = ee,
  { SourceMapConsumer: Fr, SourceMapGenerator: ut } = ee,
  { pathToFileURL: Cu } = ee,
  g0 = wt,
  y0 = !!(Fr && ut),
  x0 = !!(tt && $r && Ur && Hr),
  v0 = class {
    constructor(e, t, u, i) {
      (this.stringify = e),
        (this.mapOpts = u.map || {}),
        (this.root = t),
        (this.opts = u),
        (this.css = i),
        (this.originalCSS = i),
        (this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute),
        (this.memoizedFileURLs = new Map()),
        (this.memoizedPaths = new Map()),
        (this.memoizedURLs = new Map());
    }
    addAnnotation() {
      let e;
      this.isInline()
        ? (e =
            "data:application/json;base64," +
            this.toBase64(this.map.toString()))
        : typeof this.mapOpts.annotation == "string"
        ? (e = this.mapOpts.annotation)
        : typeof this.mapOpts.annotation == "function"
        ? (e = this.mapOpts.annotation(this.opts.to, this.root))
        : (e = this.outputFile() + ".map");
      let t = `
`;
      this.css.includes(`\r
`) &&
        (t = `\r
`),
        (this.css += t + "/*# sourceMappingURL=" + e + " */");
    }
    applyPrevMaps() {
      for (let e of this.previous()) {
        let t = this.toUrl(this.path(e.file)),
          u = e.root || tt(e.file),
          i;
        this.mapOpts.sourcesContent === !1
          ? ((i = new Fr(e.text)),
            i.sourcesContent && (i.sourcesContent = null))
          : (i = e.consumer()),
          this.map.applySourceMap(i, t, this.toUrl(this.path(u)));
      }
    }
    clearAnnotation() {
      if (this.mapOpts.annotation !== !1)
        if (this.root) {
          let e;
          for (let t = this.root.nodes.length - 1; t >= 0; t--)
            (e = this.root.nodes[t]),
              e.type === "comment" &&
                e.text.startsWith("# sourceMappingURL=") &&
                this.root.removeChild(t);
        } else
          this.css &&
            (this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, ""));
    }
    generate() {
      if ((this.clearAnnotation(), x0 && y0 && this.isMap()))
        return this.generateMap();
      {
        let e = "";
        return (
          this.stringify(this.root, (t) => {
            e += t;
          }),
          [e]
        );
      }
    }
    generateMap() {
      if (this.root) this.generateString();
      else if (this.previous().length === 1) {
        let e = this.previous()[0].consumer();
        (e.file = this.outputFile()),
          (this.map = ut.fromSourceMap(e, { ignoreInvalidMapping: !0 }));
      } else
        (this.map = new ut({
          file: this.outputFile(),
          ignoreInvalidMapping: !0,
        })),
          this.map.addMapping({
            generated: { column: 0, line: 1 },
            original: { column: 0, line: 1 },
            source: this.opts.from
              ? this.toUrl(this.path(this.opts.from))
              : "<no source>",
          });
      return (
        this.isSourcesContent() && this.setSourcesContent(),
        this.root && this.previous().length > 0 && this.applyPrevMaps(),
        this.isAnnotation() && this.addAnnotation(),
        this.isInline() ? [this.css] : [this.css, this.map]
      );
    }
    generateString() {
      (this.css = ""),
        (this.map = new ut({
          file: this.outputFile(),
          ignoreInvalidMapping: !0,
        }));
      let e = 1,
        t = 1,
        u = "<no source>",
        i = {
          generated: { column: 0, line: 0 },
          original: { column: 0, line: 0 },
          source: "",
        },
        n,
        o;
      this.stringify(this.root, (l, s, f) => {
        if (
          ((this.css += l),
          s &&
            f !== "end" &&
            ((i.generated.line = e),
            (i.generated.column = t - 1),
            s.source && s.source.start
              ? ((i.source = this.sourcePath(s)),
                (i.original.line = s.source.start.line),
                (i.original.column = s.source.start.column - 1),
                this.map.addMapping(i))
              : ((i.source = u),
                (i.original.line = 1),
                (i.original.column = 0),
                this.map.addMapping(i))),
          (o = l.match(/\n/g)),
          o
            ? ((e += o.length),
              (n = l.lastIndexOf(`
`)),
              (t = l.length - n))
            : (t += l.length),
          s && f !== "start")
        ) {
          let d = s.parent || { raws: {} };
          (!(s.type === "decl" || (s.type === "atrule" && !s.nodes)) ||
            s !== d.last ||
            d.raws.semicolon) &&
            (s.source && s.source.end
              ? ((i.source = this.sourcePath(s)),
                (i.original.line = s.source.end.line),
                (i.original.column = s.source.end.column - 1),
                (i.generated.line = e),
                (i.generated.column = t - 2),
                this.map.addMapping(i))
              : ((i.source = u),
                (i.original.line = 1),
                (i.original.column = 0),
                (i.generated.line = e),
                (i.generated.column = t - 1),
                this.map.addMapping(i)));
        }
      });
    }
    isAnnotation() {
      return this.isInline()
        ? !0
        : typeof this.mapOpts.annotation < "u"
        ? this.mapOpts.annotation
        : this.previous().length
        ? this.previous().some((e) => e.annotation)
        : !0;
    }
    isInline() {
      if (typeof this.mapOpts.inline < "u") return this.mapOpts.inline;
      let e = this.mapOpts.annotation;
      return typeof e < "u" && e !== !0
        ? !1
        : this.previous().length
        ? this.previous().some((t) => t.inline)
        : !0;
    }
    isMap() {
      return typeof this.opts.map < "u"
        ? !!this.opts.map
        : this.previous().length > 0;
    }
    isSourcesContent() {
      return typeof this.mapOpts.sourcesContent < "u"
        ? this.mapOpts.sourcesContent
        : this.previous().length
        ? this.previous().some((e) => e.withContent())
        : !0;
    }
    outputFile() {
      return this.opts.to
        ? this.path(this.opts.to)
        : this.opts.from
        ? this.path(this.opts.from)
        : "to.css";
    }
    path(e) {
      if (
        this.mapOpts.absolute ||
        e.charCodeAt(0) === 60 ||
        /^\w+:\/\//.test(e)
      )
        return e;
      let t = this.memoizedPaths.get(e);
      if (t) return t;
      let u = this.opts.to ? tt(this.opts.to) : ".";
      typeof this.mapOpts.annotation == "string" &&
        (u = tt($r(u, this.mapOpts.annotation)));
      let i = Ur(u, e);
      return this.memoizedPaths.set(e, i), i;
    }
    previous() {
      if (!this.previousMaps)
        if (((this.previousMaps = []), this.root))
          this.root.walk((e) => {
            if (e.source && e.source.input.map) {
              let t = e.source.input.map;
              this.previousMaps.includes(t) || this.previousMaps.push(t);
            }
          });
        else {
          let e = new g0(this.originalCSS, this.opts);
          e.map && this.previousMaps.push(e.map);
        }
      return this.previousMaps;
    }
    setSourcesContent() {
      let e = {};
      if (this.root)
        this.root.walk((t) => {
          if (t.source) {
            let u = t.source.input.from;
            if (u && !e[u]) {
              e[u] = !0;
              let i = this.usesFileUrls
                ? this.toFileUrl(u)
                : this.toUrl(this.path(u));
              this.map.setSourceContent(i, t.source.input.css);
            }
          }
        });
      else if (this.css) {
        let t = this.opts.from
          ? this.toUrl(this.path(this.opts.from))
          : "<no source>";
        this.map.setSourceContent(t, this.css);
      }
    }
    sourcePath(e) {
      return this.mapOpts.from
        ? this.toUrl(this.mapOpts.from)
        : this.usesFileUrls
        ? this.toFileUrl(e.source.input.from)
        : this.toUrl(this.path(e.source.input.from));
    }
    toBase64(e) {
      return Buffer
        ? Buffer.from(e).toString("base64")
        : window.btoa(unescape(encodeURIComponent(e)));
    }
    toFileUrl(e) {
      let t = this.memoizedFileURLs.get(e);
      if (t) return t;
      if (Cu) {
        let u = Cu(e).toString();
        return this.memoizedFileURLs.set(e, u), u;
      } else
        throw new Error(
          "`map.absolute` option is not available in this PostCSS build"
        );
    }
    toUrl(e) {
      let t = this.memoizedURLs.get(e);
      if (t) return t;
      Hr === "\\" && (e = e.replace(/\\/g, "/"));
      let u = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
      return this.memoizedURLs.set(e, u), u;
    }
  };
var Vr = v0;
const Nt = "'".charCodeAt(0),
  Du = '"'.charCodeAt(0),
  Ge = "\\".charCodeAt(0),
  Lu = "/".charCodeAt(0),
  We = `
`.charCodeAt(0),
  Oe = " ".charCodeAt(0),
  Xe = "\f".charCodeAt(0),
  Qe = "	".charCodeAt(0),
  Je = "\r".charCodeAt(0),
  w0 = "[".charCodeAt(0),
  S0 = "]".charCodeAt(0),
  T0 = "(".charCodeAt(0),
  E0 = ")".charCodeAt(0),
  A0 = "{".charCodeAt(0),
  O0 = "}".charCodeAt(0),
  _0 = ";".charCodeAt(0),
  N0 = "*".charCodeAt(0),
  I0 = ":".charCodeAt(0),
  C0 = "@".charCodeAt(0),
  Ze = /[\t\n\f\r "#'()/;[\\\]{}]/g,
  Ye = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
  D0 = /.[\r\n"'(/\\]/,
  Pu = /[\da-f]/i;
var L0 = function (e, t = {}) {
  let u = e.css.valueOf(),
    i = t.ignoreErrors,
    n,
    o,
    l,
    s,
    f,
    d,
    p,
    a,
    c,
    y,
    S = u.length,
    m = 0,
    T = [],
    A = [];
  function I() {
    return m;
  }
  function O($) {
    throw e.error("Unclosed " + $, m);
  }
  function L() {
    return A.length === 0 && m >= S;
  }
  function H($) {
    if (A.length) return A.pop();
    if (m >= S) return;
    let z = $ ? $.ignoreUnclosed : !1;
    switch (((n = u.charCodeAt(m)), n)) {
      case We:
      case Oe:
      case Qe:
      case Je:
      case Xe: {
        s = m;
        do (s += 1), (n = u.charCodeAt(s));
        while (n === Oe || n === We || n === Qe || n === Je || n === Xe);
        (d = ["space", u.slice(m, s)]), (m = s - 1);
        break;
      }
      case w0:
      case S0:
      case A0:
      case O0:
      case I0:
      case _0:
      case E0: {
        let G = String.fromCharCode(n);
        d = [G, G, m];
        break;
      }
      case T0: {
        if (
          ((y = T.length ? T.pop()[1] : ""),
          (c = u.charCodeAt(m + 1)),
          y === "url" &&
            c !== Nt &&
            c !== Du &&
            c !== Oe &&
            c !== We &&
            c !== Qe &&
            c !== Xe &&
            c !== Je)
        ) {
          s = m;
          do {
            if (((p = !1), (s = u.indexOf(")", s + 1)), s === -1))
              if (i || z) {
                s = m;
                break;
              } else O("bracket");
            for (a = s; u.charCodeAt(a - 1) === Ge; ) (a -= 1), (p = !p);
          } while (p);
          (d = ["brackets", u.slice(m, s + 1), m, s]), (m = s);
        } else
          (s = u.indexOf(")", m + 1)),
            (o = u.slice(m, s + 1)),
            s === -1 || D0.test(o)
              ? (d = ["(", "(", m])
              : ((d = ["brackets", o, m, s]), (m = s));
        break;
      }
      case Nt:
      case Du: {
        (f = n === Nt ? "'" : '"'), (s = m);
        do {
          if (((p = !1), (s = u.indexOf(f, s + 1)), s === -1))
            if (i || z) {
              s = m + 1;
              break;
            } else O("string");
          for (a = s; u.charCodeAt(a - 1) === Ge; ) (a -= 1), (p = !p);
        } while (p);
        (d = ["string", u.slice(m, s + 1), m, s]), (m = s);
        break;
      }
      case C0: {
        (Ze.lastIndex = m + 1),
          Ze.test(u),
          Ze.lastIndex === 0 ? (s = u.length - 1) : (s = Ze.lastIndex - 2),
          (d = ["at-word", u.slice(m, s + 1), m, s]),
          (m = s);
        break;
      }
      case Ge: {
        for (s = m, l = !0; u.charCodeAt(s + 1) === Ge; ) (s += 1), (l = !l);
        if (
          ((n = u.charCodeAt(s + 1)),
          l &&
            n !== Lu &&
            n !== Oe &&
            n !== We &&
            n !== Qe &&
            n !== Je &&
            n !== Xe &&
            ((s += 1), Pu.test(u.charAt(s))))
        ) {
          for (; Pu.test(u.charAt(s + 1)); ) s += 1;
          u.charCodeAt(s + 1) === Oe && (s += 1);
        }
        (d = ["word", u.slice(m, s + 1), m, s]), (m = s);
        break;
      }
      default: {
        n === Lu && u.charCodeAt(m + 1) === N0
          ? ((s = u.indexOf("*/", m + 2) + 1),
            s === 0 && (i || z ? (s = u.length) : O("comment")),
            (d = ["comment", u.slice(m, s + 1), m, s]),
            (m = s))
          : ((Ye.lastIndex = m + 1),
            Ye.test(u),
            Ye.lastIndex === 0 ? (s = u.length - 1) : (s = Ye.lastIndex - 2),
            (d = ["word", u.slice(m, s + 1), m, s]),
            T.push(d),
            (m = s));
        break;
      }
    }
    return m++, d;
  }
  function Y($) {
    A.push($);
  }
  return { back: Y, endOfFile: L, nextToken: H, position: I };
};
let P0 = au,
  M0 = xt,
  R0 = vt,
  q0 = He,
  Mu = ou,
  k0 = L0;
const Ru = { empty: !0, space: !0 };
function j0(r) {
  for (let e = r.length - 1; e >= 0; e--) {
    let t = r[e],
      u = t[3] || t[2];
    if (u) return u;
  }
}
let B0 = class {
  constructor(e) {
    (this.input = e),
      (this.root = new q0()),
      (this.current = this.root),
      (this.spaces = ""),
      (this.semicolon = !1),
      this.createTokenizer(),
      (this.root.source = {
        input: e,
        start: { column: 1, line: 1, offset: 0 },
      });
  }
  atrule(e) {
    let t = new P0();
    (t.name = e[1].slice(1)),
      t.name === "" && this.unnamedAtrule(t, e),
      this.init(t, e[2]);
    let u,
      i,
      n,
      o = !1,
      l = !1,
      s = [],
      f = [];
    for (; !this.tokenizer.endOfFile(); ) {
      if (
        ((e = this.tokenizer.nextToken()),
        (u = e[0]),
        u === "(" || u === "["
          ? f.push(u === "(" ? ")" : "]")
          : u === "{" && f.length > 0
          ? f.push("}")
          : u === f[f.length - 1] && f.pop(),
        f.length === 0)
      )
        if (u === ";") {
          (t.source.end = this.getPosition(e[2])),
            t.source.end.offset++,
            (this.semicolon = !0);
          break;
        } else if (u === "{") {
          l = !0;
          break;
        } else if (u === "}") {
          if (s.length > 0) {
            for (n = s.length - 1, i = s[n]; i && i[0] === "space"; )
              i = s[--n];
            i &&
              ((t.source.end = this.getPosition(i[3] || i[2])),
              t.source.end.offset++);
          }
          this.end(e);
          break;
        } else s.push(e);
      else s.push(e);
      if (this.tokenizer.endOfFile()) {
        o = !0;
        break;
      }
    }
    (t.raws.between = this.spacesAndCommentsFromEnd(s)),
      s.length
        ? ((t.raws.afterName = this.spacesAndCommentsFromStart(s)),
          this.raw(t, "params", s),
          o &&
            ((e = s[s.length - 1]),
            (t.source.end = this.getPosition(e[3] || e[2])),
            t.source.end.offset++,
            (this.spaces = t.raws.between),
            (t.raws.between = "")))
        : ((t.raws.afterName = ""), (t.params = "")),
      l && ((t.nodes = []), (this.current = t));
  }
  checkMissedSemicolon(e) {
    let t = this.colon(e);
    if (t === !1) return;
    let u = 0,
      i;
    for (
      let n = t - 1;
      n >= 0 && ((i = e[n]), !(i[0] !== "space" && ((u += 1), u === 2)));
      n--
    );
    throw this.input.error(
      "Missed semicolon",
      i[0] === "word" ? i[3] + 1 : i[2]
    );
  }
  colon(e) {
    let t = 0,
      u,
      i,
      n;
    for (let [o, l] of e.entries()) {
      if (
        ((i = l),
        (n = i[0]),
        n === "(" && (t += 1),
        n === ")" && (t -= 1),
        t === 0 && n === ":")
      )
        if (!u) this.doubleColon(i);
        else {
          if (u[0] === "word" && u[1] === "progid") continue;
          return o;
        }
      u = i;
    }
    return !1;
  }
  comment(e) {
    let t = new M0();
    this.init(t, e[2]),
      (t.source.end = this.getPosition(e[3] || e[2])),
      t.source.end.offset++;
    let u = e[1].slice(2, -2);
    if (/^\s*$/.test(u)) (t.text = ""), (t.raws.left = u), (t.raws.right = "");
    else {
      let i = u.match(/^(\s*)([^]*\S)(\s*)$/);
      (t.text = i[2]), (t.raws.left = i[1]), (t.raws.right = i[3]);
    }
  }
  createTokenizer() {
    this.tokenizer = k0(this.input);
  }
  decl(e, t) {
    let u = new R0();
    this.init(u, e[0][2]);
    let i = e[e.length - 1];
    for (
      i[0] === ";" && ((this.semicolon = !0), e.pop()),
        u.source.end = this.getPosition(i[3] || i[2] || j0(e)),
        u.source.end.offset++;
      e[0][0] !== "word";

    )
      e.length === 1 && this.unknownWord(e), (u.raws.before += e.shift()[1]);
    for (u.source.start = this.getPosition(e[0][2]), u.prop = ""; e.length; ) {
      let f = e[0][0];
      if (f === ":" || f === "space" || f === "comment") break;
      u.prop += e.shift()[1];
    }
    u.raws.between = "";
    let n;
    for (; e.length; )
      if (((n = e.shift()), n[0] === ":")) {
        u.raws.between += n[1];
        break;
      } else
        n[0] === "word" && /\w/.test(n[1]) && this.unknownWord([n]),
          (u.raws.between += n[1]);
    (u.prop[0] === "_" || u.prop[0] === "*") &&
      ((u.raws.before += u.prop[0]), (u.prop = u.prop.slice(1)));
    let o = [],
      l;
    for (; e.length && ((l = e[0][0]), !(l !== "space" && l !== "comment")); )
      o.push(e.shift());
    this.precheckMissedSemicolon(e);
    for (let f = e.length - 1; f >= 0; f--) {
      if (((n = e[f]), n[1].toLowerCase() === "!important")) {
        u.important = !0;
        let d = this.stringFrom(e, f);
        (d = this.spacesFromEnd(e) + d),
          d !== " !important" && (u.raws.important = d);
        break;
      } else if (n[1].toLowerCase() === "important") {
        let d = e.slice(0),
          p = "";
        for (let a = f; a > 0; a--) {
          let c = d[a][0];
          if (p.trim().startsWith("!") && c !== "space") break;
          p = d.pop()[1] + p;
        }
        p.trim().startsWith("!") &&
          ((u.important = !0), (u.raws.important = p), (e = d));
      }
      if (n[0] !== "space" && n[0] !== "comment") break;
    }
    e.some((f) => f[0] !== "space" && f[0] !== "comment") &&
      ((u.raws.between += o.map((f) => f[1]).join("")), (o = [])),
      this.raw(u, "value", o.concat(e), t),
      u.value.includes(":") && !t && this.checkMissedSemicolon(e);
  }
  doubleColon(e) {
    throw this.input.error(
      "Double colon",
      { offset: e[2] },
      { offset: e[2] + e[1].length }
    );
  }
  emptyRule(e) {
    let t = new Mu();
    this.init(t, e[2]),
      (t.selector = ""),
      (t.raws.between = ""),
      (this.current = t);
  }
  end(e) {
    this.current.nodes &&
      this.current.nodes.length &&
      (this.current.raws.semicolon = this.semicolon),
      (this.semicolon = !1),
      (this.current.raws.after = (this.current.raws.after || "") + this.spaces),
      (this.spaces = ""),
      this.current.parent
        ? ((this.current.source.end = this.getPosition(e[2])),
          this.current.source.end.offset++,
          (this.current = this.current.parent))
        : this.unexpectedClose(e);
  }
  endFile() {
    this.current.parent && this.unclosedBlock(),
      this.current.nodes &&
        this.current.nodes.length &&
        (this.current.raws.semicolon = this.semicolon),
      (this.current.raws.after = (this.current.raws.after || "") + this.spaces),
      (this.root.source.end = this.getPosition(this.tokenizer.position()));
  }
  freeSemicolon(e) {
    if (((this.spaces += e[1]), this.current.nodes)) {
      let t = this.current.nodes[this.current.nodes.length - 1];
      t &&
        t.type === "rule" &&
        !t.raws.ownSemicolon &&
        ((t.raws.ownSemicolon = this.spaces), (this.spaces = ""));
    }
  }
  getPosition(e) {
    let t = this.input.fromOffset(e);
    return { column: t.col, line: t.line, offset: e };
  }
  init(e, t) {
    this.current.push(e),
      (e.source = { input: this.input, start: this.getPosition(t) }),
      (e.raws.before = this.spaces),
      (this.spaces = ""),
      e.type !== "comment" && (this.semicolon = !1);
  }
  other(e) {
    let t = !1,
      u = null,
      i = !1,
      n = null,
      o = [],
      l = e[1].startsWith("--"),
      s = [],
      f = e;
    for (; f; ) {
      if (((u = f[0]), s.push(f), u === "(" || u === "["))
        n || (n = f), o.push(u === "(" ? ")" : "]");
      else if (l && i && u === "{") n || (n = f), o.push("}");
      else if (o.length === 0)
        if (u === ";")
          if (i) {
            this.decl(s, l);
            return;
          } else break;
        else if (u === "{") {
          this.rule(s);
          return;
        } else if (u === "}") {
          this.tokenizer.back(s.pop()), (t = !0);
          break;
        } else u === ":" && (i = !0);
      else u === o[o.length - 1] && (o.pop(), o.length === 0 && (n = null));
      f = this.tokenizer.nextToken();
    }
    if (
      (this.tokenizer.endOfFile() && (t = !0),
      o.length > 0 && this.unclosedBracket(n),
      t && i)
    ) {
      if (!l)
        for (
          ;
          s.length &&
          ((f = s[s.length - 1][0]), !(f !== "space" && f !== "comment"));

        )
          this.tokenizer.back(s.pop());
      this.decl(s, l);
    } else this.unknownWord(s);
  }
  parse() {
    let e;
    for (; !this.tokenizer.endOfFile(); )
      switch (((e = this.tokenizer.nextToken()), e[0])) {
        case "space":
          this.spaces += e[1];
          break;
        case ";":
          this.freeSemicolon(e);
          break;
        case "}":
          this.end(e);
          break;
        case "comment":
          this.comment(e);
          break;
        case "at-word":
          this.atrule(e);
          break;
        case "{":
          this.emptyRule(e);
          break;
        default:
          this.other(e);
          break;
      }
    this.endFile();
  }
  precheckMissedSemicolon() {}
  raw(e, t, u, i) {
    let n,
      o,
      l = u.length,
      s = "",
      f = !0,
      d,
      p;
    for (let a = 0; a < l; a += 1)
      (n = u[a]),
        (o = n[0]),
        o === "space" && a === l - 1 && !i
          ? (f = !1)
          : o === "comment"
          ? ((p = u[a - 1] ? u[a - 1][0] : "empty"),
            (d = u[a + 1] ? u[a + 1][0] : "empty"),
            !Ru[p] && !Ru[d]
              ? s.slice(-1) === ","
                ? (f = !1)
                : (s += n[1])
              : (f = !1))
          : (s += n[1]);
    if (!f) {
      let a = u.reduce((c, y) => c + y[1], "");
      e.raws[t] = { raw: a, value: s };
    }
    e[t] = s;
  }
  rule(e) {
    e.pop();
    let t = new Mu();
    this.init(t, e[0][2]),
      (t.raws.between = this.spacesAndCommentsFromEnd(e)),
      this.raw(t, "selector", e),
      (this.current = t);
  }
  spacesAndCommentsFromEnd(e) {
    let t,
      u = "";
    for (
      ;
      e.length &&
      ((t = e[e.length - 1][0]), !(t !== "space" && t !== "comment"));

    )
      u = e.pop()[1] + u;
    return u;
  }
  spacesAndCommentsFromStart(e) {
    let t,
      u = "";
    for (; e.length && ((t = e[0][0]), !(t !== "space" && t !== "comment")); )
      u += e.shift()[1];
    return u;
  }
  spacesFromEnd(e) {
    let t,
      u = "";
    for (; e.length && ((t = e[e.length - 1][0]), t === "space"); )
      u = e.pop()[1] + u;
    return u;
  }
  stringFrom(e, t) {
    let u = "";
    for (let i = t; i < e.length; i++) u += e[i][1];
    return e.splice(t, e.length - t), u;
  }
  unclosedBlock() {
    let e = this.current.source.start;
    throw this.input.error("Unclosed block", e.line, e.column);
  }
  unclosedBracket(e) {
    throw this.input.error(
      "Unclosed bracket",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unexpectedClose(e) {
    throw this.input.error(
      "Unexpected }",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unknownWord(e) {
    throw this.input.error(
      "Unknown word",
      { offset: e[0][2] },
      { offset: e[0][2] + e[0][1].length }
    );
  }
  unnamedAtrule(e, t) {
    throw this.input.error(
      "At-rule without name",
      { offset: t[2] },
      { offset: t[2] + t[1].length }
    );
  }
};
var U0 = B0;
let $0 = he,
  H0 = wt,
  F0 = U0;
function lt(r, e) {
  let t = new H0(r, e),
    u = new F0(t);
  try {
    u.parse();
  } catch (i) {
    throw i;
  }
  return u.root;
}
var cu = lt;
lt.default = lt;
$0.registerParse(lt);
let Ft = class {
  constructor(e, t = {}) {
    if (((this.type = "warning"), (this.text = e), t.node && t.node.source)) {
      let u = t.node.rangeBy(t);
      (this.line = u.start.line),
        (this.column = u.start.column),
        (this.endLine = u.end.line),
        (this.endColumn = u.end.column);
    }
    for (let u in t) this[u] = t[u];
  }
  toString() {
    return this.node
      ? this.node.error(this.text, {
          index: this.index,
          plugin: this.plugin,
          word: this.word,
        }).message
      : this.plugin
      ? this.plugin + ": " + this.text
      : this.text;
  }
};
var zr = Ft;
Ft.default = Ft;
let V0 = zr,
  Vt = class {
    constructor(e, t, u) {
      (this.processor = e),
        (this.messages = []),
        (this.root = t),
        (this.opts = u),
        (this.css = void 0),
        (this.map = void 0);
    }
    toString() {
      return this.css;
    }
    warn(e, t = {}) {
      t.plugin ||
        (this.lastPlugin &&
          this.lastPlugin.postcssPlugin &&
          (t.plugin = this.lastPlugin.postcssPlugin));
      let u = new V0(e, t);
      return this.messages.push(u), u;
    }
    warnings() {
      return this.messages.filter((e) => e.type === "warning");
    }
    get content() {
      return this.css;
    }
  };
var lu = Vt;
Vt.default = Vt;
let z0 = he,
  G0 = su,
  W0 = Vr,
  X0 = cu,
  qu = lu,
  Q0 = He,
  J0 = gt,
  { isClean: te, my: Z0 } = $e;
const Y0 = {
    atrule: "AtRule",
    comment: "Comment",
    decl: "Declaration",
    document: "Document",
    root: "Root",
    rule: "Rule",
  },
  K0 = {
    AtRule: !0,
    AtRuleExit: !0,
    Comment: !0,
    CommentExit: !0,
    Declaration: !0,
    DeclarationExit: !0,
    Document: !0,
    DocumentExit: !0,
    Once: !0,
    OnceExit: !0,
    postcssPlugin: !0,
    prepare: !0,
    Root: !0,
    RootExit: !0,
    Rule: !0,
    RuleExit: !0,
  },
  ea = { Once: !0, postcssPlugin: !0, prepare: !0 },
  ve = 0;
function _e(r) {
  return typeof r == "object" && typeof r.then == "function";
}
function Gr(r) {
  let e = !1,
    t = Y0[r.type];
  return (
    r.type === "decl"
      ? (e = r.prop.toLowerCase())
      : r.type === "atrule" && (e = r.name.toLowerCase()),
    e && r.append
      ? [t, t + "-" + e, ve, t + "Exit", t + "Exit-" + e]
      : e
      ? [t, t + "-" + e, t + "Exit", t + "Exit-" + e]
      : r.append
      ? [t, ve, t + "Exit"]
      : [t, t + "Exit"]
  );
}
function ku(r) {
  let e;
  return (
    r.type === "document"
      ? (e = ["Document", ve, "DocumentExit"])
      : r.type === "root"
      ? (e = ["Root", ve, "RootExit"])
      : (e = Gr(r)),
    {
      eventIndex: 0,
      events: e,
      iterator: 0,
      node: r,
      visitorIndex: 0,
      visitors: [],
    }
  );
}
function zt(r) {
  return (r[te] = !1), r.nodes && r.nodes.forEach((e) => zt(e)), r;
}
let Gt = {},
  we = class Wr {
    constructor(e, t, u) {
      (this.stringified = !1), (this.processed = !1);
      let i;
      if (
        typeof t == "object" &&
        t !== null &&
        (t.type === "root" || t.type === "document")
      )
        i = zt(t);
      else if (t instanceof Wr || t instanceof qu)
        (i = zt(t.root)),
          t.map &&
            (typeof u.map > "u" && (u.map = {}),
            u.map.inline || (u.map.inline = !1),
            (u.map.prev = t.map));
      else {
        let n = X0;
        u.syntax && (n = u.syntax.parse),
          u.parser && (n = u.parser),
          n.parse && (n = n.parse);
        try {
          i = n(t, u);
        } catch (o) {
          (this.processed = !0), (this.error = o);
        }
        i && !i[Z0] && z0.rebuild(i);
      }
      (this.result = new qu(e, i, u)),
        (this.helpers = { ...Gt, postcss: Gt, result: this.result }),
        (this.plugins = this.processor.plugins.map((n) =>
          typeof n == "object" && n.prepare
            ? { ...n, ...n.prepare(this.result) }
            : n
        ));
    }
    async() {
      return this.error
        ? Promise.reject(this.error)
        : this.processed
        ? Promise.resolve(this.result)
        : (this.processing || (this.processing = this.runAsync()),
          this.processing);
    }
    catch(e) {
      return this.async().catch(e);
    }
    finally(e) {
      return this.async().then(e, e);
    }
    getAsyncError() {
      throw new Error("Use process(css).then(cb) to work with async plugins");
    }
    handleError(e, t) {
      let u = this.result.lastPlugin;
      try {
        t && t.addToError(e),
          (this.error = e),
          e.name === "CssSyntaxError" && !e.plugin
            ? ((e.plugin = u.postcssPlugin), e.setMessage())
            : u.postcssVersion;
      } catch (i) {
        console && console.error && console.error(i);
      }
      return e;
    }
    prepareVisitors() {
      this.listeners = {};
      let e = (t, u, i) => {
        this.listeners[u] || (this.listeners[u] = []),
          this.listeners[u].push([t, i]);
      };
      for (let t of this.plugins)
        if (typeof t == "object")
          for (let u in t) {
            if (!K0[u] && /^[A-Z]/.test(u))
              throw new Error(
                `Unknown event ${u} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
              );
            if (!ea[u])
              if (typeof t[u] == "object")
                for (let i in t[u])
                  i === "*"
                    ? e(t, u, t[u][i])
                    : e(t, u + "-" + i.toLowerCase(), t[u][i]);
              else typeof t[u] == "function" && e(t, u, t[u]);
          }
      this.hasListener = Object.keys(this.listeners).length > 0;
    }
    async runAsync() {
      this.plugin = 0;
      for (let e = 0; e < this.plugins.length; e++) {
        let t = this.plugins[e],
          u = this.runOnRoot(t);
        if (_e(u))
          try {
            await u;
          } catch (i) {
            throw this.handleError(i);
          }
      }
      if ((this.prepareVisitors(), this.hasListener)) {
        let e = this.result.root;
        for (; !e[te]; ) {
          e[te] = !0;
          let t = [ku(e)];
          for (; t.length > 0; ) {
            let u = this.visitTick(t);
            if (_e(u))
              try {
                await u;
              } catch (i) {
                let n = t[t.length - 1].node;
                throw this.handleError(i, n);
              }
          }
        }
        if (this.listeners.OnceExit)
          for (let [t, u] of this.listeners.OnceExit) {
            this.result.lastPlugin = t;
            try {
              if (e.type === "document") {
                let i = e.nodes.map((n) => u(n, this.helpers));
                await Promise.all(i);
              } else await u(e, this.helpers);
            } catch (i) {
              throw this.handleError(i);
            }
          }
      }
      return (this.processed = !0), this.stringify();
    }
    runOnRoot(e) {
      this.result.lastPlugin = e;
      try {
        if (typeof e == "object" && e.Once) {
          if (this.result.root.type === "document") {
            let t = this.result.root.nodes.map((u) => e.Once(u, this.helpers));
            return _e(t[0]) ? Promise.all(t) : t;
          }
          return e.Once(this.result.root, this.helpers);
        } else if (typeof e == "function")
          return e(this.result.root, this.result);
      } catch (t) {
        throw this.handleError(t);
      }
    }
    stringify() {
      if (this.error) throw this.error;
      if (this.stringified) return this.result;
      (this.stringified = !0), this.sync();
      let e = this.result.opts,
        t = J0;
      e.syntax && (t = e.syntax.stringify),
        e.stringifier && (t = e.stringifier),
        t.stringify && (t = t.stringify);
      let i = new W0(t, this.result.root, this.result.opts).generate();
      return (this.result.css = i[0]), (this.result.map = i[1]), this.result;
    }
    sync() {
      if (this.error) throw this.error;
      if (this.processed) return this.result;
      if (((this.processed = !0), this.processing)) throw this.getAsyncError();
      for (let e of this.plugins) {
        let t = this.runOnRoot(e);
        if (_e(t)) throw this.getAsyncError();
      }
      if ((this.prepareVisitors(), this.hasListener)) {
        let e = this.result.root;
        for (; !e[te]; ) (e[te] = !0), this.walkSync(e);
        if (this.listeners.OnceExit)
          if (e.type === "document")
            for (let t of e.nodes) this.visitSync(this.listeners.OnceExit, t);
          else this.visitSync(this.listeners.OnceExit, e);
      }
      return this.result;
    }
    then(e, t) {
      return this.async().then(e, t);
    }
    toString() {
      return this.css;
    }
    visitSync(e, t) {
      for (let [u, i] of e) {
        this.result.lastPlugin = u;
        let n;
        try {
          n = i(t, this.helpers);
        } catch (o) {
          throw this.handleError(o, t.proxyOf);
        }
        if (t.type !== "root" && t.type !== "document" && !t.parent) return !0;
        if (_e(n)) throw this.getAsyncError();
      }
    }
    visitTick(e) {
      let t = e[e.length - 1],
        { node: u, visitors: i } = t;
      if (u.type !== "root" && u.type !== "document" && !u.parent) {
        e.pop();
        return;
      }
      if (i.length > 0 && t.visitorIndex < i.length) {
        let [o, l] = i[t.visitorIndex];
        (t.visitorIndex += 1),
          t.visitorIndex === i.length &&
            ((t.visitors = []), (t.visitorIndex = 0)),
          (this.result.lastPlugin = o);
        try {
          return l(u.toProxy(), this.helpers);
        } catch (s) {
          throw this.handleError(s, u);
        }
      }
      if (t.iterator !== 0) {
        let o = t.iterator,
          l;
        for (; (l = u.nodes[u.indexes[o]]); )
          if (((u.indexes[o] += 1), !l[te])) {
            (l[te] = !0), e.push(ku(l));
            return;
          }
        (t.iterator = 0), delete u.indexes[o];
      }
      let n = t.events;
      for (; t.eventIndex < n.length; ) {
        let o = n[t.eventIndex];
        if (((t.eventIndex += 1), o === ve)) {
          u.nodes &&
            u.nodes.length &&
            ((u[te] = !0), (t.iterator = u.getIterator()));
          return;
        } else if (this.listeners[o]) {
          t.visitors = this.listeners[o];
          return;
        }
      }
      e.pop();
    }
    walkSync(e) {
      e[te] = !0;
      let t = Gr(e);
      for (let u of t)
        if (u === ve)
          e.nodes &&
            e.each((i) => {
              i[te] || this.walkSync(i);
            });
        else {
          let i = this.listeners[u];
          if (i && this.visitSync(i, e.toProxy())) return;
        }
    }
    warnings() {
      return this.sync().warnings();
    }
    get content() {
      return this.stringify().content;
    }
    get css() {
      return this.stringify().css;
    }
    get map() {
      return this.stringify().map;
    }
    get messages() {
      return this.sync().messages;
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      return this.sync().root;
    }
    get [Symbol.toStringTag]() {
      return "LazyResult";
    }
  };
we.registerPostcss = (r) => {
  Gt = r;
};
var Xr = we;
we.default = we;
Q0.registerLazyResult(we);
G0.registerLazyResult(we);
let ta = Vr,
  ua = cu;
const ra = lu;
let ia = gt,
  Wt = class {
    constructor(e, t, u) {
      (t = t.toString()),
        (this.stringified = !1),
        (this._processor = e),
        (this._css = t),
        (this._opts = u),
        (this._map = void 0);
      let i,
        n = ia;
      (this.result = new ra(this._processor, i, this._opts)),
        (this.result.css = t);
      let o = this;
      Object.defineProperty(this.result, "root", {
        get() {
          return o.root;
        },
      });
      let l = new ta(n, i, this._opts, t);
      if (l.isMap()) {
        let [s, f] = l.generate();
        s && (this.result.css = s), f && (this.result.map = f);
      } else l.clearAnnotation(), (this.result.css = l.css);
    }
    async() {
      return this.error
        ? Promise.reject(this.error)
        : Promise.resolve(this.result);
    }
    catch(e) {
      return this.async().catch(e);
    }
    finally(e) {
      return this.async().then(e, e);
    }
    sync() {
      if (this.error) throw this.error;
      return this.result;
    }
    then(e, t) {
      return this.async().then(e, t);
    }
    toString() {
      return this._css;
    }
    warnings() {
      return [];
    }
    get content() {
      return this.result.css;
    }
    get css() {
      return this.result.css;
    }
    get map() {
      return this.result.map;
    }
    get messages() {
      return [];
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      if (this._root) return this._root;
      let e,
        t = ua;
      try {
        e = t(this._css, this._opts);
      } catch (u) {
        this.error = u;
      }
      if (this.error) throw this.error;
      return (this._root = e), e;
    }
    get [Symbol.toStringTag]() {
      return "NoWorkResult";
    }
  };
var na = Wt;
Wt.default = Wt;
let aa = su,
  sa = Xr,
  oa = na,
  ca = He,
  qe = class {
    constructor(e = []) {
      (this.version = "8.4.49"), (this.plugins = this.normalize(e));
    }
    normalize(e) {
      let t = [];
      for (let u of e)
        if (
          (u.postcss === !0 ? (u = u()) : u.postcss && (u = u.postcss),
          typeof u == "object" && Array.isArray(u.plugins))
        )
          t = t.concat(u.plugins);
        else if (typeof u == "object" && u.postcssPlugin) t.push(u);
        else if (typeof u == "function") t.push(u);
        else if (!(typeof u == "object" && (u.parse || u.stringify)))
          throw new Error(u + " is not a PostCSS plugin");
      return t;
    }
    process(e, t = {}) {
      return !this.plugins.length && !t.parser && !t.stringifier && !t.syntax
        ? new oa(this, e, t)
        : new sa(this, e, t);
    }
    use(e) {
      return (this.plugins = this.plugins.concat(this.normalize([e]))), this;
    }
  };
var la = qe;
qe.default = qe;
ca.registerProcessor(qe);
aa.registerProcessor(qe);
let Qr = au,
  Jr = xt,
  fa = he,
  da = ru,
  Zr = vt,
  Yr = su,
  ha = m0,
  pa = wt,
  ba = Xr,
  ma = jr,
  ga = yt,
  ya = cu,
  fu = la,
  xa = lu,
  Kr = He,
  ei = ou,
  va = gt,
  wa = zr;
function R(...r) {
  return r.length === 1 && Array.isArray(r[0]) && (r = r[0]), new fu(r);
}
R.plugin = function (e, t) {
  let u = !1;
  function i(...o) {
    console &&
      console.warn &&
      !u &&
      ((u = !0),
      console.warn(
        e +
          `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
      ),
      {}.LANG &&
        {}.LANG.startsWith("cn") &&
        console.warn(
          e +
            `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
        ));
    let l = t(...o);
    return (l.postcssPlugin = e), (l.postcssVersion = new fu().version), l;
  }
  let n;
  return (
    Object.defineProperty(i, "postcss", {
      get() {
        return n || (n = i()), n;
      },
    }),
    (i.process = function (o, l, s) {
      return R([i(s)]).process(o, l);
    }),
    i
  );
};
R.stringify = va;
R.parse = ya;
R.fromJSON = ha;
R.list = ma;
R.comment = (r) => new Jr(r);
R.atRule = (r) => new Qr(r);
R.decl = (r) => new Zr(r);
R.rule = (r) => new ei(r);
R.root = (r) => new Kr(r);
R.document = (r) => new Yr(r);
R.CssSyntaxError = da;
R.Declaration = Zr;
R.Container = fa;
R.Processor = fu;
R.Document = Yr;
R.Comment = Jr;
R.Warning = wa;
R.AtRule = Qr;
R.Result = xa;
R.Input = pa;
R.Rule = ei;
R.Root = Kr;
R.Node = ga;
ba.registerPostcss(R);
var Sa = R;
R.default = R;
const Ta = Vu,
  ju = xn,
  { isPlainObject: Ea } = tu,
  Bu = Mn,
  Aa = Rn,
  { parse: Oa } = Sa,
  _a = [
    "img",
    "audio",
    "video",
    "picture",
    "svg",
    "object",
    "map",
    "iframe",
    "embed",
  ],
  Na = ["script", "style"];
function Ne(r, e) {
  r &&
    Object.keys(r).forEach(function (t) {
      e(r[t], t);
    });
}
function ne(r, e) {
  return {}.hasOwnProperty.call(r, e);
}
function Uu(r, e) {
  const t = [];
  return (
    Ne(r, function (u) {
      e(u) && t.push(u);
    }),
    t
  );
}
function Ia(r) {
  for (const e in r) if (ne(r, e)) return !1;
  return !0;
}
function Ca(r) {
  return r
    .map(function (e) {
      if (!e.url) throw new Error("URL missing");
      return (
        e.url +
        (e.w ? ` ${e.w}w` : "") +
        (e.h ? ` ${e.h}h` : "") +
        (e.d ? ` ${e.d}x` : "")
      );
    })
    .join(", ");
}
var Da = ke;
const La = /^[^\0\t\n\f\r /<=>]+$/;
function ke(r, e, t) {
  if (r == null) return "";
  typeof r == "number" && (r = r.toString());
  let u = "",
    i = "";
  function n(h, x) {
    const g = this;
    (this.tag = h),
      (this.attribs = x || {}),
      (this.tagPosition = u.length),
      (this.text = ""),
      (this.mediaChildren = []),
      (this.updateParentNodeText = function () {
        if (m.length) {
          const E = m[m.length - 1];
          E.text += g.text;
        }
      }),
      (this.updateParentNodeMediaChildren = function () {
        m.length &&
          _a.includes(this.tag) &&
          m[m.length - 1].mediaChildren.push(this.tag);
      });
  }
  (e = Object.assign({}, ke.defaults, e)),
    (e.parser = Object.assign({}, Pa, e.parser));
  const o = function (h) {
    return e.allowedTags === !1 || (e.allowedTags || []).indexOf(h) > -1;
  };
  Na.forEach(function (h) {
    o(h) &&
      !e.allowVulnerableTags &&
      console.warn(`

⚠️ Your \`allowedTags\` option includes, \`${h}\`, which is inherently
vulnerable to XSS attacks. Please remove it from \`allowedTags\`.
Or, to disable this warning, add the \`allowVulnerableTags\` option
and ensure you are accounting for this risk.

`);
  });
  const l = e.nonTextTags || ["script", "style", "textarea", "option"];
  let s, f;
  e.allowedAttributes &&
    ((s = {}),
    (f = {}),
    Ne(e.allowedAttributes, function (h, x) {
      s[x] = [];
      const g = [];
      h.forEach(function (E) {
        typeof E == "string" && E.indexOf("*") >= 0
          ? g.push(ju(E).replace(/\\\*/g, ".*"))
          : s[x].push(E);
      }),
        g.length && (f[x] = new RegExp("^(" + g.join("|") + ")$"));
    }));
  const d = {},
    p = {},
    a = {};
  Ne(e.allowedClasses, function (h, x) {
    if (
      (s && (ne(s, x) || (s[x] = []), s[x].push("class")),
      (d[x] = h),
      Array.isArray(h))
    ) {
      const g = [];
      (d[x] = []),
        (a[x] = []),
        h.forEach(function (E) {
          typeof E == "string" && E.indexOf("*") >= 0
            ? g.push(ju(E).replace(/\\\*/g, ".*"))
            : E instanceof RegExp
            ? a[x].push(E)
            : d[x].push(E);
        }),
        g.length && (p[x] = new RegExp("^(" + g.join("|") + ")$"));
    }
  });
  const c = {};
  let y;
  Ne(e.transformTags, function (h, x) {
    let g;
    typeof h == "function"
      ? (g = h)
      : typeof h == "string" && (g = ke.simpleTransform(h)),
      x === "*" ? (y = g) : (c[x] = g);
  });
  let S,
    m,
    T,
    A,
    I,
    O,
    L = !1;
  Y();
  const H = new Ta.Parser(
    {
      onopentag: function (h, x) {
        if ((e.enforceHtmlBoundary && h === "html" && Y(), I)) {
          O++;
          return;
        }
        const g = new n(h, x);
        m.push(g);
        let E = !1;
        const U = !!g.text;
        let B;
        if (
          (ne(c, h) &&
            ((B = c[h](h, x)),
            (g.attribs = x = B.attribs),
            B.text !== void 0 && (g.innerText = B.text),
            h !== B.tagName && ((g.name = h = B.tagName), (A[S] = B.tagName))),
          y &&
            ((B = y(h, x)),
            (g.attribs = x = B.attribs),
            h !== B.tagName && ((g.name = h = B.tagName), (A[S] = B.tagName))),
          (!o(h) ||
            (e.disallowedTagsMode === "recursiveEscape" && !Ia(T)) ||
            (e.nestingLimit != null && S >= e.nestingLimit)) &&
            ((E = !0),
            (T[S] = !0),
            (e.disallowedTagsMode === "discard" ||
              e.disallowedTagsMode === "completelyDiscard") &&
              l.indexOf(h) !== -1 &&
              ((I = !0), (O = 1)),
            (T[S] = !0)),
          S++,
          E)
        ) {
          if (
            e.disallowedTagsMode === "discard" ||
            e.disallowedTagsMode === "completelyDiscard"
          )
            return;
          (i = u), (u = "");
        }
        (u += "<" + h),
          h === "script" &&
            (e.allowedScriptHostnames || e.allowedScriptDomains) &&
            (g.innerText = ""),
          (!s || ne(s, h) || s["*"]) &&
            Ne(x, function (j, q) {
              if (!La.test(q)) {
                delete g.attribs[q];
                return;
              }
              if (
                j === "" &&
                !e.allowedEmptyAttributes.includes(q) &&
                (e.nonBooleanAttributes.includes(q) ||
                  e.nonBooleanAttributes.includes("*"))
              ) {
                delete g.attribs[q];
                return;
              }
              let St = !1;
              if (
                !s ||
                (ne(s, h) && s[h].indexOf(q) !== -1) ||
                (s["*"] && s["*"].indexOf(q) !== -1) ||
                (ne(f, h) && f[h].test(q)) ||
                (f["*"] && f["*"].test(q))
              )
                St = !0;
              else if (s && s[h]) {
                for (const P of s[h])
                  if (Ea(P) && P.name && P.name === q) {
                    St = !0;
                    let M = "";
                    if (P.multiple === !0) {
                      const le = j.split(" ");
                      for (const re of le)
                        P.values.indexOf(re) !== -1 &&
                          (M === "" ? (M = re) : (M += " " + re));
                    } else P.values.indexOf(j) >= 0 && (M = j);
                    j = M;
                  }
              }
              if (St) {
                if (
                  e.allowedSchemesAppliedToAttributes.indexOf(q) !== -1 &&
                  z(h, j)
                ) {
                  delete g.attribs[q];
                  return;
                }
                if (h === "script" && q === "src") {
                  let P = !0;
                  try {
                    const M = G(j);
                    if (e.allowedScriptHostnames || e.allowedScriptDomains) {
                      const le = (e.allowedScriptHostnames || []).find(
                          function (K) {
                            return K === M.url.hostname;
                          }
                        ),
                        re = (e.allowedScriptDomains || []).find(function (K) {
                          return (
                            M.url.hostname === K ||
                            M.url.hostname.endsWith(`.${K}`)
                          );
                        });
                      P = le || re;
                    }
                  } catch {
                    P = !1;
                  }
                  if (!P) {
                    delete g.attribs[q];
                    return;
                  }
                }
                if (h === "iframe" && q === "src") {
                  let P = !0;
                  try {
                    const M = G(j);
                    if (M.isRelativeUrl)
                      P = ne(e, "allowIframeRelativeUrls")
                        ? e.allowIframeRelativeUrls
                        : !e.allowedIframeHostnames && !e.allowedIframeDomains;
                    else if (
                      e.allowedIframeHostnames ||
                      e.allowedIframeDomains
                    ) {
                      const le = (e.allowedIframeHostnames || []).find(
                          function (K) {
                            return K === M.url.hostname;
                          }
                        ),
                        re = (e.allowedIframeDomains || []).find(function (K) {
                          return (
                            M.url.hostname === K ||
                            M.url.hostname.endsWith(`.${K}`)
                          );
                        });
                      P = le || re;
                    }
                  } catch {
                    P = !1;
                  }
                  if (!P) {
                    delete g.attribs[q];
                    return;
                  }
                }
                if (q === "srcset")
                  try {
                    let P = Aa(j);
                    if (
                      (P.forEach(function (M) {
                        z("srcset", M.url) && (M.evil = !0);
                      }),
                      (P = Uu(P, function (M) {
                        return !M.evil;
                      })),
                      P.length)
                    )
                      (j = Ca(
                        Uu(P, function (M) {
                          return !M.evil;
                        })
                      )),
                        (g.attribs[q] = j);
                    else {
                      delete g.attribs[q];
                      return;
                    }
                  } catch {
                    delete g.attribs[q];
                    return;
                  }
                if (q === "class") {
                  const P = d[h],
                    M = d["*"],
                    le = p[h],
                    re = a[h],
                    K = a["*"],
                    ti = p["*"],
                    du = [le, ti].concat(re, K).filter(function (ui) {
                      return ui;
                    });
                  if (
                    (P && M ? (j = _(j, Bu(P, M), du)) : (j = _(j, P || M, du)),
                    !j.length)
                  ) {
                    delete g.attribs[q];
                    return;
                  }
                }
                if (q === "style") {
                  if (e.parseStyleAttributes)
                    try {
                      const P = Oa(h + " {" + j + "}", { map: !1 }),
                        M = b(P, e.allowedStyles);
                      if (((j = v(M)), j.length === 0)) {
                        delete g.attribs[q];
                        return;
                      }
                    } catch {
                      typeof window < "u" &&
                        console.warn(
                          'Failed to parse "' +
                            h +
                            " {" +
                            j +
                            `}", If you're running this in a browser, we recommend to disable style parsing: options.parseStyleAttributes: false, since this only works in a node environment due to a postcss dependency, More info: https://github.com/apostrophecms/sanitize-html/issues/547`
                        ),
                        delete g.attribs[q];
                      return;
                    }
                  else if (e.allowedStyles)
                    throw new Error(
                      "allowedStyles option cannot be used together with parseStyleAttributes: false."
                    );
                }
                (u += " " + q),
                  j && j.length
                    ? (u += '="' + $(j, !0) + '"')
                    : e.allowedEmptyAttributes.includes(q) && (u += '=""');
              } else delete g.attribs[q];
            }),
          e.selfClosing.indexOf(h) !== -1
            ? (u += " />")
            : ((u += ">"),
              g.innerText &&
                !U &&
                !e.textFilter &&
                ((u += $(g.innerText)), (L = !0))),
          E && ((u = i + $(u)), (i = ""));
      },
      ontext: function (h) {
        if (I) return;
        const x = m[m.length - 1];
        let g;
        if (
          (x && ((g = x.tag), (h = x.innerText !== void 0 ? x.innerText : h)),
          e.disallowedTagsMode === "completelyDiscard" && !o(g))
        )
          h = "";
        else if (
          (e.disallowedTagsMode === "discard" ||
            e.disallowedTagsMode === "completelyDiscard") &&
          (g === "script" || g === "style")
        )
          u += h;
        else {
          const E = $(h, !1);
          e.textFilter && !L ? (u += e.textFilter(E, g)) : L || (u += E);
        }
        if (m.length) {
          const E = m[m.length - 1];
          E.text += h;
        }
      },
      onclosetag: function (h, x) {
        if (I)
          if ((O--, !O)) I = !1;
          else return;
        const g = m.pop();
        if (!g) return;
        if (g.tag !== h) {
          m.push(g);
          return;
        }
        (I = e.enforceHtmlBoundary ? h === "html" : !1), S--;
        const E = T[S];
        if (E) {
          if (
            (delete T[S],
            e.disallowedTagsMode === "discard" ||
              e.disallowedTagsMode === "completelyDiscard")
          ) {
            g.updateParentNodeText();
            return;
          }
          (i = u), (u = "");
        }
        if (
          (A[S] && ((h = A[S]), delete A[S]),
          e.exclusiveFilter && e.exclusiveFilter(g))
        ) {
          u = u.substr(0, g.tagPosition);
          return;
        }
        if (
          (g.updateParentNodeMediaChildren(),
          g.updateParentNodeText(),
          e.selfClosing.indexOf(h) !== -1 ||
            (x &&
              !o(h) &&
              ["escape", "recursiveEscape"].indexOf(e.disallowedTagsMode) >= 0))
        ) {
          E && ((u = i), (i = ""));
          return;
        }
        (u += "</" + h + ">"), E && ((u = i + $(u)), (i = "")), (L = !1);
      },
    },
    e.parser
  );
  return H.write(r), H.end(), u;
  function Y() {
    (u = ""), (S = 0), (m = []), (T = {}), (A = {}), (I = !1), (O = 0);
  }
  function $(h, x) {
    return (
      typeof h != "string" && (h = h + ""),
      e.parser.decodeEntities &&
        ((h = h
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")),
        x && (h = h.replace(/"/g, "&quot;"))),
      (h = h
        .replace(/&(?![a-zA-Z0-9#]{1,20};)/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")),
      x && (h = h.replace(/"/g, "&quot;")),
      h
    );
  }
  function z(h, x) {
    for (x = x.replace(/[\x00-\x20]+/g, ""); ; ) {
      const U = x.indexOf("<!--");
      if (U === -1) break;
      const B = x.indexOf("-->", U + 4);
      if (B === -1) break;
      x = x.substring(0, U) + x.substring(B + 3);
    }
    const g = x.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
    if (!g) return x.match(/^[/\\]{2}/) ? !e.allowProtocolRelative : !1;
    const E = g[1].toLowerCase();
    return ne(e.allowedSchemesByTag, h)
      ? e.allowedSchemesByTag[h].indexOf(E) === -1
      : !e.allowedSchemes || e.allowedSchemes.indexOf(E) === -1;
  }
  function G(h) {
    if (
      ((h = h.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/, "$1//")),
      h.startsWith("relative:"))
    )
      throw new Error("relative: exploit attempt");
    let x = "relative://relative-site";
    for (let U = 0; U < 100; U++) x += `/${U}`;
    const g = new URL(h, x);
    return {
      isRelativeUrl:
        g && g.hostname === "relative-site" && g.protocol === "relative:",
      url: g,
    };
  }
  function b(h, x) {
    if (!x) return h;
    const g = h.nodes[0];
    let E;
    return (
      x[g.selector] && x["*"]
        ? (E = Bu(x[g.selector], x["*"]))
        : (E = x[g.selector] || x["*"]),
      E && (h.nodes[0].nodes = g.nodes.reduce(w(E), [])),
      h
    );
  }
  function v(h) {
    return h.nodes[0].nodes
      .reduce(function (x, g) {
        return (
          x.push(`${g.prop}:${g.value}${g.important ? " !important" : ""}`), x
        );
      }, [])
      .join(";");
  }
  function w(h) {
    return function (x, g) {
      return (
        ne(h, g.prop) &&
          h[g.prop].some(function (U) {
            return U.test(g.value);
          }) &&
          x.push(g),
        x
      );
    };
  }
  function _(h, x, g) {
    return x
      ? ((h = h.split(/\s+/)),
        h
          .filter(function (E) {
            return (
              x.indexOf(E) !== -1 ||
              g.some(function (U) {
                return U.test(E);
              })
            );
          })
          .join(" "))
      : h;
  }
}
const Pa = { decodeEntities: !0 };
ke.defaults = {
  allowedTags: [
    "address",
    "article",
    "aside",
    "footer",
    "header",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hgroup",
    "main",
    "nav",
    "section",
    "blockquote",
    "dd",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "hr",
    "li",
    "main",
    "ol",
    "p",
    "pre",
    "ul",
    "a",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rb",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr",
    "caption",
    "col",
    "colgroup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr",
  ],
  nonBooleanAttributes: [
    "abbr",
    "accept",
    "accept-charset",
    "accesskey",
    "action",
    "allow",
    "alt",
    "as",
    "autocapitalize",
    "autocomplete",
    "blocking",
    "charset",
    "cite",
    "class",
    "color",
    "cols",
    "colspan",
    "content",
    "contenteditable",
    "coords",
    "crossorigin",
    "data",
    "datetime",
    "decoding",
    "dir",
    "dirname",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "fetchpriority",
    "for",
    "form",
    "formaction",
    "formenctype",
    "formmethod",
    "formtarget",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "http-equiv",
    "id",
    "imagesizes",
    "imagesrcset",
    "inputmode",
    "integrity",
    "is",
    "itemid",
    "itemprop",
    "itemref",
    "itemtype",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "name",
    "nonce",
    "optimum",
    "pattern",
    "ping",
    "placeholder",
    "popover",
    "popovertarget",
    "popovertargetaction",
    "poster",
    "preload",
    "referrerpolicy",
    "rel",
    "rows",
    "rowspan",
    "sandbox",
    "scope",
    "shape",
    "size",
    "sizes",
    "slot",
    "span",
    "spellcheck",
    "src",
    "srcdoc",
    "srclang",
    "srcset",
    "start",
    "step",
    "style",
    "tabindex",
    "target",
    "title",
    "translate",
    "type",
    "usemap",
    "value",
    "width",
    "wrap",
    "onauxclick",
    "onafterprint",
    "onbeforematch",
    "onbeforeprint",
    "onbeforeunload",
    "onbeforetoggle",
    "onblur",
    "oncancel",
    "oncanplay",
    "oncanplaythrough",
    "onchange",
    "onclick",
    "onclose",
    "oncontextlost",
    "oncontextmenu",
    "oncontextrestored",
    "oncopy",
    "oncuechange",
    "oncut",
    "ondblclick",
    "ondrag",
    "ondragend",
    "ondragenter",
    "ondragleave",
    "ondragover",
    "ondragstart",
    "ondrop",
    "ondurationchange",
    "onemptied",
    "onended",
    "onerror",
    "onfocus",
    "onformdata",
    "onhashchange",
    "oninput",
    "oninvalid",
    "onkeydown",
    "onkeypress",
    "onkeyup",
    "onlanguagechange",
    "onload",
    "onloadeddata",
    "onloadedmetadata",
    "onloadstart",
    "onmessage",
    "onmessageerror",
    "onmousedown",
    "onmouseenter",
    "onmouseleave",
    "onmousemove",
    "onmouseout",
    "onmouseover",
    "onmouseup",
    "onoffline",
    "ononline",
    "onpagehide",
    "onpageshow",
    "onpaste",
    "onpause",
    "onplay",
    "onplaying",
    "onpopstate",
    "onprogress",
    "onratechange",
    "onreset",
    "onresize",
    "onrejectionhandled",
    "onscroll",
    "onscrollend",
    "onsecuritypolicyviolation",
    "onseeked",
    "onseeking",
    "onselect",
    "onslotchange",
    "onstalled",
    "onstorage",
    "onsubmit",
    "onsuspend",
    "ontimeupdate",
    "ontoggle",
    "onunhandledrejection",
    "onunload",
    "onvolumechange",
    "onwaiting",
    "onwheel",
  ],
  disallowedTagsMode: "discard",
  allowedAttributes: {
    a: ["href", "name", "target"],
    img: ["src", "srcset", "alt", "title", "width", "height", "loading"],
  },
  allowedEmptyAttributes: ["alt"],
  selfClosing: [
    "img",
    "br",
    "hr",
    "area",
    "base",
    "basefont",
    "input",
    "link",
    "meta",
  ],
  allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
  allowedSchemesByTag: {},
  allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
  allowProtocolRelative: !0,
  enforceHtmlBoundary: !1,
  parseStyleAttributes: !0,
};
ke.simpleTransform = function (r, e, t) {
  return (
    (t = t === void 0 ? !0 : t),
    (e = e || {}),
    function (u, i) {
      let n;
      if (t) for (n in e) i[n] = e[n];
      else i = e;
      return { tagName: r, attribs: i };
    }
  );
};
const Ma = $u(Da),
  Ra = (r) => /\.(mp4|webm|mkv|wmv)$/i.test(r);
function qa(r) {
  let e = r.toLowerCase();
  return (
    (e = e.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")),
    (e = e.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")),
    (e = e.replace(/ì|í|ị|ỉ|ĩ/g, "i")),
    (e = e.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")),
    (e = e.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")),
    (e = e.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")),
    (e = e.replace(/đ/g, "d")),
    (e = e.replace(/[\d,\.?]/g, "")),
    (e = e.replaceAll("&nbsp;", "")),
    e
      .replace(/[\d,\.?]/g, "")
      .trim()
      .replaceAll(" ", "-")
  );
}
const It = (r, e = "left") => {
    var u, i;
    return r
      ? ((u = r == null ? void 0 : r.alignment) == null
          ? void 0
          : u.alignment) ??
          ((i = r == null ? void 0 : r.anyTuneName) == null
            ? void 0
            : i.alignment) ??
          e
      : e;
  },
  ka = (r) =>
    r
      ? Ma(r, { allowedTags: [], allowedAttributes: {} })
          .replace(/&lt;|&gt;|&amp;|&quot;|&apos;|&nbsp;|\n/g, " ")
          .replace(/\s+/g, " ")
          .trim()
      : "",
  ja = (r) => {
    const e = Hu();
    return `${r == null ? void 0 : r.replace(/\.(png|jpe?g)$/i, ".webp")}?v=${
      e.public.VERSION_IMAGE_WEBP
    }`;
  },
  Ba = { 16: 14, 18: 16, 20: 18, 24: 22, 28: 26, 32: 30 },
  be = (r) =>
    r.replace(/font-size:\s*(\d+)px/g, (e, t) => {
      const u = parseInt(t, 10);
      if (u <= 14) return `font-size: ${u}`;
      const i = Ba[u],
        n = `calc(${i}px + (${u} - ${i}) * ((100vw - 375px) / (1440 - 375)))`;
      return `font-size: clamp(${i}px, ${n}, ${u}px)`;
    });
function Ua(r) {
  const e = Hu();
  return Te(r)
    ? ""
    : hi({
        header: (p) => {
          var m;
          const a = It(p.tunes),
            c = Te(a) ? "" : `class="text-${a}"`,
            y = p.data.level === 1 ? 2 : p.data.level,
            S =
              ((m = p.data.text) == null
                ? void 0
                : m.replace(/(<([^>]+)>)/gi, "")) ?? "";
          return `<h${y} ${c} id="${qa(S)}">${be(p.data.text) ?? ""}</h${y}>`;
        },
        paragraph: (p) => {
          const a = It(p.tunes),
            c = Te(a) ? "" : `class="text-${a}"`;
          return be(`<p ${c} >${p.data.text}</p>`);
        },
        list: (p) => {
          var c;
          const a =
            (c = p.data.items) == null
              ? void 0
              : c.map((y) => `<li>${be(y)}</li>`).join("");
          return p.data.style === "ordered" ? `<ol>${a}</ol>` : `<ul>${a}</ul>`;
        },
        image: (p) => {
          var A, I, O;
          const a = It(p.tunes),
            c = p.data.file && p.data.file.url ? p.data.file.url : p.data.url,
            y = Te(a)
              ? 'class="!mb-4"'
              : `class="text-${a} ej-alignment !mb-4"`,
            S = Te(
              (A = p == null ? void 0 : p.data) == null ? void 0 : A.caption
            )
              ? ""
              : `<span class="title-img block">${be(
                  (I = p == null ? void 0 : p.data) == null ? void 0 : I.caption
                )}</span>`,
            m = ka(
              ((O = p == null ? void 0 : p.data) == null ? void 0 : O.alt) ||
                e.public.DEFAULT_ALT_IMAGE
            ),
            T = Ra(c)
              ? `<video src="${c}" class="mb-1" title="${m}" controls></video>`
              : `<img src="${ja(
                  c
                )}" alt="${m}" class="mb-1 w-full h-auto object-contain" />`;
          return `<div ${y}>
              ${T}
              ${S}
            </div>`;
        },
        mediaLib: (p) => (console.warn("Unknown block", p), ""),
        attaches: (p) => {
          var y;
          const a =
            ((y = p == null ? void 0 : p.data) == null ? void 0 : y.title) ??
            "Attached file";
          return `<a href="${p.data.file && p.data.file.url}" target="_blank">
              ${a}
            </a>`;
        },
        table: (p) => {
          var a, c, y, S, m, T, A, I;
          return `<table>
              <thead>
                <tr>${
                  (S =
                    (y =
                      (c =
                        (a = p == null ? void 0 : p.data) == null
                          ? void 0
                          : a.content) == null
                        ? void 0
                        : c[0]) == null
                      ? void 0
                      : y.map((O) => `<th>${be(O)}</th>`)) == null
                    ? void 0
                    : S.join("")
                }</tr>
              </thead>
              <tbody>
                ${
                  (I =
                    (A =
                      (T =
                        (m = p == null ? void 0 : p.data) == null
                          ? void 0
                          : m.content) == null
                        ? void 0
                        : T.slice(1)) == null
                      ? void 0
                      : A.map((O) => {
                          var L;
                          return `<tr>${
                            (L =
                              O == null
                                ? void 0
                                : O.map((H) => `<td>${be(H)}</td>`)) == null
                              ? void 0
                              : L.join("")
                          }</tr>`;
                        })) == null
                    ? void 0
                    : I.join("")
                }
              </tbody>
            </table>`;
        },
      })
        .parse(r)
        .join("");
}
const $a = ["innerHTML"],
  Ha = ni({
    __name: "JsonContent",
    props: {
      content: { type: Object, default: () => ({}) },
      ignoreImage: { type: Boolean, default: !1 },
    },
    setup(r) {
      const e = r;
      return (t, u) => (
        ai(),
        si(
          "div",
          {
            class: oi({ "editor-content": !0, "ignore-image": e.ignoreImage }),
            innerHTML: ci(Ua)(r.content),
          },
          null,
          10,
          $a
        )
      );
    },
  });
const ss = ii(Ha, [["__scopeId", "data-v-a5d9bc84"]]);
export { ss as _ };
