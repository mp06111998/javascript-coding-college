class Vector4f {
    constructor(x, y, z, q = 1) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.q = q;
    }

    negate(vector1) {
        var x = vector1.x * -1;
        var y = vector1.y * -1;
        var z = vector1.z * -1;
        let vector = new Vector4f(x, y, z);
        return vector;
    }

    add(vector1, vector2) {
        var x = vector1.x + vector2.x;
        var y = vector1.y + vector2.y;
        var z = vector1.z + vector2.z;
        let vector = new Vector4f(x, y, z);
        return vector;
    }

    scalarProduct(scalar, vector1) {
        var x = vector1.x * scalar;
        var y = vector1.y * scalar;
        var z = vector1.z * scalar;
        let vector = new Vector4f(x, y, z);
        return vector;
    }

    dotProduct(vector1, vector2) {
        return (vector1.x * vector2.x +
            vector1.y * vector2.y +
            vector1.z * vector2.z);
    }

    crossProduct(vector1, vector2) {
        var x = (vector1.y * vector2.z - vector1.z * vector2.y);
        var y = (vector1.z * vector2.x - vector1.x * vector2.z);
        var z = (vector1.x * vector2.y - vector1.y * vector2.x);
        let vector = new Vector4f(x, y, z);
        return vector;
    }

    length(vector1) {
        return (Math.sqrt(Math.pow(vector1.x, 2) +
            Math.pow(vector1.y, 2) +
            Math.pow(vector1.z, 2)));
    }

    normalize(vector1) {
        var x = vector1.x / this.length(vector1);
        var y = vector1.y / this.length(vector1);
        var z = vector1.z / this.length(vector1);
        let vector = new Vector4f(x, y, z);
        return vector;
    }

    project(vector1, vector2) {
        var scalar = (this.dotProduct(vector1, vector2) / Math.pow(this.length(vector1), 2));
        return (this.scalarProduct(scalar, vector1));
    }

    cosPhi(vector1, vector2) {
        return (this.dotProduct(vector1, vector2) /
            this.length(vector1) * this.length(vector2));
    }
}

class Matrix4f {
    constructor(arr1, arr2, arr3, arr4) {
        this.arr1 = arr1;
        this.arr2 = arr2;
        this.arr3 = arr3;
        this.arr4 = arr4;
    }

    negate(matrix1) {
        var arr1 = [matrix1.arr1[0] * -1, matrix1.arr1[1] * -1, matrix1.arr1[2] * -1, matrix1.arr1[3] * -1];
        var arr2 = [matrix1.arr2[0] * -1, matrix1.arr2[1] * -1, matrix1.arr2[2] * -1, matrix1.arr2[3] * -1];
        var arr3 = [matrix1.arr3[0] * -1, matrix1.arr3[1] * -1, matrix1.arr3[2] * -1, matrix1.arr3[3] * -1];
        var arr4 = [matrix1.arr4[0] * -1, matrix1.arr4[1] * -1, matrix1.arr4[2] * -1, matrix1.arr4[3] * -1];
        let matrix = new Matrix4f(arr1, arr2, arr3, arr4);
        return matrix;
    }

    add(matrix1, matrix2) {
        var arr1 = [matrix1.arr1[0] + matrix2.arr1[0], matrix1.arr1[1] + matrix2.arr1[1], matrix1.arr1[2] + matrix2.arr1[2], matrix1.arr1[3] + matrix2.arr1[3]];
        var arr2 = [matrix1.arr2[0] + matrix2.arr2[0], matrix1.arr2[1] + matrix2.arr2[1], matrix1.arr2[2] + matrix2.arr2[2], matrix1.arr2[3] + matrix2.arr2[3]];
        var arr3 = [matrix1.arr3[0] + matrix2.arr3[0], matrix1.arr3[1] + matrix2.arr3[1], matrix1.arr3[2] + matrix2.arr3[2], matrix1.arr3[3] + matrix2.arr3[3]];
        var arr4 = [matrix1.arr4[0] + matrix2.arr4[0], matrix1.arr4[1] + matrix2.arr4[1], matrix1.arr4[2] + matrix2.arr4[2], matrix1.arr4[3] + matrix2.arr4[3]];
        let matrix = new Matrix4f(arr1, arr2, arr3, arr4);
        return matrix;
    }

    transpose(matrix1) {
        var arr1 = [matrix1.arr1[0], matrix1.arr2[0], matrix1.arr3[0], matrix1.arr4[0]];
        var arr2 = [matrix1.arr1[1], matrix1.arr2[1], matrix1.arr3[1], matrix1.arr4[1]];
        var arr3 = [matrix1.arr1[2], matrix1.arr2[2], matrix1.arr3[2], matrix1.arr4[2]];
        var arr4 = [matrix1.arr1[3], matrix1.arr2[3], matrix1.arr3[3], matrix1.arr4[3]];
        let matrix = new Matrix4f(arr1, arr2, arr3, arr4);
        return matrix;
    }

    multiplyScalar(scalar, matrix1) {
        var arr1 = [matrix1.arr1[0] * scalar, matrix1.arr1[1] * scalar, matrix1.arr1[2] * scalar, matrix1.arr1[3] * scalar];
        var arr2 = [matrix1.arr2[0] * scalar, matrix1.arr2[1] * scalar, matrix1.arr2[2] * scalar, matrix1.arr2[3] * scalar];
        var arr3 = [matrix1.arr3[0] * scalar, matrix1.arr3[1] * scalar, matrix1.arr3[2] * scalar, matrix1.arr3[3] * scalar];
        var arr4 = [matrix1.arr4[0] * scalar, matrix1.arr4[1] * scalar, matrix1.arr4[2] * scalar, matrix1.arr4[3] * scalar];
        let matrix = new Matrix4f(arr1, arr2, arr3, arr4);
        return matrix;
    }

    multiply(matrix1, matrix2) {
        var arr1 = [matrix1.arr1[0] * matrix2.arr1[0] + matrix1.arr1[1] * matrix2.arr2[0] + matrix1.arr1[2] * matrix2.arr3[0] + matrix1.arr1[3] * matrix2.arr4[0], matrix1.arr1[0] * matrix2.arr1[1] + matrix1.arr1[1] * matrix2.arr2[1] + matrix1.arr1[2] * matrix2.arr3[1] + matrix1.arr1[3] * matrix2.arr4[1], matrix1.arr1[0] * matrix2.arr1[2] + matrix1.arr1[1] * matrix2.arr2[2] + matrix1.arr1[2] * matrix2.arr3[2] + matrix1.arr1[3] * matrix2.arr4[2], matrix1.arr1[0] * matrix2.arr1[3] + matrix1.arr1[1] * matrix2.arr2[3] + matrix1.arr1[2] * matrix2.arr3[3] + matrix1.arr1[3] * matrix2.arr4[3]];
        var arr2 = [matrix1.arr2[0] * matrix2.arr1[0] + matrix1.arr2[1] * matrix2.arr2[0] + matrix1.arr2[2] * matrix2.arr3[0] + matrix1.arr2[3] * matrix2.arr4[0], matrix1.arr2[0] * matrix2.arr1[1] + matrix1.arr2[1] * matrix2.arr2[1] + matrix1.arr2[2] * matrix2.arr3[1] + matrix1.arr2[3] * matrix2.arr4[1], matrix1.arr2[0] * matrix2.arr1[2] + matrix1.arr2[1] * matrix2.arr2[2] + matrix1.arr2[2] * matrix2.arr3[2] + matrix1.arr2[3] * matrix2.arr4[2], matrix1.arr2[0] * matrix2.arr1[3] + matrix1.arr2[1] * matrix2.arr2[3] + matrix1.arr2[2] * matrix2.arr3[3] + matrix1.arr2[3] * matrix2.arr4[3]];
        var arr3 = [matrix1.arr3[0] * matrix2.arr1[0] + matrix1.arr3[1] * matrix2.arr2[0] + matrix1.arr3[2] * matrix2.arr3[0] + matrix1.arr3[3] * matrix2.arr4[0], matrix1.arr3[0] * matrix2.arr1[1] + matrix1.arr3[1] * matrix2.arr2[1] + matrix1.arr3[2] * matrix2.arr3[1] + matrix1.arr3[3] * matrix2.arr4[1], matrix1.arr3[0] * matrix2.arr1[2] + matrix1.arr3[1] * matrix2.arr2[2] + matrix1.arr3[2] * matrix2.arr3[2] + matrix1.arr3[3] * matrix2.arr4[2], matrix1.arr3[0] * matrix2.arr1[3] + matrix1.arr3[1] * matrix2.arr2[3] + matrix1.arr3[2] * matrix2.arr3[3] + matrix1.arr3[3] * matrix2.arr4[3]];
        var arr4 = [matrix1.arr4[0] * matrix2.arr1[0] + matrix1.arr4[1] * matrix2.arr2[0] + matrix1.arr4[2] * matrix2.arr3[0] + matrix1.arr4[3] * matrix2.arr4[0], matrix1.arr4[0] * matrix2.arr1[1] + matrix1.arr4[1] * matrix2.arr2[1] + matrix1.arr4[2] * matrix2.arr3[1] + matrix1.arr4[3] * matrix2.arr4[1], matrix1.arr4[0] * matrix2.arr1[2] + matrix1.arr4[1] * matrix2.arr2[2] + matrix1.arr4[2] * matrix2.arr3[2] + matrix1.arr4[3] * matrix2.arr4[2], matrix1.arr4[0] * matrix2.arr1[3] + matrix1.arr4[1] * matrix2.arr2[3] + matrix1.arr4[2] * matrix2.arr3[3] + matrix1.arr4[3] * matrix2.arr4[3]];
        let matrix = new Matrix4f(arr1, arr2, arr3, arr4);
        return matrix;
    }
}

class PointManager {
    constructor() {
        this.arr = [];
    }

    create() {
        let besedilo = document.getElementById("input").value.split("\n");
        this.arr = [];
        for (let i = 0; i < besedilo.length; i++) {
            let a = besedilo[i].split(" ");
            this.arr.push(new Vector4f(Number(a[1]), Number(a[2]), Number(a[3])));
        }
        let a = new TransformPoints(this.arr);
        a.test();
    }
}

class Transformation {
    constructor() {
        this.matrix1 = new Matrix4f(
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        );
    }

    izpis() {
        return (this.matrix1.arr1[0] + " " + this.matrix1.arr1[1] + " " + this.matrix1.arr1[2] + " " + this.matrix1.arr1[3] + "\n" +
            this.matrix1.arr2[0] + " " + this.matrix1.arr2[1] + " " + this.matrix1.arr2[2] + " " + this.matrix1.arr2[3] + "\n" +
            this.matrix1.arr3[0] + " " + this.matrix1.arr3[1] + " " + this.matrix1.arr3[2] + " " + this.matrix1.arr3[3] + "\n" +
            this.matrix1.arr4[0] + " " + this.matrix1.arr4[1] + " " + this.matrix1.arr4[2] + " " + this.matrix1.arr4[3]
        );
    }

    translate(vector1) {
        this.matrix1.arr1[3] = vector1.x;
        this.matrix1.arr2[3] = vector1.y;
        this.matrix1.arr3[3] = vector1.z;
    }

    scale(vector1) {
        this.matrix1.arr1[0] = vector1.x;
        this.matrix1.arr2[1] = vector1.y;
        this.matrix1.arr3[2] = vector1.z;
    }

    rotateX(angle) {
        this.matrix1.arr2[1] = Math.cos(angle);
        this.matrix1.arr2[2] = -Math.sin(angle);
        this.matrix1.arr3[1] = Math.sin(angle);
        this.matrix1.arr3[2] = Math.cos(angle);
    }

    rotateY(angle) {
        this.matrix1.arr1[0] = Math.cos(angle);
        this.matrix1.arr1[2] = Math.sin(angle);
        this.matrix1.arr3[0] = -Math.sin(angle);
        this.matrix1.arr3[2] = Math.cos(angle);
    }

    rotateZ(angle) {
        this.matrix1.arr1[0] = Math.cos(angle);
        this.matrix1.arr1[1] = -Math.sin(angle);
        this.matrix1.arr2[0] = Math.sin(angle);
        this.matrix1.arr2[1] = Math.cos(angle);
    }

    transformPoint(vector1) {
        var x = (this.matrix1.arr1[0] * vector1.x + this.matrix1.arr1[1] * vector1.y + this.matrix1.arr1[2] * vector1.z + this.matrix1.arr1[3] * vector1.q);
        var y = (this.matrix1.arr2[0] * vector1.x + this.matrix1.arr2[1] * vector1.y + this.matrix1.arr2[2] * vector1.z + this.matrix1.arr2[3] * vector1.q);
        var z = (this.matrix1.arr3[0] * vector1.x + this.matrix1.arr3[1] * vector1.y + this.matrix1.arr3[2] * vector1.z + this.matrix1.arr3[3] * vector1.q);
        var q = (this.matrix1.arr4[0] * vector1.x + this.matrix1.arr4[1] * vector1.y + this.matrix1.arr4[2] * vector1.z + this.matrix1.arr4[3] * vector1.q);
        let vector = new Vector4f(x, y, z, q);
        return vector;
    }
}

class TransformPoints {
    constructor(point) {
        this.vhod = point;
    }

    test() {
        let trans = new Transformation();
        let arr = [];

        //translacja vzdolž osi x za 1.25
        //rotacija okoli osi z za kot pi / 3
        //translacija vzdolž osi z za 4.15
        //translacija vzdolž osi y za 3.14
        //skalacija vzdolž osi x in y za 1.12
        //rotacija okoli osi y za kot 5 * pi / 8

        for (var i = 0; i < this.vhod.length; i++) {

            trans.matrix1 = new Matrix4f(
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1]
            );
            let vector1 = new Vector4f(1.25, 0, 0);
            trans.translate(vector1);
            let v1 = trans.transformPoint(this.vhod[i]);

            trans.matrix1 = new Matrix4f(
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1]
            );
            trans.rotateZ(Math.PI / 3);
            let v2 = trans.transformPoint(v1);

            trans.matrix1 = new Matrix4f(
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1]
            );
            let vector2 = new Vector4f(0, 0, 4.15);
            trans.translate(vector2);
            let v3 = trans.transformPoint(v2);

            trans.matrix1 = new Matrix4f(
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1]
            );
            let vector3 = new Vector4f(0, 3.14, 0);
            trans.translate(vector3);
            let v4 = trans.transformPoint(v3);

            trans.matrix1 = new Matrix4f(
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1]
            );
            let vector4 = new Vector4f(1.12, 1.12, 0);
            trans.scale(vector4);
            let v5 = trans.transformPoint(v4);

            trans.matrix1 = new Matrix4f(
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1]
            );
            trans.rotateY(5 * Math.PI / 8);
            let v6 = trans.transformPoint(v5);
            arr.push(v6);
        }

        let string = "";
        let st = 0;
        for (let j = 0; j < arr.length; j++) {
            let str = "v " + arr[j].x.toFixed(5) + " " + arr[j].y.toFixed(5) + " " + arr[j].z.toFixed(5) + "\n";
            let a = str.split(" ");
            for (let i = 0; i < a.length; i++) {
                if (a[i] == "NaN") {
                    st = 1;
                    alert("Prosim vnesite veljaven vektor!\nIn preberite si navodila.");
                    break;
                }
            }
            if (st == 0) {
                string += str;
            }
            else{
                break;
            }
            st = 0;
        }

        document.getElementById("input1").value = string;
    }
}