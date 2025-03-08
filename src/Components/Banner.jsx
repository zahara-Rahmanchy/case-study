import React from "react";

const Banner = () => {
  return (
    <section>
      <div className="banner">
        <h1>
          I AM A
          <img
            className="banner-img"
            src="https://s3-alpha-sig.figma.com/img/2bf2/53ef/c371db14843542f4cdb284e0f86a683c?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iVNimZ0xvHvoJCAQIGXXv8NZUmBhmzywKpEea7AYWhoDjyNmSQ0bOrF~1BNpatBSDE5X~fBujBTmLPr8aWDHpvUdmdhGH4OskC1fPKoMRvo9tY0szB-1VlbGCelmqBn67RZbpnqkna4XZNwdTaGxgiDuVQMPvpJZbolOiNUo6ZgEOFtOHuwPzondQZdA9Uvb1eRHz2KqCDXj8U-GIlpe5MhyyuuMDplu6DcbbrZyIjlTjwKNqz~Fq1KTNHO910AvWHCOoUZSDF1nf49xldybJ9lJ4~Np6CLyKmhWSOGV4BuPh1DCbN9B5-YrBx82cMiKqZBvFfbBFX9ngMToKWhmbQ__"
          />
          FREELANCE DESIGNER
          <span>
            <img
              className="banner-img"
              src="https://s3-alpha-sig.figma.com/img/048d/34c7/01fa7a970737bd16efaad0c81fa3e0b7?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nC2bRhE0bHEkny-wyaF-rek8SwMdQbHaFyBvrb8oJNo5Eho~088j33MuU75Pu0ryEDccfRTXm3kVYe-6fMwwrTnSnS9UUe1lOcxBGOzGe4jLrXy4efMjq3Ybng1g-ZvzaVVIpphJR3P7A3U2rZz8UOWdO~xzmB6a6-oWcgwXcr6uD9CIPH71p43REBZuuQLPh0kHaAUrTr0QPmJEa9qIwGg9ts8bSoqs400To813s~TBAsP-T5X-q9NyLJ56fME~lVr76YgS8DGci0FqM11nh6J5BZ3itnujbGwccmULiNsMrpuRmLA6Pn6MWefn-VgsY~o7RUGvBnXSJJ1uMIkY1g__"
              alt="img"
            />
          </span>
          FROM <br /> San Francisco
        </h1>
      </div>
      {/* second part */}
      <div className="banner-section-2">
        <img src="./doradesign.png" alt="doradesign" />
        <img src="./wavefun.png" alt="wavefun" />
        <img src="silsila.png" alt="silsila" />
        <div>
          <p>
            Welcome to my portfolio. Here, artistry meets functionality. Dive
            into a curated showcase of distinctive branding and web designs,
            each crafted to captivate and inspire.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
