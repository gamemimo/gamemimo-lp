import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Sparkles, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Player Support',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#06D6A0', '#FFD166', '#FF5E7E', '#118AB2']
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-base-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Fredoka'] text-base-content tracking-tight">
            We'd Love to Hear From You!
          </h2>
          <p className="mt-4 text-base sm:text-lg text-base-content/70 font-['Nunito']">
            Whether you have game feedback, publisher inquiries, creator collaboration ideas, or support requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Left Studio Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-base-200/60 border border-base-300">
              <h3 className="text-xl font-bold font-['Fredoka'] text-base-content mb-4">
                Studio Support & Inquiries
              </h3>
              
              <div className="space-y-4 text-sm font-['Nunito']">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-base-content">Player Support</div>
                    <a href="mailto:support@gamemimo.com" className="text-primary hover:underline font-semibold">
                      support@gamemimo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-base-content">Publishing & Press</div>
                    <a href="mailto:contact@sggame.us" className="text-secondary hover:underline font-semibold">
                      contact@sggame.us
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-base-content">Studio Headquarters</div>
                    <p className="text-base-content/70">
                      Atlanta, Georgia, United States &bull; Global Remote Teams
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-pink-500/10 via-orange-400/10 to-amber-300/10 border border-primary/20">
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Join GameMimo VIP Club</span>
              </div>
              <p className="text-xs text-base-content/70 font-['Nunito'] mb-4">
                Get early beta invites to our 2027 titles, redeem exclusive in-game promo codes, and receive festive holiday wallpapers.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="input input-sm input-bordered w-full rounded-full"
                />
                <button
                  onClick={() => confetti({ particleCount: 30, spread: 50 })}
                  className="btn btn-sm btn-primary rounded-full px-4 font-bold"
                >
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-base-100 border border-base-200 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-success/20 text-success flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-['Fredoka'] text-base-content">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="text-sm text-base-content/70 max-w-md mx-auto font-['Nunito']">
                    Our team has received your message. We usually respond within 24 hours. Have fun playing!
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', type: 'Player Support', message: '' }); }}
                    className="btn btn-sm btn-outline rounded-full font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="label text-xs font-bold uppercase tracking-wider text-base-content/70">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="input input-bordered w-full rounded-2xl"
                    />
                  </div>

                  <div>
                    <label className="label text-xs font-bold uppercase tracking-wider text-base-content/70">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="input input-bordered w-full rounded-2xl"
                    />
                  </div>

                  <div>
                    <label className="label text-xs font-bold uppercase tracking-wider text-base-content/70">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.type}
                      onChange={e => setFormData({ ...formData, type: e.target.value })}
                      className="select select-bordered w-full rounded-2xl"
                    >
                      <option value="Player Support">🎮 Player Support / Bug Report</option>
                      <option value="Publisher Inquiries">🤝 Publishing & Co-Development</option>
                      <option value="Creator Program">📹 Content Creator / Streamer</option>
                      <option value="General Feedback">💡 Game Feedback & Suggestions</option>
                    </select>
                  </div>

                  <div>
                    <label className="label text-xs font-bold uppercase tracking-wider text-base-content/70">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can our studio assist you today?..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="textarea textarea-bordered w-full rounded-2xl"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block rounded-full font-bold shadow-lg shadow-primary/25 gap-2 mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to GameMimo</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
