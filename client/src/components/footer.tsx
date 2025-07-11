export default function Footer() {
  return (
    <footer className="bg-primary-dark py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-accent mb-2">Himanshu Acharya</h3>
            <p className="text-gray-400">Software Developer | GenAI Specialist | Gold Medalist</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2024 Himanshu Acharya. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with passion and cutting-edge technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
