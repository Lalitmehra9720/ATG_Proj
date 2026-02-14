import { Twitter, Linkedin, Discord } from "@deemlol/next-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#18181c] text-gray-400 layout-padding">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <Link href={"/"} className="w-10 h-10 rounded-full">
                <img
                  src="/Ellipse_center.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>

            <p className="text-[18px] leading-relaxed text-[#9E9E9E]">
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Sections</h4>

            <div className="flex flex-wrap gap-12">
              <ul className="space-y-2 text-sm leading-8">
                <li>
                  <Link href="#" className="footerLink">Home</Link>
                </li>
                <li>
                  <Link href="#" className="footerLink">Section One</Link>
                </li>
                <li>
                  <Link href="#" className="footerLink">Section Two</Link>
                </li>
                <li>
                  <Link href="#" className="footerLink">Section Three</Link>
                </li>
              </ul>
              <ul className="space-y-2 text-sm leading-8">
                <li>
                  <Link href="#" className="footerLink">Home</Link>
                </li>
                <li>
                  <Link href="#" className="footerLink">Section One</Link>
                </li>
                <li>
                  <Link href="#" className="footerLink">Section Two</Link>
                </li>
                <li>
                  <Link href="#" className="footerLink">Section Three</Link>
                </li>
              </ul>
              <ul className="space-y-2 text-sm leading-8">
                <li>
                  <Link href="#" className="footerLink">Home</Link>
                </li>
                <li>
                  <Link href="#" className="footerLink">Section One</Link>
                </li>
                <li>
                  <Link href="#" className="footerLink">Section Two</Link>
                </li>
                <li>
                  <Link href="#" className="footerLink">Section Three</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full bg-black layout-padding">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>All Rights Reserved Inkyy.com 2022</p>

          <div className="flex gap-3 ">
            <div className="socialIcon hover:bg-white/20">
              <Twitter size={20} className="icon" />
            </div>
            <div className="socialIcon">
              <Linkedin size={20} className="icon"  />
            </div>
            <div className="socialIcon">
              <Discord size={20} className="icon"  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
