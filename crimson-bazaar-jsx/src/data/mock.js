



























export const categories = [
{ id: "electronics", name: "Electronics", icon: "Cpu" },
{ id: "fashion", name: "Fashion", icon: "Shirt" },
{ id: "home", name: "Home & Living", icon: "Home" },
{ id: "beauty", name: "Beauty", icon: "Sparkles" },
{ id: "sports", name: "Sports", icon: "Dumbbell" },
{ id: "books", name: "Books", icon: "BookOpen" },
{ id: "gaming", name: "Gaming", icon: "Gamepad2" },
{ id: "kitchen", name: "Kitchen", icon: "UtensilsCrossed" },
{ id: "toys", name: "Toys & Kids", icon: "ToyBrick" },
{ id: "automotive", name: "Automotive", icon: "Car" },
{ id: "audio", name: "Audio", icon: "Headphones" },
{ id: "watches", name: "Watches", icon: "Watch" }];


export const vendors = [
{ id: "v1", name: "NovaTech", slug: "novatech", tagline: "Future-grade electronics", logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=200&fit=crop", banner: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1600&h=400&fit=crop", rating: 4.8, productCount: 5 },
{ id: "v2", name: "Velour Atelier", slug: "velour-atelier", tagline: "Modern fashion, timeless cuts", logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop", banner: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&h=400&fit=crop", rating: 4.7, productCount: 5 },
{ id: "v3", name: "Hearth & Home", slug: "hearth-home", tagline: "Cozy living essentials", logo: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=200&h=200&fit=crop", banner: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1600&h=400&fit=crop", rating: 4.6, productCount: 5 },
{ id: "v4", name: "Lumina Beauty", slug: "lumina-beauty", tagline: "Glow with confidence", logo: "https://images.unsplash.com/photo-1522335789203-aaa2f5d2cce4?w=200&h=200&fit=crop", banner: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=1600&h=400&fit=crop", rating: 4.9, productCount: 5 },
{ id: "v5", name: "Apex Athletics", slug: "apex-athletics", tagline: "Train. Push. Conquer.", logo: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=200&h=200&fit=crop", banner: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&h=400&fit=crop", rating: 4.5, productCount: 5 },
{ id: "v6", name: "Ink & Folio", slug: "ink-folio", tagline: "Stories that linger", logo: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=200&h=200&fit=crop", banner: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1600&h=400&fit=crop", rating: 4.7, productCount: 5 },
{ id: "v7", name: "Pulse Audio", slug: "pulse-audio", tagline: "Sound that moves you", logo: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=200&h=200&fit=crop", banner: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&h=400&fit=crop", rating: 4.6, productCount: 4 },
{ id: "v8", name: "Urban Threads", slug: "urban-threads", tagline: "Streetwear redefined", logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop", banner: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&h=400&fit=crop", rating: 4.4, productCount: 4 },
{ id: "v9", name: "Pixel Arena", slug: "pixel-arena", tagline: "Level up your setup", logo: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=200&fit=crop", banner: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1600&h=400&fit=crop", rating: 4.8, productCount: 5 },
{ id: "v10", name: "Copper Kitchen", slug: "copper-kitchen", tagline: "Cook like a chef", logo: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop", banner: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1600&h=400&fit=crop", rating: 4.7, productCount: 4 },
{ id: "v11", name: "Tiny Wonders", slug: "tiny-wonders", tagline: "Magical play, every day", logo: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=200&h=200&fit=crop", banner: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=1600&h=400&fit=crop", rating: 4.9, productCount: 4 },
{ id: "v12", name: "RoadForge", slug: "roadforge", tagline: "Gear for every journey", logo: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=200&h=200&fit=crop", banner: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&h=400&fit=crop", rating: 4.5, productCount: 4 },
{ id: "v13", name: "Chrono Maison", slug: "chrono-maison", tagline: "Timepieces with soul", logo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop", banner: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1600&h=400&fit=crop", rating: 4.8, productCount: 4 }];


const img = (id, w = 800) => `https://images.unsplash.com/${id}?w=${w}&h=${w}&fit=crop`;

export const products = [
// NovaTech - electronics
{ id: "p1", name: "Quantum Wireless Headphones", slug: "quantum-wireless-headphones", price: 249, oldPrice: 329, category: "electronics", vendorId: "v1", rating: 4.8, reviewCount: 312, image: img("photo-1505740420928-5e560c06d30e"), images: [img("photo-1505740420928-5e560c06d30e"), img("photo-1583394838336-acd977736f90"), img("photo-1546435770-a3e426bf472b")], description: "Studio-grade wireless headphones with active noise cancellation and 40hr battery.", stock: 24, trending: true },
{ id: "p2", name: "Nebula Smartwatch Pro", slug: "nebula-smartwatch-pro", price: 399, category: "electronics", vendorId: "v1", rating: 4.7, reviewCount: 198, image: img("photo-1523275335684-37898b6baf30"), images: [img("photo-1523275335684-37898b6baf30")], description: "Always-on AMOLED, GPS, ECG, and 14-day battery life.", stock: 15, trending: true },
{ id: "p3", name: "Aero Mechanical Keyboard", slug: "aero-mechanical-keyboard", price: 159, category: "electronics", vendorId: "v1", rating: 4.6, reviewCount: 87, image: img("photo-1587829741301-dc798b83add3"), images: [img("photo-1587829741301-dc798b83add3")], description: "Hot-swappable switches, RGB, aluminum frame.", stock: 40 },
{ id: "p4", name: "Vortex 4K Webcam", slug: "vortex-4k-webcam", price: 129, oldPrice: 169, category: "electronics", vendorId: "v1", rating: 4.5, reviewCount: 64, image: img("photo-1587826080692-f439cd0b70da"), images: [img("photo-1587826080692-f439cd0b70da")], description: "AI auto-framing 4K webcam with dual mics.", stock: 30 },
{ id: "p5", name: "Pulse Wireless Earbuds", slug: "pulse-wireless-earbuds", price: 89, category: "electronics", vendorId: "v1", rating: 4.4, reviewCount: 421, image: img("photo-1572569511254-d8f925fe2cbb"), images: [img("photo-1572569511254-d8f925fe2cbb")], description: "Compact ANC earbuds with wireless charging.", stock: 80, trending: true },

// Velour Atelier - fashion
{ id: "p6", name: "Crimson Wool Overcoat", slug: "crimson-wool-overcoat", price: 449, oldPrice: 599, category: "fashion", vendorId: "v2", rating: 4.8, reviewCount: 56, image: img("photo-1539533018447-63fcce2678e3"), images: [img("photo-1539533018447-63fcce2678e3")], description: "Tailored Italian wool overcoat with satin lining.", stock: 12, trending: true },
{ id: "p7", name: "Midnight Silk Shirt", slug: "midnight-silk-shirt", price: 189, category: "fashion", vendorId: "v2", rating: 4.6, reviewCount: 102, image: img("photo-1602810318383-e386cc2a3ccf"), images: [img("photo-1602810318383-e386cc2a3ccf")], description: "100% mulberry silk with mother-of-pearl buttons.", stock: 25 },
{ id: "p8", name: "Noir Leather Boots", slug: "noir-leather-boots", price: 329, category: "fashion", vendorId: "v2", rating: 4.7, reviewCount: 88, image: img("photo-1542838132-92c53300491e"), images: [img("photo-1542838132-92c53300491e")], description: "Hand-finished full-grain leather Chelsea boots.", stock: 18 },
{ id: "p9", name: "Velvet Evening Dress", slug: "velvet-evening-dress", price: 279, category: "fashion", vendorId: "v2", rating: 4.9, reviewCount: 41, image: img("photo-1595777457583-95e059d581b8"), images: [img("photo-1595777457583-95e059d581b8")], description: "Floor-length velvet dress with structured shoulders.", stock: 9 },
{ id: "p10", name: "Heritage Denim Jacket", slug: "heritage-denim-jacket", price: 219, category: "fashion", vendorId: "v2", rating: 4.5, reviewCount: 134, image: img("photo-1551028719-00167b16eac5"), images: [img("photo-1551028719-00167b16eac5")], description: "Selvedge denim, raw indigo, copper hardware.", stock: 22 },

// Hearth & Home
{ id: "p11", name: "Ember Ceramic Vase", slug: "ember-ceramic-vase", price: 79, category: "home", vendorId: "v3", rating: 4.6, reviewCount: 73, image: img("photo-1578500494198-246f612d3b3d"), images: [img("photo-1578500494198-246f612d3b3d")], description: "Hand-thrown ceramic vase with reactive glaze.", stock: 35 },
{ id: "p12", name: "Velour Throw Blanket", slug: "velour-throw-blanket", price: 119, oldPrice: 149, category: "home", vendorId: "v3", rating: 4.8, reviewCount: 211, image: img("photo-1522771739844-6a9f6d5f14af"), images: [img("photo-1522771739844-6a9f6d5f14af")], description: "Plush velvet throw — heavy, warm, sumptuous.", stock: 50, trending: true },
{ id: "p13", name: "Onyx Pendant Lamp", slug: "onyx-pendant-lamp", price: 229, category: "home", vendorId: "v3", rating: 4.7, reviewCount: 38, image: img("photo-1513506003901-1e6a229e2d15"), images: [img("photo-1513506003901-1e6a229e2d15")], description: "Sculptural pendant with warm dimmable LED.", stock: 14 },
{ id: "p14", name: "Cedar Coffee Table", slug: "cedar-coffee-table", price: 549, category: "home", vendorId: "v3", rating: 4.5, reviewCount: 22, image: img("photo-1555041469-a586c61ea9bc"), images: [img("photo-1555041469-a586c61ea9bc")], description: "Solid cedar, blackened steel base.", stock: 6 },
{ id: "p15", name: "Aroma Diffuser Set", slug: "aroma-diffuser-set", price: 64, category: "home", vendorId: "v3", rating: 4.4, reviewCount: 156, image: img("photo-1602874801007-aa83e4d8d1e6"), images: [img("photo-1602874801007-aa83e4d8d1e6")], description: "Ultrasonic diffuser with 6 essential oils.", stock: 70 },

// Lumina Beauty
{ id: "p16", name: "Crimson Matte Lipstick", slug: "crimson-matte-lipstick", price: 28, category: "beauty", vendorId: "v4", rating: 4.9, reviewCount: 802, image: img("photo-1586495777744-4413f21062fa"), images: [img("photo-1586495777744-4413f21062fa")], description: "12-hour wear, vegan, hydrating matte finish.", stock: 200, trending: true },
{ id: "p17", name: "Glow Serum Vitamin C", slug: "glow-serum-vitamin-c", price: 54, oldPrice: 72, category: "beauty", vendorId: "v4", rating: 4.8, reviewCount: 412, image: img("photo-1620916566398-39f1143ab7be"), images: [img("photo-1620916566398-39f1143ab7be")], description: "20% Vitamin C brightening serum.", stock: 95 },
{ id: "p18", name: "Velvet Eyeshadow Palette", slug: "velvet-eyeshadow-palette", price: 68, category: "beauty", vendorId: "v4", rating: 4.7, reviewCount: 298, image: img("photo-1512496015851-a90fb38ba796"), images: [img("photo-1512496015851-a90fb38ba796")], description: "16 ultra-pigmented shades.", stock: 60 },
{ id: "p19", name: "Hydra Night Cream", slug: "hydra-night-cream", price: 89, category: "beauty", vendorId: "v4", rating: 4.6, reviewCount: 167, image: img("photo-1556228720-195a672e8a03"), images: [img("photo-1556228720-195a672e8a03")], description: "Overnight repair with hyaluronic acid.", stock: 80 },
{ id: "p20", name: "Signature Perfume Noir", slug: "signature-perfume-noir", price: 145, category: "beauty", vendorId: "v4", rating: 4.9, reviewCount: 88, image: img("photo-1541643600914-78b084683601"), images: [img("photo-1541643600914-78b084683601")], description: "Smoky oud, amber, vanilla.", stock: 40, trending: true },

// Apex Athletics
{ id: "p21", name: "Carbon Trail Runners", slug: "carbon-trail-runners", price: 189, category: "sports", vendorId: "v5", rating: 4.7, reviewCount: 245, image: img("photo-1542291026-7eec264c27ff"), images: [img("photo-1542291026-7eec264c27ff")], description: "Carbon-plated trail runners with grippy outsole.", stock: 55 },
{ id: "p22", name: "Pro Yoga Mat", slug: "pro-yoga-mat", price: 79, oldPrice: 99, category: "sports", vendorId: "v5", rating: 4.8, reviewCount: 512, image: img("photo-1518611012118-696072aa579a"), images: [img("photo-1518611012118-696072aa579a")], description: "6mm cushion, non-slip natural rubber.", stock: 120 },
{ id: "p23", name: "Adjustable Dumbbells", slug: "adjustable-dumbbells", price: 349, category: "sports", vendorId: "v5", rating: 4.6, reviewCount: 78, image: img("photo-1571019613454-1cb2f99b2d8b"), images: [img("photo-1571019613454-1cb2f99b2d8b")], description: "5-50lb adjustable pair with stand.", stock: 18 },
{ id: "p24", name: "Hydration Vest 12L", slug: "hydration-vest-12l", price: 129, category: "sports", vendorId: "v5", rating: 4.5, reviewCount: 64, image: img("photo-1517649763962-0c623066013b"), images: [img("photo-1517649763962-0c623066013b")], description: "Ultra-light vest with 2L bladder.", stock: 38 },
{ id: "p25", name: "Performance Compression Tee", slug: "performance-compression-tee", price: 49, category: "sports", vendorId: "v5", rating: 4.4, reviewCount: 188, image: img("photo-1556906781-9a412961c28c"), images: [img("photo-1556906781-9a412961c28c")], description: "Moisture-wicking compression fit.", stock: 90 },

// Ink & Folio
{ id: "p26", name: "The Crimson Atlas", slug: "the-crimson-atlas", price: 39, category: "books", vendorId: "v6", rating: 4.8, reviewCount: 142, image: img("photo-1544947950-fa07a98d237f"), images: [img("photo-1544947950-fa07a98d237f")], description: "Hardcover novel — a sweeping epic of betrayal.", stock: 75 },
{ id: "p27", name: "Midnight Poems Collection", slug: "midnight-poems", price: 24, category: "books", vendorId: "v6", rating: 4.7, reviewCount: 98, image: img("photo-1543002588-bfa74002ed7e"), images: [img("photo-1543002588-bfa74002ed7e")], description: "Curated collection from modern voices.", stock: 110 },
{ id: "p28", name: "Designer's Field Guide", slug: "designers-field-guide", price: 49, oldPrice: 65, category: "books", vendorId: "v6", rating: 4.9, reviewCount: 67, image: img("photo-1532012197267-da84d127e765"), images: [img("photo-1532012197267-da84d127e765")], description: "Practical principles for working designers.", stock: 50, trending: true },
{ id: "p29", name: "Leather Journal Set", slug: "leather-journal-set", price: 59, category: "books", vendorId: "v6", rating: 4.6, reviewCount: 203, image: img("photo-1531346878377-a5be20888e57"), images: [img("photo-1531346878377-a5be20888e57")], description: "Hand-stitched leather journal + pen.", stock: 45 },
{ id: "p30", name: "Architecture of Light", slug: "architecture-of-light", price: 79, category: "books", vendorId: "v6", rating: 4.8, reviewCount: 34, image: img("photo-1481627834876-b7833e8f5570"), images: [img("photo-1481627834876-b7833e8f5570")], description: "Coffee-table tome on modern architecture.", stock: 28 },

// Pulse Audio
{ id: "p31", name: "Studio Monitor Speakers", slug: "studio-monitor-speakers", price: 459, category: "audio", vendorId: "v7", rating: 4.7, reviewCount: 64, image: img("photo-1545454675-3531b543be5d"), images: [img("photo-1545454675-3531b543be5d")], description: "Reference-grade near-field studio monitors.", stock: 18 },
{ id: "p32", name: "Vinyl Turntable Classic", slug: "vinyl-turntable-classic", price: 329, oldPrice: 399, category: "audio", vendorId: "v7", rating: 4.8, reviewCount: 122, image: img("photo-1461360228754-6e81c478b882"), images: [img("photo-1461360228754-6e81c478b882")], description: "Belt-driven turntable with built-in preamp.", stock: 22, trending: true },
{ id: "p33", name: "Portable Bluetooth Speaker", slug: "portable-bluetooth-speaker", price: 119, category: "audio", vendorId: "v7", rating: 4.5, reviewCount: 287, image: img("photo-1608043152269-423dbba4e7e1"), images: [img("photo-1608043152269-423dbba4e7e1")], description: "Waterproof 360° speaker, 24hr battery.", stock: 65 },
{ id: "p34", name: "Pro Studio Microphone", slug: "pro-studio-microphone", price: 249, category: "audio", vendorId: "v7", rating: 4.6, reviewCount: 91, image: img("photo-1590602847861-f357a9332bbc"), images: [img("photo-1590602847861-f357a9332bbc")], description: "Large-diaphragm condenser mic with shock mount.", stock: 30 },

// Urban Threads - fashion/streetwear
{ id: "p35", name: "Oversized Graphic Hoodie", slug: "oversized-graphic-hoodie", price: 89, category: "fashion", vendorId: "v8", rating: 4.6, reviewCount: 312, image: img("photo-1556821840-3a63f95609a7"), images: [img("photo-1556821840-3a63f95609a7")], description: "Heavyweight cotton hoodie, street-ready fit.", stock: 80, trending: true },
{ id: "p36", name: "Cargo Tactical Pants", slug: "cargo-tactical-pants", price: 119, category: "fashion", vendorId: "v8", rating: 4.5, reviewCount: 145, image: img("photo-1624378439575-d8705ad7ae80"), images: [img("photo-1624378439575-d8705ad7ae80")], description: "Multi-pocket utility cargo pants.", stock: 60 },
{ id: "p37", name: "Retro High-Top Sneakers", slug: "retro-high-top-sneakers", price: 159, oldPrice: 199, category: "fashion", vendorId: "v8", rating: 4.7, reviewCount: 234, image: img("photo-1595950653106-6c9ebd614d3a"), images: [img("photo-1595950653106-6c9ebd614d3a")], description: "Retro-inspired high-top with chunky sole.", stock: 45 },
{ id: "p38", name: "Bucket Hat Reflective", slug: "bucket-hat-reflective", price: 39, category: "fashion", vendorId: "v8", rating: 4.4, reviewCount: 98, image: img("photo-1576871337622-98d48d1cf531"), images: [img("photo-1576871337622-98d48d1cf531")], description: "Reflective bucket hat, all-weather ready.", stock: 120 },

// Pixel Arena - gaming
{ id: "p39", name: "Pro Gaming Mouse RGB", slug: "pro-gaming-mouse-rgb", price: 89, category: "gaming", vendorId: "v9", rating: 4.8, reviewCount: 521, image: img("photo-1527814050087-3793815479db"), images: [img("photo-1527814050087-3793815479db")], description: "26K DPI sensor, 8 programmable buttons, RGB.", stock: 95, trending: true },
{ id: "p40", name: "Curved 4K Gaming Monitor", slug: "curved-4k-gaming-monitor", price: 799, oldPrice: 999, category: "gaming", vendorId: "v9", rating: 4.9, reviewCount: 187, image: img("photo-1593640408182-31c70c8268f5"), images: [img("photo-1593640408182-31c70c8268f5")], description: "32-inch 4K 144Hz curved display, HDR.", stock: 12, trending: true },
{ id: "p41", name: "Wireless Gaming Controller", slug: "wireless-gaming-controller", price: 79, category: "gaming", vendorId: "v9", rating: 4.6, reviewCount: 412, image: img("photo-1592840496694-26d035b52b48"), images: [img("photo-1592840496694-26d035b52b48")], description: "Cross-platform wireless controller, 40hr battery.", stock: 70 },
{ id: "p42", name: "Ergonomic Gaming Chair", slug: "ergonomic-gaming-chair", price: 449, category: "gaming", vendorId: "v9", rating: 4.7, reviewCount: 256, image: img("photo-1598550476439-6847785fcea6"), images: [img("photo-1598550476439-6847785fcea6")], description: "Lumbar support, recline, premium PU leather.", stock: 25 },
{ id: "p43", name: "VR Headset Pro", slug: "vr-headset-pro", price: 599, category: "gaming", vendorId: "v9", rating: 4.5, reviewCount: 143, image: img("photo-1622979135225-d2ba269cf1ac"), images: [img("photo-1622979135225-d2ba269cf1ac")], description: "Wireless VR with 4K per-eye display.", stock: 18 },

// Copper Kitchen
{ id: "p44", name: "Cast Iron Skillet 12in", slug: "cast-iron-skillet", price: 79, category: "kitchen", vendorId: "v10", rating: 4.9, reviewCount: 678, image: img("photo-1584947897558-4e06f1d0a7eb"), images: [img("photo-1584947897558-4e06f1d0a7eb")], description: "Pre-seasoned heritage cast iron skillet.", stock: 110 },
{ id: "p45", name: "Espresso Machine Pro", slug: "espresso-machine-pro", price: 549, oldPrice: 699, category: "kitchen", vendorId: "v10", rating: 4.8, reviewCount: 234, image: img("photo-1587080413959-06b859fb107d"), images: [img("photo-1587080413959-06b859fb107d")], description: "15-bar pump espresso with steam wand.", stock: 22, trending: true },
{ id: "p46", name: "Chef's Knife Damascus", slug: "chefs-knife-damascus", price: 189, category: "kitchen", vendorId: "v10", rating: 4.9, reviewCount: 312, image: img("photo-1593618998160-e34014e67546"), images: [img("photo-1593618998160-e34014e67546")], description: "67-layer Damascus steel chef's knife.", stock: 40 },
{ id: "p47", name: "Stand Mixer Pro 6L", slug: "stand-mixer-pro", price: 429, category: "kitchen", vendorId: "v10", rating: 4.7, reviewCount: 189, image: img("photo-1578749556568-bc2c40e68b61"), images: [img("photo-1578749556568-bc2c40e68b61")], description: "Powerful 6L stand mixer with 10 attachments.", stock: 28 },

// Tiny Wonders - toys
{ id: "p48", name: "Wooden Building Blocks 100pc", slug: "wooden-building-blocks", price: 49, category: "toys", vendorId: "v11", rating: 4.9, reviewCount: 412, image: img("photo-1558060370-d644479cb6f7"), images: [img("photo-1558060370-d644479cb6f7")], description: "Eco-friendly wooden blocks, non-toxic paint.", stock: 150 },
{ id: "p49", name: "Plush Bear Companion", slug: "plush-bear-companion", price: 29, category: "toys", vendorId: "v11", rating: 4.8, reviewCount: 521, image: img("photo-1576335479611-e4c2cf42dee6"), images: [img("photo-1576335479611-e4c2cf42dee6")], description: "Ultra-soft cuddle bear, machine washable.", stock: 200, trending: true },
{ id: "p50", name: "STEM Robot Kit", slug: "stem-robot-kit", price: 89, oldPrice: 119, category: "toys", vendorId: "v11", rating: 4.7, reviewCount: 187, image: img("photo-1535378620166-273708d44e4c"), images: [img("photo-1535378620166-273708d44e4c")], description: "Build & code your own robot, ages 8+.", stock: 65 },
{ id: "p51", name: "Magnetic Tile Set 120pc", slug: "magnetic-tile-set", price: 69, category: "toys", vendorId: "v11", rating: 4.8, reviewCount: 298, image: img("photo-1596461404969-9ae70f2830c1"), images: [img("photo-1596461404969-9ae70f2830c1")], description: "Colorful magnetic tiles for creative builds.", stock: 90 },

// RoadForge - automotive
{ id: "p52", name: "Dash Cam 4K Pro", slug: "dash-cam-4k-pro", price: 199, category: "automotive", vendorId: "v12", rating: 4.6, reviewCount: 234, image: img("photo-1583121274602-3e2820c69888"), images: [img("photo-1583121274602-3e2820c69888")], description: "4K dual-channel dash cam with GPS & WiFi.", stock: 55 },
{ id: "p53", name: "Portable Jump Starter", slug: "portable-jump-starter", price: 129, oldPrice: 169, category: "automotive", vendorId: "v12", rating: 4.7, reviewCount: 412, image: img("photo-1632823471565-1ecdf5a7d5fb"), images: [img("photo-1632823471565-1ecdf5a7d5fb")], description: "2000A jump starter + power bank + flashlight.", stock: 80 },
{ id: "p54", name: "Premium Car Care Kit", slug: "premium-car-care-kit", price: 89, category: "automotive", vendorId: "v12", rating: 4.5, reviewCount: 156, image: img("photo-1607860108855-64acf2078ed9"), images: [img("photo-1607860108855-64acf2078ed9")], description: "Complete detailing kit with wax, polish & cloths.", stock: 70 },
{ id: "p55", name: "All-Weather Floor Mats", slug: "all-weather-floor-mats", price: 119, category: "automotive", vendorId: "v12", rating: 4.6, reviewCount: 198, image: img("photo-1492144534655-ae79c964c9d7"), images: [img("photo-1492144534655-ae79c964c9d7")], description: "Heavy-duty rubber mats, custom-fit.", stock: 60 },

// Chrono Maison - watches
{ id: "p56", name: "Heritage Chronograph", slug: "heritage-chronograph", price: 749, oldPrice: 899, category: "watches", vendorId: "v13", rating: 4.9, reviewCount: 87, image: img("photo-1524592094714-0f0654e20314"), images: [img("photo-1524592094714-0f0654e20314")], description: "Swiss-movement chronograph with sapphire crystal.", stock: 15, trending: true },
{ id: "p57", name: "Diver's Automatic 200m", slug: "divers-automatic", price: 549, category: "watches", vendorId: "v13", rating: 4.8, reviewCount: 134, image: img("photo-1548171915-e79a380a2a4b"), images: [img("photo-1548171915-e79a380a2a4b")], description: "Automatic dive watch, ceramic bezel, 200m WR.", stock: 22 },
{ id: "p58", name: "Minimalist Leather Watch", slug: "minimalist-leather-watch", price: 189, category: "watches", vendorId: "v13", rating: 4.6, reviewCount: 245, image: img("photo-1434056886845-dac89ffe9b56"), images: [img("photo-1434056886845-dac89ffe9b56")], description: "Slim profile, Italian leather strap.", stock: 50 },
{ id: "p59", name: "Skeleton Mechanical Watch", slug: "skeleton-mechanical-watch", price: 429, category: "watches", vendorId: "v13", rating: 4.7, reviewCount: 76, image: img("photo-1622434641406-a158123450f9"), images: [img("photo-1622434641406-a158123450f9")], description: "See-through skeleton dial, hand-wound.", stock: 18 }];


export const getProduct = (slug) => products.find((p) => p.slug === slug);
export const getVendor = (idOrSlug) => vendors.find((v) => v.id === idOrSlug || v.slug === idOrSlug);
export const getVendorProducts = (vendorId) => products.filter((p) => p.vendorId === vendorId);