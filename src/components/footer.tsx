const Footer = () => {
  return (
    <footer className="mt-24 border-t border-zinc-800 pt-6 pb-10 text-center text-sm text-zinc-500">
      <p className="mb-2">&copy; {new Date().getFullYear()}  All rights reserved.</p>
      <p>
        Built with <span className="text-blue-400">Arjay</span> <span className="text-cyan-400">Tebia</span>.
      </p>
    </footer>
  )
}

export default Footer
