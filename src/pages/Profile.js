import { Fragment } from 'react';
import ProfileCard from '../component/ProfileCard';
import "./Profile.css";

export default function Profile() {

    const anggota = [
      {
        id: 1,
        nama: "Afif Syarifuddin Yahya",
        nim: "21120116120018",
        image: "https://pngimg.com/uploads/anonymous_mask/anonymous_mask_PNG32.png",
        desc: "S1 Teknik Komputer Fakultas Teknik Universitas Diponegoro",
      },
      {
        id: 2,
        nama: "Galih Saputra",
        nim: "21120119120008",
        image: "https://pngimg.com/uploads/anonymous_mask/anonymous_mask_PNG32.png",
        desc: "S1 Teknik Komputer Fakultas Teknik Universitas Diponegoro",
      },
      {
        id: 3,
        nama: "Anhar",
        nim: "21120119120012",
        image: "https://pngimg.com/uploads/anonymous_mask/anonymous_mask_PNG32.png",
        desc: "S1 Teknik Komputer Fakultas Teknik Universitas Diponegoro",
      },
      {
        id: 4,
        nama: "Kevin Ryo Pratama",
        nim: "21120119130098",
        image: "https://pngimg.com/uploads/anonymous_mask/anonymous_mask_PNG32.png",
        desc: "S1 Teknik Komputer Fakultas Teknik Universitas Diponegoro",
      }
    ];

    return (
      <>
      <p id="profiles">Kelompok 32</p>
      <div className="containerProfile">
        {anggota.map((item, index) => (
          <Fragment key={item.id}>
            <ProfileCard
              nama={item.nama}
              image={item.image}
              nim={item.nim}
              desc={item.desc}
            />
            {anggota.length === index + 1 ? (
              <div style={{ marginRight: 40 }} />
            ) : null}
          </Fragment>
        ))}
      </div>
      </>
    );
  }
  