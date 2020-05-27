import { seo } from "../json/seo.json"
import { app } from "../../app.json"

const SEO = {
  index: {
    title: seo.INDEX.title + " - " + app.NAME,
    desc: seo.INDEX.desc,
    placename: seo.GLOBAL.placename,
    image: seo.GLOBAL.image,
    country: seo.GLOBAL.country,
    domain: seo.GLOBAL.domain,
    locale: seo.GLOBAL.locale,
    distribution: seo.GLOBAL.distribution,
    rating: seo.GLOBAL.rating,
    type: seo.GLOBAL.type,
    creator: seo.GLOBAL.creator
  }
}
export default SEO
