import './Footer.css';
export default function Footer() {

  return (
  <footer>
  <div className="bg-navbar text-white">
      <div className="flex items-center justify-center">
          <div className="grid grid-cols-4 gap-4 m-20">

            <div><a href="/howitworks">How It Works</a></div>
            <div><a href="/resources">Resources</a></div>
            <div><a href="/">Contact Us</a></div>
            <div><a href="/test">Company D&I Test</a></div>
            
          </div>
      </div>
    </div>
  </footer>
  )
}
