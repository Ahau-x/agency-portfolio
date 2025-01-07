//Images
import NovmUser from "Assets/portfolio/novmuser.png";
import OllaBot from "Assets/portfolio/ollabot.png";
import SketchToImage from "Assets/portfolio/sketchtoimage.png";
import Leveld from "Assets/portfolio/leveld.png";
import Vocalo from "Assets/portfolio/vocalo.png";
import HeyLuna from "Assets/portfolio/heyluna.png";
import SolanaNft from "Assets/portfolio/solananft.png";
import PepeNft from "Assets/portfolio/pepenft.png";
import Hamie from "Assets/portfolio/hamie.png";
import Guess2Gain from "Assets/portfolio/guess2gain.png";
import TeleBook from "Assets/portfolio/telebook.png";
import Dragon from "Assets/portfolio/dragon.png";
import Dbazzar from "Assets/portfolio/dbazzar.png";
import Alison from "Assets/portfolio/alison.png";
import Magic from "Assets/portfolio/magic.png";
import Weverse from "Assets/portfolio/weverse.png";
import SmartMap from "Assets/portfolio/smartmap.png";
import Spark from "Assets/portfolio/spark.png";
import UniPlace from "Assets/portfolio/uniplace.png";
import Fitness from "Assets/portfolio/fitness.png";
import OnBuy from "Assets/portfolio/onbuy.png";
import Detection from "Assets/portfolio/detection.png";
import Racing from "Assets/portfolio/racing.png";
import Lummi from "Assets/portfolio/lummi.jpg";

const portfolioData = [
  {
    name: "AI-powered writing assistant designed to enhance your novel creation process.",
    filter: "ai",
    image: NovmUser,
    url: "https://novmuserai.com",
    keywords: ["AI agent", "Generative AI"],
  },
  {
    name: "AI-powered platform offering images, including photos, illustrations, and 3D visuals.",
    filter: "ai",
    image: Lummi,
    url: "https://www.lummi.ai",
    keywords: ["Image Generator", "Stable Diffusion"],
  },
  {
    name: "SaaS platform for creating custom AI chatbots without coding.",
    filter: "ai",
    image: OllaBot,
    url: "https://app.ollabot.com",
    keywords: ["AI chatbot", "Langchain"],
  },
  {
    name: "Sketch To Image transforms any sketches into stunning image using AI magic.",
    filter: "ai",
    image: SketchToImage,
    url: "https://sketchtoimage.com",
    keywords: ["Stable Diffusion", "Generative Art"],
  },
  {
    name: "Simple and straightforward with AI being the cherry on top.",
    filter: "ai",
    image: Leveld,
    url: "https://leveld-frontend.vercel.app",
    keywords: ["Next.js", "OpenAI API"],
  },
  {
    name: "Speak and improve your English fluency with AI-powered spoken English tutor.",
    filter: "ai",
    image: Vocalo,
    url: "https://vocalo.ai",
    keywords: ["Generative AI", "Llama Index"],
  },
  {
    name: "HeyLuna.ai is an AI powered virtual assistant with long term memory that can understand.",
    filter: "ai",
    image: HeyLuna,
    url: "https://heyluna.ai",
    keywords: ["AI agent", "Llama Index"],
  },
  {
    name: "Explore, collect, and transfer solana NFTs",
    filter: "blockchain",
    image: SolanaNft,
    url: "https://nft-marketplace-solana-five.vercel.app",
    keywords: ["Solana", "NFT"],
  },
  {
    name: "DJ Pepe is more than just a meme - he’s the DJ of the crypto revolution!",
    filter: "blockchain",
    image: PepeNft,
    url: "https://dj-pepe-nft-marketplace.vercel.app",
    keywords: ["Crypto", "NFT"],
  },
  {
    name: "Telegram mini app by tapping to fly",
    filter: "app",
    image: Hamie,
    url: "https://t.me/hamie_game_bot",
    keywords: ["Mini App", "Constructor"],
  },
  {
    name: "Will the price of Bitcoin go up or down? Guess the price and gain revenue on Solana.",
    filter: "blockchain",
    image: Guess2Gain,
    url: "https://guess2gain.com",
    keywords: ["Solana", "Nuxt.js"],
  },
  {
    name: "Telegram mini app for booking hotels",
    filter: "app",
    image: TeleBook,
    url: "https://t.me/tebook_bot",
    keywords: ["Mini App", "React.js"],
  },
  {
    name: "Tap the screen to earn Dragonz Gold, build the most epic deck of Heroes",
    filter: "app",
    image: Dragon,
    url: "https://t.me/dragonz_land_bot",
    keywords: ["Mini App", "React.js"],
  },
  {
    name: "All-in-one super app aimed at providing a true digital lifestyle.",
    filter: "app",
    image: Dbazzar,
    url: "https://play.google.com/store/apps/details?id=com.dbazzar.apptwo",
    keywords: ["Android", "React Native"],
  },
  {
    name: "Harness technology to make education and skills training available to anyone, anywhere.",
    filter: "web",
    image: Alison,
    url: "https://alison.com",
    keywords: ["Laravel", "Backbone.js"],
  },
  {
    name: "Magic Spoon is high-protein, keto-friendly, gluten-free cereal with 0g of sugar.",
    filter: "web",
    image: Magic,
    url: "https://magicspoon.com",
    keywords: ["Shopify", "Vue.js"],
  },
  {
    name: "Weverse is a social network for connecting with artists.",
    filter: "app",
    image: Weverse,
    url: "https://play.google.com/store/apps/details?id=co.benx.weverse&hl=en_US",
    keywords: ["Android", "React Native"],
  },
  {
    name: " Ultimate travel companion, providing our famous Happy Hour Map, and Wi-Fi Map.",
    filter: "app",
    image: SmartMap,
    url: "https://play.google.com/store/apps/details?id=com.arubasmartmap.aruba_smart_map",
    keywords: ["Android", "React Native"],
  },
  {
    name: "With our variety of kids dresses, clothes, and complete kids outfits",
    filter: "web",
    image: Spark,
    url: "https://sparkleinpink.com",
    keywords: ["React.js", "Nest.js"],
  },
  {
    name: "Marketplace of unique places for students, young workers, travellers or families.",
    filter: "web",
    image: UniPlace,
    url: "https://www.uniplaces.com",
    keywords: ["Nuxt.js", "Django"],
  },
  {
    name: "Offer a wide range of fitness classes and an engage online community",
    filter: "web",
    image: Fitness,
    url: "https://www.alomoves.com",
    keywords: ["React.js", "Express.js"],
  },
  {
    name: "UK-founded online marketplace; the highest-ranked marketplace, at that.",
    filter: "web",
    image: OnBuy,
    url: "https://www.onbuy.com",
    keywords: ["Next.js", "Express.js"],
  },
  {
    name: "This shows object detection by Yolo",
    filter: "ai",
    image: Detection,
    url: "/video",
    keywords: ["Object detection", "Yolo"],
  },
  {
    name: "Play-and-earn title in the Motorverse metaverse of racing games.",
    filter: "blockchain",
    image: Racing,
    url: "https://www.revvracing.com",
    keywords: ["Blockchain", "Metaverse"],
  },
];

export default portfolioData;
