

function getScore(callback)
{
    setTimeout(() =>
    {
        const score = 500;

        callback(score);

    }, 2000);
}

getScore((score) =>
{
    console.log(`Score: ${score}`);
})