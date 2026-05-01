import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { motion } from "framer-motion";

export default function Portfolio() { return ( <div className="min-h-screen bg-black text-white p-6"> <div className="max-w-5xl mx-auto"> {/* Header */} <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10" > <h1 className="text-4xl font-bold">Ashu Edits</h1> <p className="text-gray-400 mt-2"> Video Editor | Reels & YouTube | Storytelling & Retention Focused </p> <Button className="mt-4">Contact Me</Button> </motion.div>

{/* About */}
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-400">
          I’m a video editor who has worked with a 400K+ YouTube creator,
          helping improve storytelling, pacing, and viewer retention. I
          specialize in high-engagement edits with clean cuts, subtitles,
          and modern editing styles.
        </p>
      </CardContent>
    </Card>

    {/* Work Section */}
    <h2 className="text-2xl font-semibold mb-4">My Work</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((item) => (
        <Card key={item}>
          <CardContent className="p-4">
            <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center">
              <span className="text-gray-500">Video {item}</span>
            </div>
            <p className="mt-3 text-gray-400">
              High-retention edit with subtitles, sound effects, and
              storytelling pacing.
            </p>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Services */}
    <h2 className="text-2xl font-semibold mt-10 mb-4">Services</h2>
    <div className="grid md:grid-cols-3 gap-6">
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold">Reels / Shorts</h3>
          <p className="text-gray-400">Fast-paced engaging edits</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold">YouTube Videos</h3>
          <p className="text-gray-400">Story-driven editing</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold">Custom Edits</h3>
          <p className="text-gray-400">Based on your style</p>
        </CardContent>
      </Card>
    </div>

    {/* Footer */}
    <div className="text-center mt-12 text-gray-500">
      <p>DM on Instagram or Email for work</p>
    </div>
  </div>
</div>

); }
