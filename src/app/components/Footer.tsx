import { FaInstagram } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import Logo from "./Logo";

export default function Footer(){
    return(
        <footer className="flex justify-between absolute bottom-0 w-full">
            <div>
                <Logo/>
                <div>
                    <input type="text" name="" id="" placeholder="Enter your email" className="bg-white text-center text-slate-600 p-3 py-4"/>
                    <button className="bg-blue-500 text-white p-3 py-4 cursor-pointer">Subscribe</button>
                </div>
            </div>

            <div className="text-white flex gap-12 leading-10">
                <div>
                    <h2>Learn More</h2>
                    <ul>
                        <li>About Us</li>
                        <li>FAQ</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <h2>Contact Us</h2>
                    <ul>
                        <li>Contact Number</li>
                        <li>Email Address</li>
                    </ul>
                </div>

                <div>
                    <h2>Social Media</h2>
                    <div className="flex gap-2">
                        <FaInstagram />
                        <RiGithubLine/>
                        <FiFacebook />
                    </div>
                </div>
            </div>
        </footer>
    );
};
