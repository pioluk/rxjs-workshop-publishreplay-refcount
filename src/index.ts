import { interval } from "rxjs";
import { map, publishReplay, take, refCount } from "rxjs/operators";
import "./styles.css";
import { log } from "./utils";

const source = interval(100).pipe(
  take(3),
  map(x => x + 1),
  publishReplay(1),
  refCount()
);

log("A subscribe");
source.subscribe(x => log("A", x));

setTimeout(() => {
  log("B subscribe");
  source.subscribe(x => log("B", x));
}, 100);

setTimeout(() => {
  log("C subscribe");
  source.subscribe(x => log("C", x));
}, 400);
