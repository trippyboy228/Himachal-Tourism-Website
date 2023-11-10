import React from 'react'
import Footer from '../footer/Footer'

 const Faura=()=> {
  return (
    <div>
        
      <img src="https://previews.123rf.com/images/saiko3p/saiko3p2006/saiko3p200600105/150028353-kalpa-and-kinnaur-kailash-mountain-aerial-panoramic-view-kalpa-is-a-small-town-in-the-sutlej-river.jpg" height="400px" width="100%" />
      <div className='heading'>
            <h1>Flora & Fauna</h1>
        </div>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-6 pt-5'>
                <p className='text_p'><b> In the highlands, stealthily the elusive snow leopard hunts blue sheep and in the last refuse of undisturbed western Himalayan habitat at the Great Himalayan national park, the rate but visually stunning western tragopan and monal pheasants find a protected shelter .Other animals that can be sighted in the wild include the ibex, wild yak, ghoral deer, musk deer, Himalayan black bear, brown bear ,leopards and the Himalayan Thar.</b></p>
            </div>
            <div className='col-lg-6 pt-5'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzI5G4NKCCLKk5lHM4DDaanqRVj5GQFIJeYg&usqp=CAU" height="300px" width="400px" />
            </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-12 pt-5'>
                <h3>Snow Leopard</h3>
                <p><b>Home to an extremly hostile habitat of snow moutains ranges, the snow leopard is a poerful predator preying mainly upon blue sheep and the ibex.Master of its enviroment and mostly living a Solitary life the snow Leopard is the state animal of Himanchal pradesh</b></p><br></br>
                <h3>Himalayan Yak</h3>
                <p><b>Standing 6 feet tall at the shoulder the massively built yak is a long haired bovine found in the higher Himalayan region. The shaggy beast has been domesticated and besides providing meat, fibre ,milkand hide ,yaks also serve as the beasts of burden in spiti,Lahaul and parts of chamba</b></p>
            </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-6 pt-5'>
                <img src="https://s-media-cache-ak0.pinimg.com/736x/22/ef/cd/22efcdb1c59eb7a60eec295741971548.jpg" height="300px" width="400px" />

            </div>
            <div className='col-lg-6 pt-5'>
                <h3>Wertern Tragopan</h3>
                <p><b> The western tragopan is considered the rarest of all living pheasants. Its range is very restricted. In the Kashmir valley, it is known as daangeer, in Chamba as phulgar and in the Kullu valley as jujurana ("king of birds"). It was accorded the status of state bird of Himachal Pradesh in 2007</b></p>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Faura