

export type Video = {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  author: string;
  views: number;
  categories: string[];
}



export const videos: Video[] = [
  {
    id: "UUID-1",
    title: "The Moltbook Situation",
    author: "The Primeagen",
    thumbnail: "https://i.ytimg.com/vi/2PWFj50DcZU/hqdefault.jpg",
    duration: "5:32",
    views: 1200,
    categories: ["Tech", "Rust", "AI", "Bots"]
  }, {
    id: "UUID-2",
    title: "You don't need a hooooook",
    author: "OmagDvid",
    thumbnail: "https://i.ytimg.com/vi/uiBDyZ-Pf2M/hq720.jpg",
    duration: "1:55:32",
    views: 300,
    categories: ["Tech", "AI"]
  },
  // Generate many more videos
  ...Array.from({ length: 1000 }, (_, i) => ({
    id: `UUID-${i + 3}`,
    title: [
      "Building a Compiler from Scratch",
      "Why Your Code is Slow",
      "React Server Components Explained",
      "The Future of JavaScript",
      "Debugging Like a Pro",
      "System Design Interview",
      "Docker Deep Dive",
      "Kubernetes Tutorial",
      "Advanced TypeScript Patterns",
      "Web Performance Optimization",
      "GraphQL vs REST",
      "Microservices Architecture",
      "Database Indexing Strategies",
      "Redis Caching Patterns",
      "OAuth 2.0 Explained",
      "WebAssembly Introduction",
      "Rust for Beginners",
      "Go Concurrency Patterns",
      "Python Async Programming",
      "Neural Networks Basics"
    ][i % 20] + ` Part ${Math.floor(i / 20) + 1}`,
    author: [
      "The Primeagen",
      "TheoTheoDev",
      "Fireship",
      "Web Dev Simplified",
      "Kevin Powell",
      "ByteByteGo",
      "Hussein Nasser",
      "TechLead",
      "Coding Garden",
      "Traversy Media"
    ][i % 10],
    thumbnail: [
      "https://i.ytimg.com/vi/2PWFj50DcZU/hqdefault.jpg",
      "https://i.ytimg.com/vi/uiBDyZ-Pf2M/hq720.jpg",
      "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
    ][i % 3],
    duration: `${Math.floor(Math.random() * 60)}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
    views: Math.floor(Math.random() * 100000),
    categories: [
      ["Tech", "Programming"],
      ["React", "Frontend"],
      ["Backend", "Node.js"],
      ["DevOps", "Docker"],
      ["AI", "Machine Learning"],
      ["Database", "SQL"],
      ["Security", "Auth"],
      ["Performance", "Optimization"],
      ["Rust", "Systems"],
      ["TypeScript", "JavaScript"]
    ][i % 10]
  }))
];
