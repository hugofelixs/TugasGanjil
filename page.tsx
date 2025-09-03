import Image from "next/image";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      {/*navbar*/}
      <nav>
        <div className="container mx-auto flex items-center justify-between py-3">
          <a href=""><img src="img/katseye1.jpeg" width={160} height={90} /></a>
          <div className="space-x-6 font-fairfax">
            <a className="hover:text-gray-800">Home</a>
            <a className="hover:text-gray-800">About</a>
            <a className="hover:text-gray-800">Shop</a>
            <a className="hover:text-gray-800">Contact</a>
          </div>
          <button className="bg-[#6ce30b] text-white font-alagard px-5 py-2 rounded-3xl">More Info?</button>
        </div>
      </nav>

      {/*Hero Section*/}
      <section
        className="w-full h-screen bg-cover bg-no-repeat bg-center flex items-start"
        style={{ backgroundImage: "url('/img/111.png')" }}
      >
        <div className="px-6 container mx-auto pt-50">
          <h3 className="text-6xl font-alagard mb-4">Hi All! We're KATSEYE!</h3>
          <h3 className="bg-gradient-to-tr from-[#6ce30b] to-white text-stroke bg-clip-text text-transparent text-5xl font-alagard mb-5">The 1st Global Girl Group</h3>
          <p className="text-gray-500 font-fairfax mb-5 max-w-xl">Katseye is a girl group based in Los Angeles, United States. The group is composed of six members: Daniela, Lara, Manon, Megan, Sophia, and Yoonchae. With members from the Philippines, South Korea, Switzerland, and the United States, Katseye is often described as a "global girl group".</p>
          <div className="flex space-x-12 mt-6 mb-5">
            <div>
              <h4 className="font-alagard text-lg">Most Streamed Song :</h4>
              <p className="text-2xl font-fairfax"><b>Touch: 414M+</b></p>
            </div>
            <div>
              <h4 className="font-alagard text-lg">Discography :</h4>
              <p className="text-2xl font-fairfax"><b>2 EP, 8 Singles</b></p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="bg-[#6ce30b] font-fairfax text-white px-4 py-2 rounded-3xl shadow-md hover:shadow-lg transition">Streams Our 2nd EP</button>
            <button className="bg-black font-fairfax text-white px-6 py-2 rounded-3xl shadow-md hover:shadow-lg transition">Our Discography</button>
          </div>
        </div>
      </section>


      <section className="container mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="flex items-center bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white mr-4">
              ✓
            </div>
            <div className="flex-1">
              <h4 className="font-alagard">Nominated in 3 Award Ceremony</h4>
              <p className="text-gray-500 font-fairfax text-sm">Hanteo, iHeartRadio, & MTV VMA</p>
            </div>
            <span className="text-gray-400">&gt;</span>
          </div>

          {/* Card 2 */}
          <div className="flex items-center bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#6ce30b] text-white mr-4">
              ✓
            </div>
            <div className="flex-1">
              <h4 className="font-alagard">Over 1 million units sold</h4>
              <p className="text-gray-500 font-fairfax text-sm">Their singles: Touch, Gnarly, Gabriela</p>
            </div>
            <span className="text-gray-400">&gt;</span>
          </div>

          {/* Card 3 */}
          <div className="flex items-center bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white mr-4">
              ✓
            </div>
            <div className="flex-1">
              <h4 className="font-alagard">Debuting at #4 on Billboard 200</h4>
              <p className="text-gray-500 font-fairfax text-sm">Their 2nd EP "Beautiful Chaos" has been sold 44.000 units</p>
            </div>
            <span className="text-gray-400">&gt;</span>
          </div>

        </div>
      </section>

      {/* statistic */}
      <section className="w-full h-screen bg-cover bg-no-repeat bg-center flex items-start"
        style={{ backgroundImage: "url('/img/22.png')" }}>
        <div className="container mx-auto flex justify-end">
          {/* Box teks di kanan */}
          <div className="max-w-lg text-right mt-25">
            <h3 className="text-6xl font-alagard mb-4">
              Our Discography!
            </h3>
            <h3 className="bg-gradient-to-tr from-[#6ce30b] to-white text-stroke bg-clip-text text-transparent text-5xl font-alagard mb-5">
              2 EP, 8 Singles
            </h3>
            <p className="text-gray-700 text-xl font-fairfax mb-5">
              Touch: 420.802.807 streams<br />
              Gnarly: 209.654.768 streams<br />
              Gabriela: 174.096.483 streams<br />
              Debut: 136.606.064 streams<br />
              Gameboy: 62.566.200 streams<br />
            </p>

            <div className="flex justify-end space-x-12 mt-6 mb-5">
              <h4 className="font-alagard text-2xl">Streams Our Song in:</h4>
              <div className="flex space-x-4 text-3xl">
                <a
                  href="https://open.spotify.com/artist/3c0gDdb9lhnHGFtP4prQpn?si=CzaNEwZ_RZOJ9LJrhk2a1g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:scale-110 transition-transform"
                >
                  <FaSpotify />
                </a>

                <a
                  href="https://music.apple.com/id/artist/katseye/1754284416"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-pink-500 hover:scale-110 transition-transform"
                >
                  <FaApple />
                </a>

                <a
                  href="https://music.youtube.com/channel/xxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:scale-110 transition-transform"
                >
                  <FaYoutube />
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto my-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Kiri: Skills bar */}
        <div>
          <h3 className="text-4xl font-alagard mb-4">What's Our Group Skills Included'</h3>
          <p className="text-gray-600 font-fairfax mb-6">
            These are the works we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful.
          </p>

          {/* Photoshop */}
          <div className="mb-4">
            <div className="flex justify-between font-fairfax mb-1">
              <span>Dance</span> <span>80%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-[#6ce30b] h-2 rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>

          {/* Illustrator */}
          <div className="mb-4">
            <div className="flex justify-between font-fairfax mb-1">
              <span>Vocal</span> <span>90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-[#6ce30b] h-2 rounded-full" style={{ width: "90%" }}></div>
            </div>
          </div>

          {/* Sketch */}
          <div>
            <div className="flex justify-between font-fairfax mb-1">
              <span>Visual</span> <span>70%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-[#6ce30b] h-2 rounded-full" style={{ width: "70%" }}></div>
            </div>
          </div>
        </div>

        {/* Kanan: Grid Skill Cards */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center p-8 hover:shadow-lg transition">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black text-white mb-3">
              D
            </div>
            <h4 className="font-alagard">Dancer</h4>
          </div>

          <div className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center p-8 hover:shadow-lg transition">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black text-white mb-3">
              VO
            </div>
            <h4 className="font-alagard">Vocalist</h4>
          </div>

          <div className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center p-8 hover:shadow-lg transition">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black text-white mb-3">
              V
            </div>
            <h4 className="font-alagard">Visual</h4>
          </div>

          <div className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center p-8 hover:shadow-lg transition">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black text-white mb-3">
              L
            </div>
            <h4 className="font-alagard">Leader</h4>
          </div>
        </div>
      </section>

    </div>
  );
}
