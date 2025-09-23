const debug = false
const numberOfRequests = 10
const numberOfRuns = 100
const delayTime = 100

// this file is supposed to write to console
// eslint-disable no-console
function fakeRequestQuiet(n: number, msecs: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n + 10);
        }, msecs);
    });
}

async function makeRequest(requestNumber: number) {
    const response = await fakeRequestQuiet(requestNumber, delayTime);
    // eslint-disable-next-line no-console
    if (debug) { console.log(`request: ${requestNumber} => response: ${response}`) }

}

async function makeRequestsSerially() {
    for (let i = 1; i <= numberOfRequests; i++) {
        // eslint-disable-next-line no-await-in-loop
        await makeRequest(i)
    }
}

async function makeRequestsConcurrently() {
    const args = []
    for (let i = 1; i <= numberOfRequests; i++) { args.push(i) }
    await Promise.all(args.map(arg => makeRequest(arg)))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function timeIt(thunk: () => any): Promise<number> {
    const t0 = performance.now();
    await thunk();
    const t1 = performance.now()
    // console.log((t1-t0).toFixed(2))
    return t1 - t0
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function collectRunTimes(thunk: () => any) {
    let totalTime = 0
    let numberRun = 0
    let minTime = 100000
    let maxTime = 0
    for (let i = 1; i <= numberOfRuns; i++) {
        // eslint-disable-next-line no-await-in-loop
        const time = await timeIt(thunk)
        totalTime += time
        numberRun++
        minTime = Math.min(minTime, time);
        maxTime = Math.max(maxTime, time)
    }
    return { min: minTime, max: maxTime, avg: totalTime / numberRun }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function reportRunTimes(label: string, thunk: () => any) {
    const timeStats = await collectRunTimes(thunk);
    const { min, avg, max } = timeStats
    // eslint-disable-next-line no-console
    console.log(`${label}: min = ${min.toFixed(0)}  avg = ${avg.toFixed(0)} max = ${max.toFixed(0)} msec`)
}

async function driver() {
    // eslint-disable-next-line no-console
    console.log(`After ${numberOfRuns} runs of length ${numberOfRequests} with delay ${delayTime}ms`)
    reportRunTimes("makeRequestsSerially    ", makeRequestsSerially)
    reportRunTimes("makeRequestsConcurrently", makeRequestsConcurrently)
}

driver()
