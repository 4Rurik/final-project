<?php

namespace Tests\Unit\Helpers;

use PHPUnit\Framework\TestCase;

use App\Models\Blog;
use App\Models\User;
use App\Models\Comment;
 
class BlogTest extends TestCase
{
    // Test para la relación "userBlog()"
    public function testUserBlog()
    {
        // Creamos un usuario ficticio
        $user = User::factory()->create();

        // Creamos un blog relacionado con el usuario ficticio
        $blog = Blog::factory()->create([
            'user_id' => $user->id,
        ]);

        // Obtenemos el resultado de la relación "userBlog()"
        $relatedUser = $blog->userBlog;

        // Verificamos que el resultado sea una instancia de "User"
        $this->assertInstanceOf(User::class, $relatedUser);

        // Verificamos que el ID del usuario relacionado coincida con el ID del usuario ficticio
        $this->assertEquals($user->id, $relatedUser->id);
    }

    // Test para la relación "commentBlog()"
    public function testCommentBlog()
    {
        // Creamos un blog ficticio
        $blog = Blog::factory()->create();

        // Creamos algunos comentarios relacionados con el blog ficticio
        $comments = Comment::factory()->count(3)->create([
            'blog_id' => $blog->id,
        ]);

        // Obtenemos los comentarios relacionados mediante la relación "commentBlog()"
        $relatedComments = $blog->commentBlog;

        // Verificamos que el resultado sea una colección de instancias de "Comment"
        $this->assertInstanceOf(\Illuminate\Database\Eloquent\Collection::class, $relatedComments);

        // Verificamos que la cantidad de comentarios relacionados sea igual a 3
        $this->assertCount(3, $relatedComments);

        // Verificamos que todos los comentarios estén asociados al blog ficticio
        foreach ($relatedComments as $comment) {
            $this->assertEquals($blog->id, $comment->blog_id);
        }
    }

    // Test para los atributos fillable
    public function testFillableAttributes()
    {
        // Datos de prueba para el blog
        $data = [
            'title' => 'Título de prueba',
            'content' => 'Contenido de prueba',
            'category' => 'Categoria de prueba',
            'image_url' => 'https://ejemplo.com/imagen.jpg',
            'status' => 'publicado',
        ];

        // Creamos un blog con los datos de prueba
        $blog = Blog::create($data);

        // Verificamos que los atributos fillable sean correctos
        $this->assertEquals($data['title'], $blog->title);
        $this->assertEquals($data['content'], $blog->content);
        $this->assertEquals($data['category'], $blog->category);
        $this->assertEquals($data['image_url'], $blog->image_url);
        $this->assertEquals($data['status'], $blog->status);
    }
}