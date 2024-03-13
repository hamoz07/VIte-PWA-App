let cache_name = "pokemon-app";

const neededcaches = ["index.html", "offline.html"];

this.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cache_name).then((c) => {
      console.log("cahce opened");
      return c.addAll(neededcaches);
    })
  );
});

this.addEventListener("fetch", (ev) => {
  ev.respondWith(
    caches
      .match(ev.request)
      .then(() =>
        fetch(ev.request).catch(() => caches.match("offline.html"))
      )
  );
});

this.addEventListener("activate",(ev) => {
    const cacheList = []
    cacheList.push(cache_name)
    ev.waitUntil(
        caches.keys().then(c => Promise.all(
            c.map(cacher => {
                if(cacheList.includes(cacher)){
                    return caches.delete(cacher)
                }
            })
        ))
    )
})