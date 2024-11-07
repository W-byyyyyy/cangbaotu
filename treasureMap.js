class TreasureMap {
    // 生成随机数的辅助函数
    static getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // 遇到守卫时的处理函数，生成选项按钮供用户选择
    static handleGuardEncounter() {
        return new Promise((resolve, reject) => {
            const options = ["击败", "逃跑", "交出密码"];
            const choiceButtonsContainer = document.getElementById('choiceButtonsContainer');
            choiceButtonsContainer.innerHTML = '';
            options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.addEventListener('click', () => {
                    if (option === "交出密码") {
                        // 这里假设密码是 "secretpassword"，可根据实际情况修改
                        const password = "secretpassword";
                        const displayElement = document.getElementById('display');
                        displayElement.textContent = `密码是：${password}，赶紧输入密码交给守卫吧。`;
                        displayElement.classList.remove('show');
                        setTimeout(() => {
                            displayElement.classList.add('show');
                        }, 10);
                        resolve("成功交出密码，守卫放行。");
                    } else if (option === "击败") {
                        reject("你选择了击败守卫，不幸身亡，寻宝失败。");
                    } else {
                        reject("你选择了逃跑，守卫追了上来，寻宝失败。");
                    }
                    // 选择后隐藏选项按钮容器
                    choiceButtonsContainer.style.display = 'none';
                });
                choiceButtonsContainer.appendChild(button);
            });
            // 显示选项按钮容器
            choiceButtonsContainer.style.display = 'block';
        });
    }

    static async getInitialClue() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("在古老的图书馆里找到了第一个线索...");
            }, 1000);
        });
    }

    static async showMessageWithImage(message, imageSrc) {
        const displayElement = document.getElementById('display');
        displayElement.textContent = message;
        displayElement.classList.remove('show');

        // 动态添加图片元素
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.alt = "太阳.jpg";
        imgElement.classList.add('clue-image');

        // 将图片元素添加到显示消息的区域下方
        displayElement.parentNode.insertBefore(imgElement, displayElement.nextSibling);

        setTimeout(() => {
            displayElement.classList.add('show');
        }, 10);
    }

    static async decodeAncientScript(clue) {
        const validDecodedClues = [
            "线索解密：宝藏密码：太阳"
        ];
        const randomDecodedClueIndex = this.getRandomNumber(0, validDecodedClues.length - 1);
        const decodedClue = validDecodedClues[randomDecodedClueIndex];

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(decodedClue);
            }, 1500);
        });
    }

    static async findHiddenChamber(clue) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (clue) {
                    resolve("发现隐藏的密室，里面有一张地图指向宝藏的位置。");
                } else {
                    reject("未能找到隐藏的密室，线索丢失。");
                }
            }, 2000);
        });
    }

    static async solveMapPuzzle(hiddenChamber) {
        return new Promise((resolve, reject) => {
            const puzzleInput = document.getElementById('puzzleInput');
            const nextStepButton = document.getElementById('nextStepButton');
            puzzleInput.style.display = 'block';
            nextStepButton.style.display = 'inline-block';

            nextStepButton.onclick = async () => {
                const answer = puzzleInput.value;
                if (answer === "太阳") { // 假设谜题的答案是 "太阳"
                    resolve("谜题解开，宝藏就在眼前的洞穴中。");
                    puzzleInput.style.display = 'none';
                    nextStepButton.style.display = 'none';
                    document.getElementById('errorDisplay').textContent = '';
                } else {
                document.getElementById('errorDisplay').textContent = "谜题答案错误，请重试。";
                }
            };
        });
    }

    static async digForTreasure(location) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("挖掘成功，找到了宝藏！");
            }, 3000);
        });
    }

    static async showMessage(message) {
        const displayElement = document.getElementById('display');
        displayElement.textContent = message;
        displayElement.classList.remove('show');
        setTimeout(() => {
            displayElement.classList.add('show');
        }, 10);
    }

    // 新增关卡：攀爬陡峭山峰，提供继续向前和放弃选项
    static async climbSteepMountain() {
        return new Promise((resolve, reject) => {
            const choiceButtonsContainer = document.getElementById('choiceButtonsContainer');
            choiceButtonsContainer.innerHTML = '';

            const continueButton = document.createElement('button');
            continueButton.textContent = "继续向前";
            continueButton.addEventListener('click', () => {
                resolve("成功爬上陡峭山峰，继续前往下一个关卡。");
                choiceButtonsContainer.style.display = 'none';
            });

            const giveUpButton = document.createElement('button');
            giveUpButton.textContent = "放弃";
            giveUpButton.addEventListener('click', () => {
                reject("你选择了放弃，寻宝失败。");
                choiceButtonsContainer.style.display = 'none';
            });

            choiceButtonsContainer.appendChild(continueButton);
            choiceButtonsContainer.appendChild(giveUpButton);

            // 显示选项按钮容器
            choiceButtonsContainer.style.display = 'block';
        });
    }

    // 新增关卡：穿越神秘森林，有一定几率遇到陷阱或获得神秘道具，遇到陷阱可休整后继续
    static async crossMysticalForest() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const randomEvent = this.getRandomNumber(1, 3);
                if (randomEvent === 1) {
                    resolve("成功穿越神秘森林，未遇到任何阻碍。");
                } else if (randomEvent === 2) {
                    // 遇到陷阱，提示用户并提供休整后继续的选项
                    const displayElement = document.getElementById('display');
                    displayElement.textContent = "哎呀，在神秘森林中遇到了陷阱，受伤了，不过可以先休整一下再继续哦。";
                    displayElement.classList.remove('show');
                    setTimeout(() => {
                        displayElement.classList.add('show');
                    }, 10);

                    const choiceButtonsContainer = document.getElementById('choiceButtonsContainer');
                    choiceButtonsContainer.innerHTML = '';

                    const restButton = document.createElement('button');
                    restButton.textContent = "休整后继续";
                    restButton.addEventListener('click', async () => {
                        resolve("经过休整，成功穿越神秘森林，继续前往下一个关卡。");
                        choiceButtonsContainer.style.display = 'none';
                    });

                    const giveUpButton = document.createElement('button');
                    giveUpButton.textContent = "放弃";
                    giveUpButton.addEventListener('click', () => {
                        reject("你选择了放弃，寻宝失败。");
                        choiceButtonsContainer.style.display = 'none';
                    });

                    choiceButtonsContainer.appendChild(restButton);
                    choiceButtonsContainer.appendChild(giveUpButton);

                    // 显示选项按钮容器
                    choiceButtonsContainer.style.display = 'block';
                } else {
                    resolve("在神秘森林中发现了神秘道具，可能对后续寻宝有帮助。");
                }
            }, 2500);
        });
    }

    // 新增过渡：穿过森林遇到小河，出现渡河工具选择
    static async encounterRiverAfterForest() {
        return new Promise((resolve, reject) => {
            const displayElement = document.getElementById('display');
            displayElement.textContent = "穿过森林遇到了一条小河。";
            displayElement.classList.remove('show');
            setTimeout(() => {
                displayElement.classList.add('show');
            }, 10);

            const choiceButtonsContainer = document.getElementById('choiceButtonsContainer');
            choiceButtonsContainer.innerHTML = '';

            const raftButton = document.createElement('button');
            raftButton.textContent = "木筏";
            raftButton.addEventListener('click', () => {
                resolve("成功乘坐木筏渡过小河，继续前往下一个关卡。");
                choiceButtonsContainer.style.display = 'none';
            });

            const ropeButton = document.createElement('button');
            ropeButton.textContent = "绳索";
            ropeButton.addEventListener('click', () => {
                reject("绳索断裂，掉进河里，寻宝失败。");
                choiceButtonsContainer.style.display = 'none';
            });

            const swimButton = document.createElement('button');
            swimButton.textContent = "游泳";
            swimButton.addEventListener('click', () => {
                reject("河水太急，游泳体力不支，寻宝失败。");
                choiceButtonsContainer.style.display = 'none';
            });

            choiceButtonsContainer.appendChild(raftButton);
            choiceButtonsContainer.appendChild(ropeButton);
            choiceButtonsContainer.appendChild(swimButton);

            // 显示选项按钮容器
            choiceButtonsContainer.style.display = 'block';
        });
    }

    // 根据关卡设置背景图片路径的函数
    static getBackgroundImagePathForStage(stage) {
        switch (stage) {
            case 'initial':
                return '背景.jpg';
            case 'climbSteepMountain':
                return '爬山.jpg';
            case 'crossMysticalForest':
                return '森林.jpg';
            case 'encounterRiverAfterForest':
                return '河流.jpg';
            case 'handleGuardEncounter':
                return '守卫.jpg';
            case 'digForTreasure':
                return '宝藏.jpg';
            default:
                return '背景.jpg';
        }
    }

    // 更新背景图片的函数
    static updateBackgroundImage(stage) {
        const backgroundImageElement = document.getElementById('background-image');
        const imagePath = this.getBackgroundImagePathForStage(stage);
        backgroundImageElement.src = imagePath;
    }

    // 新增函数：显示进入新关卡的提示消息
    static async showEnteringNewStageMessage(stage) {
        const displayElement = document.getElementById('display');
        displayElement.textContent = `你来到了新的关卡：${stage}`;
        displayElement.classList.remove('show');
        setTimeout(() => {
            displayElement.classList.add('show');
        }, 10);
    }
}

let guessInput = null;
let guessButton = null;
let runeInput = null;
let submitButton = null;

async function findTreasureWithAsyncAwait() {
    try {
        const initialClue = await TreasureMap.getInitialClue();
        TreasureMap.updateBackgroundImage('initial');
        await TreasureMap.showMessage(initialClue);

        const decodedClue = await TreasureMap.decodeAncientScript(initialClue);
        await TreasureMap.showMessage(`经过一番仔细研究，我们成功解密了这条线索：${decodedClue}`);

        // 攀爬陡峭山峰
        const mountainResult = await TreasureMap.climbSteepMountain();
        await TreasureMap.showEnteringNewStageMessage('攀爬陡峭山峰');
        TreasureMap.updateBackgroundImage('climbSteepMountain');
        if (mountainResult.includes("成功爬上")) {
            await TreasureMap.showMessage("厉害呀，成功爬上了陡峭山峰，离宝藏又近了一步！");
        } else {
            await TreasureMap.showMessage("很遗憾，你选择了放弃，寻宝失败。");
        }

        // 穿越神秘森林
        const forestResult = await TreasureMap.crossMysticalForest();
        await TreasureMap.showEnteringNewStageMessage('穿越神秘森林');
        TreasureMap.updateBackgroundImage('crossMysticalForest');
        if (forestResult.includes("成功穿越")) {
            await TreasureMap.showMessage("太棒了，我们成功穿越了神秘森林，继续前进吧！");
        } else if (forestResult.includes("经过休整，成功穿越")) {
            await TreasureMap.showMessage("经过休整，成功穿越了神秘森林，继续前进吧！");
        } else if (forestResult.includes("遇到了陷阱")) {
            await TreasureMap.showMessage("哎呀，在神秘森林中遇到了陷阱，不过别灰心，稍作休息后我们继续寻宝。");
        } else {
            await TreasureMap.showMessage("哇哦，在神秘森林中发现了神秘道具，说不定后面能派上大用场呢，继续前进！");
        }

        // 穿过森林遇到小河
        const riverAfterForestResult = await TreasureMap.encounterRiverAfterForest();
        await TreasureMap.showEnteringNewStageMessage('穿过森林遇到小河');
        TreasureMap.updateBackgroundImage('encounterRiverAfterForest');
        if (riverAfterForestResult.includes("成功乘坐木筏渡过小河")) {
            await TreasureMap.showMessage("顺利渡过小河，继续前进吧！");
        } else {
            await TreasureMap.showMessage("哎呀，渡河时出了状况，寻宝失败。");
        }

        const hiddenChamber = await TreasureMap.findHiddenChamber(decodedClue);
        await TreasureMap.showMessage(hiddenChamber);

        const mapPuzzleSolved = await TreasureMap.solveMapPuzzle(hiddenChamber);
        if (mapPuzzleSolved) {
            await TreasureMap.showMessage(mapPuzzleSolved);
        }

        // 在宝藏地点遇见守卫
        const guardResult = await TreasureMap.handleGuardEncounter();
        await TreasureMap.showEnteringNewStageMessage('遇到守卫');
        TreasureMap.updateBackgroundImage('handleGuardEncounter');
        if (guardResult.includes("成功交出密码")) {
            await TreasureMap.showMessage("哈哈，成功交出密码，守卫放行啦，继续前进咯！");
        } else {
            await TreasureMap.showMessage("哎呀，处理守卫的情况不太顺利呀，不过没关系，我们可以重新开始寻宝哦。");
        }

        const treasureFound = await TreasureMap.digForTreasure(mapPuzzleSolved);
        await TreasureMap.showEnteringNewStageMessage('挖掘宝藏');
        TreasureMap.updateBackgroundImage('digForTreasure');
        await TreasureMap.showMessage(treasureFound);
    } catch (error) {
        await TreasureMap.showMessage(`任务失败：${error}`);
        // 显示重新开始按钮
        document.getElementById('restartButton').style.display = 'inline-block';
        // 为重新开始按钮添加点击事件，点击后重新开始游戏
        document.getElementById('restartButton').addEventListener('click', () => {
            resetGame();
        });
    } finally {
        // 清理页面上可能添加的输入框和按钮等元素
        if (guessInput) {
            guessInput.remove();
        }
        if (guessButton) {
            guessButton.remove();
        }
        if (runeInput) {
            runeInput.remove();
        }
        if (submitButton) {
            submitButton.remove();
        }
        // 隐藏选项按钮容器
        const choiceButtonsContainer = document.getElementById('choiceButtonsContainer');
        if (choiceButtonsContainer) {
            choiceButtonsContainer.style.display = 'none';
        }
    }
}

function resetGame() {
    // 隐藏重新开始按钮
    document.getElementById('restartButton').style.display = 'none';
    // 显示开始按钮
    document.getElementById('startButton').style.display = 'inline-block';
    // 清空显示消息的区域
    const displayElement = document.getElementById('display');
    displayElement.textContent = '';
    displayElement.classList.remove('show');

    // 确保 choiceButtonsContainer 元素存在后再设置其样式
    const choiceButtonsContainer = document.getElementById('choiceButtonsContainer');
    if (choiceButtonsContainer) {
        choiceButtonsContainer.style.display = 'none';
    }

    // 先移除之前绑定的点击事件
    const startButton = document.getElementById('startButton');
    startButton.removeEventListener('click', () => {
        findTreasureWithAsyncAwait();
        document.getElementById('startButton').style.display = 'inline-block';
    });

    // 重新开始游戏
    startTreasureHunt();

    // 将背景图片重置为初始状态
    const backgroundImageElement = document.getElementById('background-image');
    backgroundImageElement.src = '背景.jpg';
}

function startTreasureHunt() {
    document.getElementById('startButton').addEventListener('click', () => {
        findTreasureWithAsyncAwait();
        document.getElementById('startButton').style.display = 'none';
    });
}

// 页面加载完成后启动游戏
window.onload = startTreasureHunt;
