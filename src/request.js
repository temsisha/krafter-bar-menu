import tocenaPiva from './data/tocena_piva.json'
import flasiranaPiva from './data/flasirana_piva.json'
import topliNapitci from './data/topli_napitci.json'
import bezalkoholniNapitci from './data/bezalkoholni.json'
import zestina from './data/zestina.json'
import rakije from './data/rakije.json'
import vina from './data/vina.json'

const request = {
  fetchTopliNapitci: topliNapitci,
  fetchBezAlkoholniNapitci: bezalkoholniNapitci,
  fetchZestina: zestina,
  fetchRakije: rakije,
  fetchVina: vina,
  fetchTocenaPiva: tocenaPiva,
  fetchFlasiranaPiva: flasiranaPiva,
}

export default request
