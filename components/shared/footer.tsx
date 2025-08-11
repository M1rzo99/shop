export default function Footer() {
  return (
    <footer className="border-t border-gray-300 px-[10vw] py-10 text-[13px] text-[#0b2d64] leading-relaxed">
      <div className="grid grid-cols-4">

        {/* Office */}
        <div className="space-y-1">
          <h3 className="font-bold tracking-wide">OFFICE</h3>
          <p>
            19, Sinchon-ro 2-gil, Mapo-gu, Seoul,<br />
            Republic of Korea
          </p>
          <p>+82 (0)2-1234-5678 (Mon-Fri 10:00-19:00)</p>
          <p>contact@objet-b.com</p>
        </div>

        {/* Showroom */}
        <div className="space-y-1">
          <h3 className="font-bold tracking-wide">SHOWROOM</h3>
          <p>
            11, Bono-ro 2-gil, Sangnok-gu, Ansan-si,<br />
            Gyeonggi-do, Republic of Korea
          </p>
          <p>+82 (0)2-1234-5678 (Mon-Fri 10:00-19:00)</p>
        </div>

        {/* Social & Legal */}
        <div className="flex flex-col items-start gap-1">
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Youtube</a>

        </div>
      <div className="flex flex-col items-start gap-1">
             <a href="#" className="mt-3 hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
