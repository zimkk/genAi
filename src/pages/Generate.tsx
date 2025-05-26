import { useState } from 'react';
import { SendIcon, InfoIcon, DownloadIcon, HeartIcon, TrashIcon, ZapIcon, CopyIcon } from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { SAMPLE_IMAGES } from '../utils/constants';
const Generate = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };
  return <Layout>
      <div className="p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Generate AI Art</h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Prompt Panel */}
          <div className="lg:col-span-4">
            <Card variant="glass" className="p-6">
              <h2 className="text-lg font-semibold mb-4">Text to Image</h2>
              <div className="mb-6">
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Your Prompt
                </label>
                <div className="relative">
                  <textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Describe what you want to create..." className="w-full h-32 bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-400" />
                </div>
                <div className="flex justify-between mt-2 text-xs text-white/50">
                  <span>Be descriptive for best results</span>
                  <span>{prompt.length} characters</span>
                </div>
              </div>
              <div className="mb-6">
                <button onClick={() => setShowAdvanced(!showAdvanced)} className="flex items-center text-sm text-white/70 hover:text-white">
                  <span className="mr-1">
                    {showAdvanced ? 'Hide' : 'Show'} Advanced Options
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${showAdvanced ? 'rotate-180' : ''}`}>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {showAdvanced && <div className="mt-4 space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium text-white/80">
                          Style
                        </label>
                        <div className="relative group">
                          <InfoIcon size={16} className="text-white/50 group-hover:text-white" />
                          <div className="absolute right-0 bottom-full mb-2 w-48 bg-dark-100 text-xs text-white/80 p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            Choose a visual style for your generated image
                          </div>
                        </div>
                      </div>
                      <select className="w-full bg-white/5 border border-white/20 rounded-lg p-2.5 text-white focus:outline-none focus:border-primary-400">
                        <option value="realistic">Realistic</option>
                        <option value="anime">Anime</option>
                        <option value="digital-art">Digital Art</option>
                        <option value="oil-painting">Oil Painting</option>
                        <option value="watercolor">Watercolor</option>
                        <option value="pixel-art">Pixel Art</option>
                      </select>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium text-white/80">
                          Aspect Ratio
                        </label>
                        <div className="relative group">
                          <InfoIcon size={16} className="text-white/50 group-hover:text-white" />
                          <div className="absolute right-0 bottom-full mb-2 w-48 bg-dark-100 text-xs text-white/80 p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            Set the width-to-height ratio of your image
                          </div>
                        </div>
                      </div>
                      <select className="w-full bg-white/5 border border-white/20 rounded-lg p-2.5 text-white focus:outline-none focus:border-primary-400">
                        <option value="1:1">Square (1:1)</option>
                        <option value="3:2">Landscape (3:2)</option>
                        <option value="2:3">Portrait (2:3)</option>
                        <option value="16:9">Widescreen (16:9)</option>
                      </select>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium text-white/80">
                          Model Version
                        </label>
                        <div className="relative group">
                          <InfoIcon size={16} className="text-white/50 group-hover:text-white" />
                          <div className="absolute right-0 bottom-full mb-2 w-48 bg-dark-100 text-xs text-white/80 p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            Different AI models produce different artistic
                            results
                          </div>
                        </div>
                      </div>
                      <select className="w-full bg-white/5 border border-white/20 rounded-lg p-2.5 text-white focus:outline-none focus:border-primary-400">
                        <option value="v3">ImaginAI v3 (Latest)</option>
                        <option value="v2">ImaginAI v2</option>
                        <option value="v1">ImaginAI v1</option>
                      </select>
                    </div>
                  </div>}
              </div>
              <Button variant="primary" fullWidth onClick={handleGenerate} disabled={!prompt.trim() || isGenerating} icon={isGenerating ? <ZapIcon size={18} className="animate-pulse" /> : <SendIcon size={18} />}>
                {isGenerating ? 'Generating...' : 'Generate Image'}
              </Button>
              <div className="mt-4 text-xs text-center text-white/50">
                5 generations remaining today
              </div>
            </Card>
          </div>
          {/* Results Panel */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {isGenerating ? <div className="col-span-full flex flex-col items-center justify-center h-64 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-12 h-12 border-2 border-primary-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-white/70">Creating your masterpiece...</p>
                </div> : SAMPLE_IMAGES.slice(0, 4).map(image => <Card key={image.id} variant="default" className="overflow-hidden group relative">
                    <img src={image.url} alt={image.prompt} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <p className="text-sm text-white line-clamp-2 mb-3">
                        {image.prompt}
                      </p>
                      <div className="flex space-x-2">
                        <Button variant="secondary" size="sm" icon={<DownloadIcon size={16} />}>
                          Download
                        </Button>
                        <Button variant="secondary" size="sm" icon={<HeartIcon size={16} />}>
                          Save
                        </Button>
                        <Button variant="secondary" size="sm" icon={<CopyIcon size={16} />}>
                          Variations
                        </Button>
                        <Button variant="secondary" size="sm" icon={<TrashIcon size={16} />}>
                          Delete
                        </Button>
                      </div>
                    </div>
                  </Card>)}
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default Generate;