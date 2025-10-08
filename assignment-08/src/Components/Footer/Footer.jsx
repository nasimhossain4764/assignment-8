import { motion } from "framer-motion";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.footer
      className="bg-gradient-to-br from-gray-900 to-black text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              HERO.IO
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              We craft innovative apps designed to make everyday life simpler,
              smarter, and more exciting. Turning your ideas into digital
              experiences that truly make an impact.
            </p>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Google Play
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                App Store
              </motion.button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                "All Courses",
                "PRO Courses",
                "Regular Course",
                "Video Course",
                "Trending Apps",
              ].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Statistics */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">
              Our Impact
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-2xl font-bold text-blue-400">29.6M+</p>
                <p className="text-gray-400 text-sm">Total Downloads</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-400">906K+</p>
                <p className="text-gray-400 text-sm">Reviews</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">132+</p>
                <p className="text-gray-400 text-sm">Active Apps</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trending Apps Quick View */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <h4 className="text-lg font-semibold mb-6 text-gray-100 text-center">
            Popular Apps
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Discord", downloads: "2.6M" },
              { name: "Adobe Lightroom", downloads: "5M" },
              { name: "VS Code", downloads: "2.3M" },
              { name: "Figma", downloads: "1.25M" },
              { name: "ChatGPT", downloads: "1.1M" },
            ].map((app, index) => (
              <motion.div
                key={app.name}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-2 text-center min-w-[120px]"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(55, 65, 81, 0.8)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="font-medium text-white text-sm">{app.name}</p>
                <p className="text-blue-400 text-xs">{app.downloads}+</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 HERO.IO. All rights reserved.
          </div>

          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Contact", "Support"].map(
              (item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
