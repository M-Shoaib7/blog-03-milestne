'use client'
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ThemeContext from "@/app/context/ThemeContext"
import { useContext } from "react"

export default function Footer() {

  const {theme} = useContext(ThemeContext) 

  return (
    <footer
      style={{
        backgroundColor:theme.bg,
        color:theme.color
      }}
    className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:info@jstemplate.net"
                  className="text-muted-foreground hover:text-primary"
                >
                  mshoaibmshoaib@117gmail.com
                </a>
              </p>
              <p className="text-sm">
                <span className="font-medium">Phone:</span>{" "}
                <a
                  href="tel:880123456789"
                  className="text-muted-foreground hover:text-primary"
                >
                  3249250789
                </a>
              </p>
            </div>
          </div>

          {/* Quick Link Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Link</h3>
            <nav className="flex flex-col space-y-2">
              {["Home", "About", "Blog", "Archived", "Author", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Category Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Category</h3>
            <nav className="flex flex-col space-y-2">
              {[
                "Lifestyle",
                "Technology",
                "Travel",
                "Business",
                "Economy",
                "Sports",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Weekly Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Weekly Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Get blog articles and offers via email
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your Email"
                className="w-full"
              />
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
           
            <p className="text-sm text-muted-foreground">
              © Tech Insight. All Rights Reserved.
            </p>
          </div>
          <nav className="flex items-center space-x-6">
            {["Terms of Use", "Privacy Policy", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

